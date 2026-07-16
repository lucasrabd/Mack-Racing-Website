/* ============================================================
   Exportação da área /admin.

   Gera o conteúdo de src/data/teamData.js e, quando há fotos
   novas enviadas pelo admin, empacota tudo num ZIP:

     teamData.js                  -> src/data/
     photoRegistry.js             -> src/data/
     assets/fotos/membros/*.png   -> fotos novas/substituídas
     LEIA-ME.txt                  -> instruções

   ============================================================ */

import { SECTORS, SECTOR_DESCRIPTIONS, ASSIGNABLE_SECTORS } from '../data/teamData';
import { buildPhotoRegistrySource } from './buildPhotoRegistry';
import { createZip, strBytes, base64Bytes } from './zip';

/* Escapa aspas simples e barras invertidas para string JS */
function esc(str) {
  return String(str).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

/* Ordena os membros na ordem dos setores, para o arquivo sair organizado */
function sortBySector(members) {
  const order = new Map(ASSIGNABLE_SECTORS.map((s, i) => [s, i]));
  return [...members].sort((a, b) => {
    const sa = order.has(a.sector) ? order.get(a.sector) : 999;
    const sb = order.has(b.sector) ? order.get(b.sector) : 999;
    if (sa !== sb) return sa - sb;
    const da = /diretor|capit|chefe/i.test(a.role) ? 0 : 1;
    const db = /diretor|capit|chefe/i.test(b.role) ? 0 : 1;
    if (da !== db) return da - db;
    return 0;
  });
}

function memberLine(m) {
  const focus = `{ x: ${Math.round(m.focus?.x ?? 50)}, y: ${Math.round(m.focus?.y ?? 0)} }`;
  const zoom = typeof m.zoom === 'number' ? m.zoom : 1;
  return `  { name: '${esc(m.name)}', role: '${esc(m.role)}', sector: '${esc(
    m.sector
  )}', photoKey: '${esc(m.photoKey)}', focus: ${focus}, zoom: ${zoom} },`;
}

export function buildTeamDataSource(members) {
  const sorted = sortBySector(members);

  const lines = [];
  let current = null;
  sorted.forEach((m) => {
    if (m.sector !== current) {
      if (current !== null) lines.push('');
      lines.push(`  // --- ${m.sector} ---`);
      current = m.sector;
    }
    lines.push(memberLine(m));
  });

  const sectorsSrc = SECTORS.map((s) => `  '${esc(s)}',`).join('\n');
  const descSrc = SECTOR_DESCRIPTIONS.map(
    (d) => `  { name: '${esc(d.name)}', desc: '${esc(d.desc)}' },`
  ).join('\n');

  return `/* ============================================================
   EQUIPE — Mack Racing
   ARQUIVO GERADO pela área /admin em ${new Date().toLocaleString('pt-BR')}.
   Para editar: rode o site em dev, acesse /admin, ajuste e exporte.

   Campos:
     name / role / sector
     photoKey - chave em src/data/photoRegistry.js
     focus    - { x, y } em % (posição da foto no círculo)
     zoom     - escala da foto (1 = normal)
   ============================================================ */

import { getPhoto } from './photoRegistry';

export const SECTORS = [
${sectorsSrc}
];

/* Setores atribuíveis (sem "Todos", que é só filtro) */
export const ASSIGNABLE_SECTORS = SECTORS.filter((s) => s !== 'Todos');

export const SECTOR_DESCRIPTIONS = [
${descSrc}
];

export const DEFAULT_FOCUS = { x: 50, y: 0 };
export const DEFAULT_ZOOM = 1;

export const BASE_MEMBERS = [
${lines.join('\n')}
];

/* Normaliza: garante focus/zoom e resolve o asset da foto */
export function hydrate(list) {
  return list.map((m) => ({
    ...m,
    focus: m.focus || { ...DEFAULT_FOCUS },
    zoom: typeof m.zoom === 'number' ? m.zoom : DEFAULT_ZOOM,
    photo: getPhoto(m.photoKey),
  }));
}

export const MEMBERS = hydrate(BASE_MEMBERS);

/* Contagem de pessoas únicas (alguns membros atuam em mais de um setor) */
export const UNIQUE_COUNT = new Set(BASE_MEMBERS.map((m) => m.name)).size;
`;
}

function download(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/* Exporta só o teamData.js (quando não há foto nova) */
export function exportTeamDataFile(members) {
  const src = buildTeamDataSource(members);
  download(new Blob([src], { type: 'text/javascript;charset=utf-8' }), 'teamData.js');
}

/* ============================================================
   Exporta o pacote completo em ZIP.

   uploads: { [photoKey]: { base64, originalName } }
            fotos enviadas pelo admin nesta sessão
   allKeys: todas as chaves que o registry precisa conhecer
   ============================================================ */
export async function exportBundle(members, uploads, allKeys) {
  const files = [];

  files.push({
    name: 'src/data/teamData.js',
    bytes: strBytes(buildTeamDataSource(members)),
  });

  files.push({
    name: 'src/data/photoRegistry.js',
    bytes: strBytes(buildPhotoRegistrySource(allKeys)),
  });

  const uploadKeys = Object.keys(uploads || {});
  uploadKeys.forEach((key) => {
    files.push({
      name: `src/assets/fotos/membros/${key}.png`,
      bytes: base64Bytes(uploads[key].base64),
    });
  });

  const fotosTxt = uploadKeys.length
    ? uploadKeys.map((k) => `  - ${k}.png  (de "${uploads[k].originalName}")`).join('\n')
    : '  (nenhuma foto nova nesta exportação)';

  const leiaMe = `MACK RACING — pacote gerado pela área /admin
${new Date().toLocaleString('pt-BR')}

COMO APLICAR
------------
Extraia este ZIP na RAIZ do repositório, aceitando substituir os arquivos.
A estrutura de pastas do ZIP já corresponde à do projeto.

No Windows: clique com o botão direito no ZIP > "Extrair tudo..." e aponte
para a pasta Mack-Racing-Website. Confirme "Substituir os arquivos".

O QUE VEM AQUI
--------------
  src/data/teamData.js       -> membros, setores, cargos e enquadramento
  src/data/photoRegistry.js  -> imports das fotos (gerado automaticamente)

Fotos incluídas (${uploadKeys.length}):
${fotosTxt}

DEPOIS DE EXTRAIR
-----------------
  npm start        conferir se ficou tudo certo
  npm run build    build de produção (o /admin não vai junto)
  git add -A && git commit -m "Atualiza equipe" && git push

OBS: as fotos são redimensionadas para 400x400 PNG automaticamente.
`;

  files.push({ name: 'LEIA-ME.txt', bytes: strBytes(leiaMe) });

  const blob = await createZip(files);
  const stamp = new Date().toISOString().slice(0, 10);
  download(blob, `mack-racing-equipe-${stamp}.zip`);
}
