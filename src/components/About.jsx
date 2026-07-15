import React from 'react';
import SectionHead from './SectionHead.jsx';
import { go } from '../utils/navigate';
import { SECTOR_DESCRIPTIONS, UNIQUE_COUNT } from '../data/teamData';
import equipeFoto from '../assets/project-bg.jpg';

const About = ({ compact = false }) => (
  <section id="sobre" className="section">
    <SectionHead plate="EST 2018" eyebrow="Quem somos" title="Sobre a equipe" />

    <div className="about-grid">
      <div className="about-media">
        <span className="plate">MACK</span>
        <img src={equipeFoto} alt="Equipe Mack Racing reunida no campus do Mackenzie" />
      </div>

      <div className="about-text">
        <p>
          A <strong>Mack Racing</strong> é a equipe oficial de Fórmula SAE da
          Universidade Presbiteriana Mackenzie. Somos movidos por inovação,
          tecnologia e paixão pelo automobilismo universitário.
        </p>
        <p>
          Nossa missão é desenvolver carros de alta performance promovendo
          aprendizado prático, trabalho em equipe e excelência em engenharia —
          rumo à nossa estreia na <strong>Fórmula SAE Brasil</strong>.
        </p>

        {!compact && (
          <ul className="sector-list">
            {SECTOR_DESCRIPTIONS.map((s) => (
              <li key={s.name}>
                <span className="s-name">{s.name}</span>
                <span className="s-desc">{s.desc}</span>
              </li>
            ))}
          </ul>
        )}

        <p>
          Hoje somos <strong>{UNIQUE_COUNT}+ membros</strong> de diferentes cursos
          e períodos, unidos pelo desafio de construir o futuro da engenharia
          automotiva no Brasil.
        </p>

        <div className="about-actions">
          <button className="btn primary" onClick={() => go('/equipe')}>
            Conheça a equipe
          </button>
          <button className="btn secondary" onClick={() => go('/contato')}>
            Fale com a gente
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default About;
