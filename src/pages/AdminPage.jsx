import React, { useEffect, useMemo, useRef, useState } from 'react';
import SectionHead from '../components/SectionHead.jsx';
import Avatar from '../components/Avatar.jsx';
import {
  BASE_MEMBERS,
  ASSIGNABLE_SECTORS,
  DEFAULT_FOCUS,
  DEFAULT_ZOOM,
} from '../data/teamData';
import { PHOTO_KEYS, getPhoto } from '../data/photoRegistry';
import { exportTeamDataFile, exportBundle } from '../utils/exportTeamData';
import { processPhoto, toPhotoKey, uniquePhotoKey } from '../utils/photoProcess';
import '../admin.css';

const STORAGE_KEY = 'mackracing.admin.members.v1';
const UPLOADS_KEY = 'mackracing.admin.uploads.v1';

/* Clona a lista base para edição local */
const cloneBase = () =>
  BASE_MEMBERS.map((m) => ({
    ...m,
    focus: { ...(m.focus || DEFAULT_FOCUS) },
    zoom: typeof m.zoom === 'number' ? m.zoom : DEFAULT_ZOOM,
    _id: Math.random().toString(36).slice(2, 9),
  }));

const AdminPage = () => {
  const [members, setMembers] = useState(cloneBase);
  /* Fotos enviadas nesta sessão: { [photoKey]: { base64, dataUrl, originalName } }.
     Ficam só no navegador até você exportar o ZIP. */
  const [uploads, setUploads] = useState({});
  const [selectedId, setSelectedId] = useState(null);
  const [filter, setFilter] = useState('Todos');
  const [query, setQuery] = useState('');
  const [toast, setToast] = useState('');
  const [dirty, setDirty] = useState(false);

  /* ---------- Carrega rascunho salvo ---------- */
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length) {
          setMembers(
            parsed.map((m) => ({
              ...m,
              focus: { ...(m.focus || DEFAULT_FOCUS) },
              zoom: typeof m.zoom === 'number' ? m.zoom : DEFAULT_ZOOM,
              _id: m._id || Math.random().toString(36).slice(2, 9),
            }))
          );
          setToast('Rascunho local carregado');
        }
      }
    } catch {
      /* rascunho corrompido — ignora */
    }

    try {
      const rawUp = localStorage.getItem(UPLOADS_KEY);
      if (rawUp) {
        const parsed = JSON.parse(rawUp);
        if (parsed && typeof parsed === 'object') setUploads(parsed);
      }
    } catch {
      /* fotos do rascunho corrompidas — ignora */
    }
  }, []);

  /* ---------- Autosave ---------- */
  useEffect(() => {
    if (!dirty) return;
    const t = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(members));
      } catch {
        /* quota cheia */
      }
    }, 400);
    return () => clearTimeout(t);
  }, [members, dirty]);

  /* ---------- Autosave das fotos enviadas ---------- */
  useEffect(() => {
    if (!dirty) return;
    const t = setTimeout(() => {
      try {
        localStorage.setItem(UPLOADS_KEY, JSON.stringify(uploads));
      } catch {
        // localStorage tem ~5MB; muitas fotos estouram a cota.
        setToast('Aviso: fotos demais para salvar rascunho — exporte o ZIP.');
      }
    }, 500);
    return () => clearTimeout(t);
  }, [uploads, dirty]);

  /* ---------- Toast auto-dismiss ---------- */
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(''), 2600);
    return () => clearTimeout(t);
  }, [toast]);

  const update = (id, patch) => {
    setDirty(true);
    setMembers((prev) =>
      prev.map((m) => (m._id === id ? { ...m, ...patch } : m))
    );
  };

  /* Foto a exibir: o upload desta sessão tem prioridade sobre o asset do repo.
     É isso que faz a troca de foto aparecer na hora no preview. */
  const resolvePhoto = (key) => (uploads[key] ? uploads[key].dataUrl : getPhoto(key));

  /* Chaves que o photoRegistry precisa conhecer: as do repo + as enviadas.
     Só entram as que estão realmente em uso, para não gerar import quebrado. */
  const registryKeys = useMemo(() => {
    const inUse = new Set(members.map((m) => m.photoKey));
    const known = new Set([...PHOTO_KEYS, ...Object.keys(uploads)]);
    return [...known].filter((k) => inUse.has(k) || PHOTO_KEYS.includes(k));
  }, [members, uploads]);

  /* Substitui a foto de um membro que já existe, mantendo o mesmo nome
     de arquivo (photoKey) — assim o arquivo antigo é sobrescrito no repo. */
  const replacePhoto = async (member, file) => {
    try {
      const processed = await processPhoto(file);
      const key = member.photoKey;
      setDirty(true);
      setUploads((prev) => ({
        ...prev,
        [key]: {
          base64: processed.base64,
          dataUrl: processed.dataUrl,
          originalName: processed.originalName,
        },
      }));
      setToast(`Foto de ${member.name} substituída (${key}.png)`);
    } catch (err) {
      setToast(err.message || 'Não foi possível processar a imagem.');
    }
  };

  /* Envia uma foto para um membro que ainda não tem arquivo próprio:
     cria uma chave nova a partir do nome. */
  const uploadNewPhoto = async (member, file) => {
    try {
      const processed = await processPhoto(file);
      const taken = new Set([...PHOTO_KEYS, ...Object.keys(uploads)]);
      taken.delete(member.photoKey);
      const key = uniquePhotoKey(toPhotoKey(member.name), taken);
      setDirty(true);
      setUploads((prev) => ({
        ...prev,
        [key]: {
          base64: processed.base64,
          dataUrl: processed.dataUrl,
          originalName: processed.originalName,
        },
      }));
      update(member._id, { photoKey: key });
      setToast(`Foto nova criada: ${key}.png`);
    } catch (err) {
      setToast(err.message || 'Não foi possível processar a imagem.');
    }
  };

  const undoUpload = (key) => {
    setDirty(true);
    setUploads((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
    setToast('Foto revertida para a do repositório');
  };

  const selected = members.find((m) => m._id === selectedId) || null;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return members.filter((m) => {
      const okSector = filter === 'Todos' || m.sector === filter;
      const okQuery =
        !q ||
        m.name.toLowerCase().includes(q) ||
        (m.role || '').toLowerCase().includes(q);
      return okSector && okQuery;
    });
  }, [members, filter, query]);

  /* ---------- Ações ---------- */
  const addMember = () => {
    const novo = {
      _id: Math.random().toString(36).slice(2, 9),
      name: 'Novo membro',
      role: 'Membro',
      sector: filter === 'Todos' ? ASSIGNABLE_SECTORS[0] : filter,
      photoKey: PHOTO_KEYS[0],
      focus: { ...DEFAULT_FOCUS },
      zoom: DEFAULT_ZOOM,
    };
    setDirty(true);
    setMembers((p) => [novo, ...p]);
    setSelectedId(novo._id);
    setToast('Membro adicionado');
  };

  const removeMember = (id) => {
    const m = members.find((x) => x._id === id);
    if (!m) return;
    if (!window.confirm(`Remover "${m.name}" de ${m.sector}?`)) return;
    setDirty(true);
    setMembers((p) => p.filter((x) => x._id !== id));
    if (selectedId === id) setSelectedId(null);
    setToast('Membro removido');
  };

  const duplicateToSector = (id) => {
    const m = members.find((x) => x._id === id);
    if (!m) return;
    const copy = {
      ...m,
      _id: Math.random().toString(36).slice(2, 9),
      role: 'Membro',
      focus: { ...m.focus },
    };
    setDirty(true);
    setMembers((p) => [copy, ...p]);
    setSelectedId(copy._id);
    setToast('Cópia criada — troque o setor dela');
  };

  const resetAll = () => {
    if (!window.confirm('Descartar todas as alterações locais e voltar ao teamData.js atual?')) return;
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(UPLOADS_KEY);
    setMembers(cloneBase());
    setUploads({});
    setSelectedId(null);
    setDirty(false);
    setToast('Alterações descartadas');
  };

  const doExportFile = () => {
    exportTeamDataFile(members);
    setToast('teamData.js exportado — substitua o arquivo em src/data/');
  };

  const doExportBundle = async () => {
    try {
      await exportBundle(members, uploads, registryKeys);
      setToast('ZIP exportado — extraia na raiz do repositório');
    } catch (err) {
      setToast('Falha ao gerar o ZIP: ' + (err.message || 'erro'));
    }
  };

  const uniqueCount = new Set(members.map((m) => m.name)).size;
  const uploadCount = Object.keys(uploads).length;

  return (
    <section className="section admin">
      <SectionHead
        plate="00"
        eyebrow="Box / Restrito"
        title="Área administrativa"
        lead="Edite os membros, os setores e o enquadramento das fotos. As alterações ficam salvas no seu navegador — para publicar, exporte o teamData.js e substitua o arquivo no repositório."
      />

      <div className="admin-warn">
        <strong>Somente desenvolvimento.</strong> Esta página não vai para o build de
        produção e não altera o site publicado sozinha. O fluxo é: editar → exportar →
        commit.
      </div>

      {/* ---------- Barra de ações ---------- */}
      <div className="admin-toolbar">
        <div className="admin-stats">
          <span className="admin-stat">
            <b>{members.length}</b> registros
          </span>
          <span className="admin-stat">
            <b>{uniqueCount}</b> pessoas únicas
          </span>
          {uploadCount > 0 && (
            <span className="admin-stat">
              <b>{uploadCount}</b> foto{uploadCount > 1 ? 's' : ''} nova{uploadCount > 1 ? 's' : ''}
            </span>
          )}
          {dirty && <span className="admin-badge-dirty">alterações não exportadas</span>}
        </div>

        <div className="admin-actions">
          <button className="admin-btn" onClick={addMember}>+ Adicionar</button>
          <button className="admin-btn ghost" onClick={resetAll}>Descartar</button>
          <button className="admin-btn ghost" onClick={doExportFile}>Só teamData.js</button>
          <button className="admin-btn primary" onClick={doExportBundle}>
            Exportar ZIP{uploadCount > 0 ? ` (${uploadCount} foto${uploadCount > 1 ? 's' : ''})` : ''}
          </button>
        </div>
      </div>

      {/* ---------- Filtros ---------- */}
      <div className="admin-filterbar">
        <input
          className="admin-input search"
          placeholder="Buscar por nome ou cargo…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="filters">
          {['Todos', ...ASSIGNABLE_SECTORS].map((s) => (
            <button
              key={s}
              className={`filter-chip ${filter === s ? 'active' : ''}`}
              onClick={() => setFilter(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="admin-layout">
        {/* ---------- Lista ---------- */}
        <div className="admin-list">
          {filtered.length === 0 && (
            <p className="admin-empty">Nenhum membro encontrado.</p>
          )}
          {filtered.map((m) => (
            <button
              key={m._id}
              className={`admin-row ${selectedId === m._id ? 'active' : ''}`}
              onClick={() => setSelectedId(m._id)}
            >
              <Avatar
                src={resolvePhoto(m.photoKey)}
                alt={m.name}
                focus={m.focus}
                zoom={m.zoom}
                size={44}
              />
              <span className="admin-row-info">
                <span className="admin-row-name">{m.name}</span>
                <span className="admin-row-role">{m.role}</span>
              </span>
              <span className="admin-row-sector">{m.sector}</span>
            </button>
          ))}
        </div>

        {/* ---------- Editor ---------- */}
        <div className="admin-editor">
          {!selected ? (
            <p className="admin-empty">Selecione alguém na lista para editar.</p>
          ) : (
            <MemberEditor
              key={selected._id}
              member={selected}
              photo={resolvePhoto(selected.photoKey)}
              isUploaded={!!uploads[selected.photoKey]}
              onChange={(patch) => update(selected._id, patch)}
              onRemove={() => removeMember(selected._id)}
              onDuplicate={() => duplicateToSector(selected._id)}
              onReplacePhoto={(file) => replacePhoto(selected, file)}
              onUploadNewPhoto={(file) => uploadNewPhoto(selected, file)}
              onUndoUpload={() => undoUpload(selected.photoKey)}
            />
          )}
        </div>
      </div>

      {toast && <div className="admin-toast">{toast}</div>}
    </section>
  );
};

/* ============================================================
   Editor de um membro — inclui o ajuste de foto por arraste
   ============================================================ */
const MemberEditor = ({
  member,
  photo,
  isUploaded,
  onChange,
  onRemove,
  onDuplicate,
  onReplacePhoto,
  onUploadNewPhoto,
  onUndoUpload,
}) => {
  const stageRef = useRef(null);
  const dragging = useRef(false);
  const fileRef = useRef(null);
  const newFileRef = useRef(null);
  const [over, setOver] = useState(false);

  const pickFile = (file) => {
    if (!file) return;
    onReplacePhoto(file);
  };

  const onDrop = (e) => {
    e.preventDefault();
    setOver(false);
    pickFile(e.dataTransfer.files?.[0]);
  };

  /* Converte a posição do ponteiro em focus x/y (%) */
  const applyFromPointer = (clientX, clientY) => {
    const el = stageRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100));
    const y = Math.min(100, Math.max(0, ((clientY - r.top) / r.height) * 100));
    onChange({ focus: { x: Math.round(x), y: Math.round(y) } });
  };

  const onPointerDown = (e) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    applyFromPointer(e.clientX, e.clientY);
  };
  const onPointerMove = (e) => {
    if (!dragging.current) return;
    applyFromPointer(e.clientX, e.clientY);
  };
  const onPointerUp = (e) => {
    dragging.current = false;
    e.currentTarget.releasePointerCapture?.(e.pointerId);
  };

  /* Setas do teclado ajustam fino */
  const onKeyDown = (e) => {
    const step = e.shiftKey ? 10 : 2;
    const f = member.focus;
    const map = {
      ArrowLeft: { x: f.x - step, y: f.y },
      ArrowRight: { x: f.x + step, y: f.y },
      ArrowUp: { x: f.x, y: f.y - step },
      ArrowDown: { x: f.x, y: f.y + step },
    };
    if (!map[e.key]) return;
    e.preventDefault();
    onChange({
      focus: {
        x: Math.min(100, Math.max(0, map[e.key].x)),
        y: Math.min(100, Math.max(0, map[e.key].y)),
      },
    });
  };

  return (
    <div className="editor-body">
      <div className="editor-grid">
        {/* --- Campos --- */}
        <div className="editor-fields">
          <label className="editor-label">
            Nome
            <input
              className="admin-input"
              value={member.name}
              onChange={(e) => onChange({ name: e.target.value })}
            />
          </label>

          <label className="editor-label">
            Cargo
            <input
              className="admin-input"
              value={member.role}
              onChange={(e) => onChange({ role: e.target.value })}
            />
          </label>

          <label className="editor-label">
            Setor
            <select
              className="admin-input"
              value={member.sector}
              onChange={(e) => onChange({ sector: e.target.value })}
            >
              {ASSIGNABLE_SECTORS.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </label>

          <label className="editor-label">
            Foto
            <select
              className="admin-input"
              value={member.photoKey}
              onChange={(e) => onChange({ photoKey: e.target.value })}
            >
              {PHOTO_KEYS.map((k) => (
                <option key={k} value={k}>{k.replace(/_/g, ' ')}</option>
              ))}
            </select>
          </label>

          {/* --- Trocar a foto --- */}
          <div className="upload-box">
            <span className="editor-label" style={{ marginBottom: '0.4rem' }}>
              Trocar a foto
            </span>

            <div
              className={`dropzone ${over ? 'over' : ''}`}
              onDragOver={(e) => { e.preventDefault(); setOver(true); }}
              onDragLeave={() => setOver(false)}
              onDrop={onDrop}
              onClick={() => fileRef.current?.click()}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  fileRef.current?.click();
                }
              }}
            >
              <span className="dropzone-txt">
                Arraste uma imagem aqui<br />ou clique para escolher
              </span>
            </div>

            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => {
                pickFile(e.target.files?.[0]);
                e.target.value = '';
              }}
            />

            <p className="editor-hint">
              Substitui <b>{member.photoKey}.png</b> (400x400, gerado automaticamente).
              O arquivo antigo é sobrescrito ao extrair o ZIP.
            </p>

            <button
              className="admin-btn ghost tiny"
              onClick={() => newFileRef.current?.click()}
              title="Cria um arquivo .png novo a partir do nome, sem mexer no atual"
            >
              Criar arquivo novo em vez de substituir
            </button>
            <input
              ref={newFileRef}
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => {
                if (e.target.files?.[0]) onUploadNewPhoto(e.target.files[0]);
                e.target.value = '';
              }}
            />

            {isUploaded && (
              <div className="upload-flag">
                <span>Foto nova nesta sessão</span>
                <button className="admin-btn ghost tiny" onClick={onUndoUpload}>
                  Reverter
                </button>
              </div>
            )}
          </div>

          <div className="editor-row-btns">
            <button className="admin-btn ghost" onClick={onDuplicate}>
              Duplicar p/ outro setor
            </button>
            <button className="admin-btn danger" onClick={onRemove}>
              Remover
            </button>
          </div>
        </div>

        {/* --- Ajuste da foto --- */}
        <div className="editor-photo">
          <p className="editor-hint">
            Arraste na imagem para escolher o ponto que fica centralizado.
            Use as setas do teclado para ajuste fino.
          </p>

          <div
            ref={stageRef}
            className="focus-stage"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onKeyDown={onKeyDown}
            tabIndex={0}
            role="application"
            aria-label="Ajustar enquadramento da foto"
          >
            {photo ? (
              <>
                <img src={photo} alt={member.name} className="focus-img" draggable={false} />
                <span
                  className="focus-dot"
                  style={{ left: `${member.focus.x}%`, top: `${member.focus.y}%` }}
                />
              </>
            ) : (
              <div className="focus-missing">Foto não encontrada</div>
            )}
          </div>

          <label className="editor-label">
            Zoom — {member.zoom.toFixed(2)}×
            <input
              type="range"
              min="1"
              max="2.5"
              step="0.05"
              value={member.zoom}
              onChange={(e) => onChange({ zoom: parseFloat(e.target.value) })}
            />
          </label>

          <div className="editor-coords">
            <span>X: {member.focus.x}%</span>
            <span>Y: {member.focus.y}%</span>
            <button
              className="admin-btn ghost tiny"
              onClick={() => onChange({ focus: { ...DEFAULT_FOCUS }, zoom: DEFAULT_ZOOM })}
            >
              Resetar
            </button>
          </div>

          {/* --- Preview real --- */}
          <div className="editor-preview">
            <p className="editor-hint">Como vai aparecer no site:</p>
            <div className="team-card preview-card">
              <Avatar
                src={photo}
                alt={member.name}
                focus={member.focus}
                zoom={member.zoom}
              />
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <span className="tag">{member.sector}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
