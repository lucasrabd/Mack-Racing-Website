import React from 'react';

/**
 * Hero section displayed at the top of the page.
 * Contains a title, tagline and two call‑to‑action buttons.  
 */
const Hero = () => {
  // Helper to navigate to a different route without reloading the page.
  const navigateTo = (path) => {
    // Prevent full page reload by using the History API. The App component
    // listens for the popstate event to update the current route.
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Mack Racing</h1>
        <p>Excelência em Engenharia na Fórmula SAE Brasil</p>
        <div className="btn-group">
          <a
            href="/contato"
            className="btn secondary"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/contato');
            }}
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;