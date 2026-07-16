import React, { useMemo, useState } from 'react';
import SectionHead from '../components/SectionHead.jsx';
import Avatar from '../components/Avatar.jsx';
import { MEMBERS, SECTORS, UNIQUE_COUNT } from '../data/teamData';

const EquipePage = () => {
  const [active, setActive] = useState('Todos');

  const filtered = useMemo(() => {
    if (active === 'Todos') {
      // Alguns membros atuam em mais de um setor — na visão geral, sem repetir
      const seen = new Set();
      return MEMBERS.filter((m) => {
        if (seen.has(m.name)) return false;
        seen.add(m.name);
        return true;
      });
    }
    return MEMBERS.filter((m) => m.sector === active);
  }, [active]);

  return (
    <section className="section">
      <SectionHead
        plate={`${UNIQUE_COUNT}`}
        eyebrow="Pit lane"
        title="Nossa equipe"
        lead="Talentos de diversas engenharias e períodos, unidos pela paixão por inovação e velocidade. Filtre por setor para conhecer quem cuida de cada área do carro."
      />

      <div className="filters" role="tablist" aria-label="Filtrar por setor">
        {SECTORS.map((s) => (
          <button
            key={s}
            role="tab"
            aria-selected={active === s}
            className={`filter-chip ${active === s ? 'active' : ''}`}
            onClick={() => setActive(s)}
          >
            {s}
          </button>
        ))}
      </div>

      <p className="team-count">
        // {filtered.length} {filtered.length === 1 ? 'pessoa' : 'pessoas'}
        {active !== 'Todos' ? ` em ${active}` : ' na equipe'}
      </p>

      <div className="team-grid">
        {filtered.map((m, idx) => (
          <div className="team-card" key={`${m.name}-${idx}`}>
            <Avatar src={m.photo} alt={m.name} focus={m.focus} zoom={m.zoom} />
            <h3>{m.name}</h3>
            <p className="role">{m.role}</p>
            <span className="tag">{m.sector}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EquipePage;
