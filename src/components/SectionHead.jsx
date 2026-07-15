import React from 'react';

/* Cabeçalho padrão de seção: placa FSAE + eyebrow + título */
const SectionHead = ({ plate, eyebrow, title, lead }) => (
  <>
    <div className="section-head">
      <span className="plate">{plate}</span>
      <span className="eyebrow">{eyebrow}</span>
      <span className="rule" aria-hidden="true" />
    </div>
    <h2 className="section-title">{title}</h2>
    {lead && <p className="section-lead">{lead}</p>}
  </>
);

export default SectionHead;
