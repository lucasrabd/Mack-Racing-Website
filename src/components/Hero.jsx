import React from 'react';

const Hero = () => {
  const navigateTo = (path) => {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Mack Racing</h1>
        <p>
          Onde a paixão pela engenharia acelera sonhos. Junte-se a nós e faça parte de uma equipe que transforma ideias em velocidade, inovação e conquistas!
        </p>
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