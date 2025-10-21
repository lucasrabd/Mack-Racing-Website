import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Mack Racing</h1>
        <p>
          Onde a paixão pela engenharia acelera sonhos. Junte-se a nós e faça parte de uma equipe que transforma ideias em velocidade, inovação e conquistas!
        </p>
        <div className="btn-group">
        <button
          type="button"
          className="btn secondary"
          onClick={() => navigate('/contato')}
        >
          Entre em Contato
        </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;