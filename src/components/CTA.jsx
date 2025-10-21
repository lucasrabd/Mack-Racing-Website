import React from 'react';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="cta-section">
      <h2>Faça Parte da Nossa Jornada</h2>
      <p>
        Venha acelerar conosco! Aqui, você encontra um ambiente de aprendizado, amizade e superação. Ajude a construir o primeiro carro de Fórmula SAE da Mackenzie e deixe sua marca na história. Sua paixão pode ser o diferencial que vai nos levar ainda mais longe!
      </p>
      <div className="btn-group">
        <button
          type="button"
          className="btn primary"
          onClick={() => navigate('/contato')}
        >
          Entre em Contato
        </button>
      </div>
    </section>
  );
};

export default CTA;