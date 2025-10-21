import React from 'react';
import { useNavigate } from 'react-router-dom';
import equipeFoto from '../assets/project-bg.jpg';

const About = () => {
  const navigate = useNavigate();

  return (
    <section id="sobre" className="section about-section">
      <h2 className="section-title">Sobre Nós</h2>
      <div className="about-grid">
        <div
          className="about-image"
          aria-label="Equipe Mack Racing"
          style={{ backgroundImage: `url(${equipeFoto})` }}
        />
        <div className="about-text">
          <p>
            A <b>Mack Racing</b> é a equipe oficial de Formula SAE da Universidade Presbiteriana Mackenzie.
            <br />Somos movidos por inovação, tecnologia e paixão pelo automobilismo universitário.
            <br />Nossa missão é desenvolver carros de alta performance, promovendo aprendizado prático, trabalho em equipe e excelência em engenharia.
            <br />
            <span className="about-muted">Estamos nos preparando para nossa estreia na competição Formula SAE Brasil!</span>
          </p>
          <h3 className="about-subtitle">Como somos divididos?</h3>
          <ul className="about-list">
            <li><b>Chassi & Estrutura</b>: Projeto e fabricação do chassi, segurança e ergonomia.</li>
            <li><b>Powertrain</b>: Motorização, transmissão e desempenho do conjunto propulsor.</li>
            <li><b>Suspensão & Dinâmica</b>: Geometria, estabilidade e dirigibilidade.</li>
            <li><b>Elétrica & Eletrônica</b>: Sistemas de aquisição de dados, chicote, instrumentação e telemetria.</li>
            <li><b>Gestão & Marketing</b>: Captação de recursos, parcerias, divulgação e organização interna.</li>
          </ul>
          <p className="about-description">
            Atualmente, somos mais de <b>30 membros</b> de diferentes cursos e períodos, unidos pelo desafio de construir o futuro da engenharia automotiva no Brasil.
          </p>
          <div className="about-actions">
            <button
              type="button"
              className="btn secondary about-action"
              onClick={() => navigate('/contato')}
            >
              Fale com a Equipe
            </button>
            <button
              type="button"
              className="btn primary about-action"
              onClick={() => navigate('/contato')}
            >
              Seja um Patrocinador
            </button>
          </div>
          <p className="about-highlight">Apoie o futuro da engenharia. Junte-se à Mack Racing!</p>
        </div>
      </div>
    </section>
  );
};

export default About;
