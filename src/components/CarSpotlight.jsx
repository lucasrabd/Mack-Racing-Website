import React from 'react';
import SectionHead from './SectionHead.jsx';
import { go } from '../utils/navigate';
import { CAR } from '../data/carData';

const CarSpotlight = ({ showLink = true }) => (
  <section id="carro-destaque" className="section">
    <SectionHead
      plate="MP4/1"
      eyebrow="Projeto em destaque"
      title="O carro"
      lead={CAR.tagline}
    />

    <div className="car-grid">
      <div className="car-visual">
        <span className="plate">Nº 01</span>
        <img src={CAR.render} alt={`Render do ${CAR.name}`} />
      </div>

      <div>
        <div className="specsheet">
          <div className="specsheet-head">
            <h3>Ficha técnica — {CAR.name}</h3>
            <span className="mono">v.2026</span>
          </div>
          {CAR.specs.map((s) => (
            <div className="spec-row" key={s.label}>
              <span className="mono">{s.label}</span>
              <b className={s.hot ? 'hot' : ''}>{s.value}</b>
            </div>
          ))}
        </div>

        {showLink && (
          <div className="car-actions">
            <button className="btn secondary" onClick={() => go('/carro')}>
              Diário de desenvolvimento →
            </button>
          </div>
        )}
      </div>
    </div>
  </section>
);

export default CarSpotlight;
