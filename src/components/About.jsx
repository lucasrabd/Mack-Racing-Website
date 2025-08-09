import React from 'react';

/**
 * About section describing the Mack Racing team.  
 * Features an image illustrating engineering collaboration and a textual narrative.  
 */
const About = () => {
  return (
    <section id="sobre" className="section about-section">
      <h2 className="section-title">Sobre Nós</h2>
      <div className="about-grid">
        <div className="about-image" aria-label="Arte abstrata representando engenharia"></div>
        <div className="about-text">
          <h3>Nossa Missão</h3>
          <p>
            Somos a <strong>Mack Racing</strong>, a liga acadêmica de Fórmula SAE da Universidade Presbiteriana Mackenzie. Mais do que construir carros, construímos futuros. Nosso propósito é unir estudantes apaixonados por engenharia, inovação e automobilismo para criar experiências transformadoras dentro e fora das pistas.
          </p>
          <p>
            Liderados por <strong>Thierry&nbsp;Caparroz</strong>, acreditamos que o trabalho em equipe, a criatividade e a busca por excelência são o combustível para grandes conquistas. Aqui, cada desafio é uma oportunidade de aprender, crescer e acelerar rumo ao futuro.
          </p>
          <a
            href="/contato"
            className="btn secondary"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, "", '/contato');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;