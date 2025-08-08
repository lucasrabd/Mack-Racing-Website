import React from 'react';

/**
 * Competition section providing context about the Fórmula SAE Brasil.  
 */
const Competition = () => {
  return (
    <section id="competicao" className="section competition-section">
      <h2 className="section-title">Competição Fórmula SAE</h2>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ marginBottom: '1rem', color: 'var(--color-muted)' }}>
          A <strong>Fórmula SAE Brasil</strong> é uma competição estudantil que permite a aplicação prática dos
          conhecimentos de engenharia. Ela desafia equipes universitárias a desenvolver um projeto completo e
          construir um carro tipo Fórmula【142413071570534†L162-L178】. Criada em 2004, a competição tem crescido a cada ano
          e as melhores equipes representam o Brasil em etapas internacionais nos Estados Unidos.
        </p>
        <p style={{ color: 'var(--color-muted)' }}>
          Durante três dias de evento, os carros passam por provas estáticas e dinâmicas que avaliam a performance
          na pista, assim como a qualidade dos projetos, custos e estratégias de marketing【142413071570534†L162-L178】. Meses antes, os
          estudantes enviam relatórios técnicos ao comitê organizador contendo detalhes do projeto. Essa experiência
          aproxima os alunos do mercado de trabalho, estimulando o espírito de equipe e a busca por soluções
          criativas【142413071570534†L162-L178】.
        </p>
      </div>
    </section>
  );
};

export default Competition;