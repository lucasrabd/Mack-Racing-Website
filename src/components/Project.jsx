import React from 'react';

/**
 * Project section showcasing the first race car project MR‑01.  
 */
const Project = () => {
  return (
    <section id="projeto" className="section project-section">
      <h2 className="section-title">Projeto em Destaque</h2>
      <div className="project-grid">
        <div className="project-image" aria-label="Ilustração abstrata de mecânico trabalhando"></div>
        <div className="project-details">
          <h3>MR‑01: Nosso Sonho em Movimento</h3>
          <ul>
            <li><strong>Status:</strong> Em desenvolvimento</li>
            <li><strong>Previsão:</strong> Início de 2026</li>
            <li><strong>Meta de Peso:</strong> &lt;= 300&nbsp;kg</li>
            <li><strong>Primeira Competição:</strong> SAE Brasil 2026</li>
          </ul>
          {/* Link to the contact page (multi‑page navigation). Use onClick to navigate without reload. */}
          <a
            href="/contato"
            className="btn secondary"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, "", '/contato');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
          >
            Acompanhe o Desenvolvimento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;