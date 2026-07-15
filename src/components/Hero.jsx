import React from 'react';
import { go } from '../utils/navigate';
import carRender from '../assets/carro-mp41.png';

const HUD = [
  { label: 'FUNDAÇÃO', value: 'Est. 2018' },
  { label: 'EQUIPE', value: '30+ membros' },
  { label: 'CARRO', value: 'MP4/1 · ≤300 kg' },
  { label: 'ALVO', value: 'FSAE Brasil 2026' },
];

const Hero = () => (
  <section id="home" className="hero">
    <div className="hero-stripes" aria-hidden="true"><i /><i /><i /></div>

    <div className="hero-inner">
      <div className="hero-copy">
        <span className="eyebrow">Fórmula SAE · Universidade Presbiteriana Mackenzie</span>
        <h1 className="hero-title display">
          Mack Racing
          <em>MP4/1</em>
        </h1>
        <p className="hero-sub">
          Da prancheta ao grid: projetamos, construímos e vamos colocar na pista
          o primeiro carro de Fórmula SAE do Mackenzie.
        </p>
        <div className="hero-actions">
          <button className="btn primary" onClick={() => go('/carro')}>
            Conheça o MP4/1
          </button>
          <button className="btn secondary" onClick={() => go('/contato')}>
            Seja um patrocinador
          </button>
        </div>
      </div>

      <div className="hero-car">
        <img src={carRender} alt="Render do carro MP4/1 da Mack Racing" />
      </div>
    </div>

    <div className="hero-hud">
      <div className="hero-hud-inner">
        {HUD.map((h) => (
          <div className="hud-item" key={h.label}>
            <span className="mono">{h.label}</span>
            <strong>{h.value}</strong>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
