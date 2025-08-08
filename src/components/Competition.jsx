import React from 'react';

/**
 * Competition section providing context about the Fórmula SAE Brasil.  
 */
const Competition = () => {
  return (
    <section id="competicao" className="section competition-section">
      <h2 className="section-title" style={{ fontSize: '2.3rem', marginBottom: '1.5rem' }}>
        Competição <span style={{ color: 'var(--color-primary)' }}>Fórmula SAE</span>
      </h2>
      <div style={{
        maxWidth: '700px',
        margin: '0 auto',
        background: 'rgba(255,255,255,0.01)',
        borderRadius: '12px',
        padding: '2rem 1.5rem',
        boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)'
      }}>
        <p style={{ marginBottom: '1.5rem', color: 'var(--color-text)', fontSize: '1.15rem', textAlign: 'center' }}>
          <strong style={{ color: 'var(--color-primary)' }}>Fórmula SAE Brasil</strong> é onde a paixão pela engenharia encontra a adrenalina das pistas. 
          Estudantes de todo o país se unem para projetar, construir e competir com carros de alto desempenho, vivendo desafios reais e experiências inesquecíveis.
        </p>
        <p style={{ color: 'var(--color-muted)', fontSize: '1.05rem', textAlign: 'center' }}>
          Durante três dias intensos, equipes mostram criatividade, dedicação e espírito de equipe em provas que vão além da velocidade: estratégia, inovação e trabalho coletivo são essenciais para cruzar a linha de chegada. 
          <br /><br />
          Venha fazer parte dessa jornada e sinta a emoção de competir entre os melhores!
        </p>
      </div>
    </section>
  );
};

export default Competition;