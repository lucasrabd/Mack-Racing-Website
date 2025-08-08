import React from 'react';

/**
 * Call to action section encouraging visitors to join the team.  
 */
const CTA = () => {
  // Helper to navigate to a different route without reloading the page.
  const navigateTo = (path) => {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <section className="cta-section">
      <h2>Faça Parte da Nossa Jornada</h2>
      <p>
        Junte-se a nós na construção do primeiro carro de Fórmula SAE da Universidade Presbiteriana Mackenzie. Sua
        paixão por engenharia pode fazer a diferença!
      </p>
      <div className="btn-group">
        {/* Use onClick to prevent full page reload and navigate via the custom router */}
        <a
          href="/equipe"
          className="btn secondary"
          onClick={(e) => {
            e.preventDefault();
            navigateTo('/equipe');
          }}
        >
          Conheça a Equipe
        </a>
        <a
          href="/contato"
          className="btn primary"
          onClick={(e) => {
            e.preventDefault();
            navigateTo('/contato');
          }}
        >
          Entre em Contato
        </a>
      </div>
    </section>
  );
};

export default CTA;