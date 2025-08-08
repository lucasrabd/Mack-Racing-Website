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
            Olá! Somos a <strong>Mack&nbsp;Racing</strong>, a liga acadêmica de Fórmula SAE da Universidade Presbiteriana
            Mackenzie. Nosso objetivo é construir um protótipo de Fórmula e participar dos campeonatos que ocorrem
            anualmente entre as universidades de todo país【246194708444952†L4689-L4708】. Através dos conhecimentos de
            engenharia e de diversos softwares, aproximamos ainda mais o automobilismo da vida acadêmica.
          </p>
          <p>
            A equipe é orientada pelo <strong>Prof.&nbsp;Dr.&nbsp;Filipe&nbsp;Fabian&nbsp;Buscariolo</strong> e atualmente liderada
            pelos discentes <strong>Thierry&nbsp;Caparroz</strong>, <strong>Igor&nbsp;Garcez</strong> e
            <strong>Cayo&nbsp;Vinicius&nbsp;Rodrigues</strong>. Trabalhamos de forma interdisciplinar, englobando áreas como
            mecânica, elétrica, eletrônica e gestão de projetos para desenvolver um veículo competitivo.
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