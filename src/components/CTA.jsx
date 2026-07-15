import React from 'react';
import { go } from '../utils/navigate';

const CTA = () => (
  <section className="cta-section">
    <div className="hero-stripes" aria-hidden="true"><i /><i /><i /></div>
    <div className="cta-inner">
      <h2>Faça parte da nossa jornada</h2>
      <p>
        Ajude a construir o primeiro carro de Fórmula SAE do Mackenzie e deixe
        sua marca na história — na oficina, nos bastidores ou como parceiro do projeto.
      </p>
      <div className="cta-actions">
        <button className="btn primary" onClick={() => go('/contato')}>
          Quero fazer parte
        </button>
        <button className="btn secondary" onClick={() => go('/contato')}>
          Patrocinar a equipe
        </button>
      </div>
    </div>
  </section>
);

export default CTA;
