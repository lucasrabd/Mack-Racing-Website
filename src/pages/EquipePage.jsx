import React, { useMemo, useState } from 'react';
import { sectors, teamMembers } from '../data/team.js';

const EquipePage = () => {
  const [activeSector, setActiveSector] = useState('Todos');

  const filteredMembers = useMemo(() => {
    if (activeSector === 'Todos') {
      return teamMembers;
    }
    return teamMembers.filter((member) => member.sector === activeSector);
  }, [activeSector]);

  return (
    <section className="section team-section">
      <div className="team-intro">
        <h2 className="section-title">Nossa Equipe</h2>
        <p className="team-note">
          Filtre por setor para conhecer quem cuida de cada área do nosso carro.
        </p>
        <div className="team-filters">
          {sectors.map((sector) => (
            <button
              key={sector}
              type="button"
              onClick={() => setActiveSector(sector)}
              aria-pressed={activeSector === sector}
              className={`team-filter${activeSector === sector ? ' active' : ''}`}
            >
              {sector}
            </button>
          ))}
        </div>
      </div>

      <div className="team-grid">
        {filteredMembers.map((member) => (
          <div className="team-card" key={member.name}>
            <img src={member.photo} alt={member.name} className="avatar-img" />
            <h3>{member.name}</h3>
            <p className="muted">{member.role}</p>
            <span className="team-tag">{member.sector}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EquipePage;
