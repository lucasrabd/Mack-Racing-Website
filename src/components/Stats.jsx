import React from 'react';

// Stats section summarising key facts about the team.  
// Data values are defined here for ease of modification.
const stats = [
  { value: '2025', label: 'Ano de Fundação' },
  { value: '15+', label: 'Membros da Equipe' },
  { value: '1', label: 'Carro em Desenvolvimento' },
  { value: '2026', label: 'Primeira Competição' },
];

const Stats = () => {
  return (
    <section id="stats" className="section stats-section">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-item" key={index}>
            <div className="stat-circle">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;