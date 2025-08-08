import React from 'react';

// Exemplo: adicione um campo 'photo' para cada membro, com imagem de boa resolução
const members = [
  { name: 'Thierry Caparroz', role: 'Líder de Equipe', photo: '/assets/team/thierry.jpg' },
  { name: 'Igor Garcez', role: 'Líder de Equipe', photo: '/assets/team/igor.jpg' },
  { name: 'Cayo Vinicius Rodrigues', role: 'Líder de Equipe', photo: '/assets/team/cayo.jpg' },
  { name: 'Prof. Dr. Filipe Fabian Buscariolo', role: 'Orientador', photo: '/assets/team/filipe.jpg' },
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
            {/* Use img com avatar-img */}
            <img
              src={member.photo}
              alt={member.name}
              className="avatar-img"
              loading="lazy"
              width={80}
              height={80}
            />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
      <p className="team-note">
        Somos movidos por sonhos, desafios e pelo desejo de fazer a diferença. Nossa equipe reúne talentos de diversas engenharias e períodos, unidos pela paixão por inovação e velocidade. Juntos, aprendemos, crescemos e mostramos que, com dedicação e trabalho em equipe, podemos ir além dos nossos limites e conquistar grandes resultados.
      </p>
    </section>
  );
};

export default Team;