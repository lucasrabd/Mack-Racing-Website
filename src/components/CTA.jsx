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
        Venha acelerar conosco! Aqui, você encontra um ambiente de aprendizado, amizade e superação. Ajude a construir o primeiro carro de Fórmula SAE da Mackenzie e deixe sua marca na história. Sua paixão pode ser o diferencial que vai nos levar ainda mais longe!
      </p>
      <div className="btn-group">
        {/* Only "Entre em Contato" button remains */}
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