import React from 'react';

const members = [
  { name: 'Thierry Caparroz', role: 'Líder de Equipe' },
  { name: 'Igor Garcez', role: 'Líder de Equipe' },
  { name: 'Cayo Vinicius Rodrigues', role: 'Líder de Equipe' },
  { name: 'Prof. Dr. Filipe Fabian Buscariolo', role: 'Orientador' },
];

/**
 * Team section listing the core members of the team along with a note about the broader group.  
 */
const Team = () => {
  return (
    <section id="equipe" className="section team-section">
      <h2 className="section-title">Nossa Equipe</h2>
      <div className="team-grid">
        {members.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="avatar"></div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
      <p className="team-note">
        Nossa equipe é formada por dezenas de estudantes de diversas engenharias e períodos. Trabalhamos juntos para
        projetar, fabricar e testar nosso veículo, criando uma experiência que prepara os membros para os desafios
        da indústria automobilística e de mobilidade.
      </p>
    </section>
  );
};

export default Team;