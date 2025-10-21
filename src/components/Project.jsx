import React from 'react';
import { useNavigate } from 'react-router-dom';

const Project = () => {
  const navigate = useNavigate();

  return (
    <section id="projeto" className="section project-section">
      <h2 className="section-title">Projeto em Destaque</h2>
      <div className="project-grid">
        <div className="project-image" aria-label="Ilustração abstrata de mecânico trabalhando"></div>
        <div className="project-details">
          <h3>MP4/1: Nosso Sonho em Movimento</h3>
          <ul>
            <li><strong>Status:</strong> Em desenvolvimento</li>
            <li><strong>Previsão:</strong> Início de 2026</li>
            <li><strong>Meta de Peso:</strong> &lt;= 300&nbsp;kg</li>
            <li><strong>Primeira Competição:</strong> SAE Brasil 2026</li>
          </ul>
          <button
            type="button"
            className="btn secondary project-action"
            onClick={() => navigate('/carro')}
          >
            Acompanhe o Desenvolvimento
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project;