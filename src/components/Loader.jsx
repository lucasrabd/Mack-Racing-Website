import React from 'react';

/* Bandeirada de largada — exibida só no primeiro carregamento */
const Loader = () => (
  <div className="loader-container" role="status" aria-label="Carregando">
    <div className="loader-inner">
      <div className="loader-flag" />
      <span className="loader-text">Mack Racing</span>
    </div>
  </div>
);

export default Loader;
