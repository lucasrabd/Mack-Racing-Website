import React from 'react';

const ITEMS = [
  'Mack Racing',
  'Fórmula SAE Brasil 2026',
  'MP4/1 em desenvolvimento',
  '#AceleraMackenzie',
  'Recrutamento aberto',
];

/* Placar de beira de pista — a lista é duplicada para o loop infinito */
const Ticker = () => (
  <div className="ticker" aria-hidden="true">
    <div className="ticker-track">
      {[...ITEMS, ...ITEMS].map((t, i) => (
        <span key={i}>{t} <b>///</b></span>
      ))}
    </div>
  </div>
);

export default Ticker;
