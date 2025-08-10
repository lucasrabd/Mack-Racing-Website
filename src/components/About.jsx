
import React from 'react';
import equipeFoto from '../assets/project-bg.jpg';

/**
 * About section describing the Mack Racing team.  
 * Features an image illustrating engineering collaboration and a textual narrative.  
 */
const About = () => {
  return (
    <section id="sobre" className="section about-section">
      <h2 className="section-title">Sobre Nós</h2>
      <div className="about-grid">
        <div
          className="about-image"
          aria-label="Equipe Mack Racing"
          style={{
            backgroundImage: `url(${equipeFoto})`,
            minHeight: 340,
            borderRadius: 12,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            boxShadow: '0 6px 32px 0 rgba(0,0,0,0.25)'
          }}
        ></div>
        <div className="about-text">
          <p>
            Fundada em 2018, a <b>Mack Racing</b> é a equipe oficial de Formula SAE da Universidade Presbiteriana Mackenzie.<br/>
            Somos movidos por inovação, tecnologia e paixão pelo automobilismo universitário.<br/>
            Nossa missão é desenvolver carros de alta performance, promovendo aprendizado prático, trabalho em equipe e excelência em engenharia.
          </p>
          <h3 style={{color: 'var(--color-primary)', margin: '1.2rem 0 0.5rem'}}>Como somos divididos?</h3>
          <ul style={{marginBottom: '1.2rem', color: 'var(--color-muted)', fontSize: '1rem', paddingLeft: 18}}>
            <li><b>Chassi & Estrutura</b>: Projeto e fabricação do chassi, segurança e ergonomia.</li>
            <li><b>Powertrain</b>: Motorização, transmissão e desempenho do conjunto propulsor.</li>
            <li><b>Suspensão & Dinâmica</b>: Geometria, estabilidade e dirigibilidade.</li>
            <li><b>Elétrica & Eletrônica</b>: Sistemas de aquisição de dados, chicote, instrumentação e telemetria.</li>
            <li><b>Gestão & Marketing</b>: Captação de recursos, parcerias, divulgação e organização interna.</li>
          </ul>
          <p style={{color: 'var(--color-muted)'}}>Atualmente, somos mais de <b>30 membros</b> de diferentes cursos e períodos, unidos pelo desafio de construir o futuro da engenharia automotiva no Brasil.</p>
          <div style={{margin: '2.2rem 0 0.5rem'}}>
            <a
              href="/contato"
              className="btn secondary"
              style={{marginRight: 16, minWidth: 180}}
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, "", '/contato');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
            >
              Fale com a Equipe
            </a>
            <a
              href="/contato"
              className="btn primary"
              style={{minWidth: 180}}
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, "", '/contato');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
            >
              Seja um Patrocinador
            </a>
          </div>
          <p style={{marginTop: 18, color: 'var(--color-primary)', fontWeight: 600, fontSize: '1.1rem'}}>Apoie o futuro da engenharia. Junte-se à Mack Racing!</p>
        </div>
      </div>
    </section>
  );
};

export default About;