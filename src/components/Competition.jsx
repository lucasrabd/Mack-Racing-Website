import React from 'react';
import { useNavigate } from 'react-router-dom';
import { competitionImages, competitionVideos } from '../data/competitionMedia.js';

const Competition = () => {
  const navigate = useNavigate();

  return (
    <section id="competicao" className="section competition-section">
      <h2 className="section-title competition-title">Competição &amp; Eventos</h2>
      <div className="competition-intro">
        <p>
          Fundados em 2018, somos a equipe oficial de Formula SAE da Universidade Presbiteriana Mackenzie.
          <br />O Mack Racing Team é composto por membros dos mais diversos cursos da nossa Escola de Engenharia.
          <br />Nosso objetivo é desenvolver carros de alta performance a fim de competir nos torneios de Formula SAE Brasil a fora!
        </p>
      </div>

      <article className="competition-event">
        <header className="competition-event-header">
          <h3>ECPA - Sport Piracicabano Automobile Club</h3>
          <span>02/08/2025</span>
        </header>
        <p>
          Fomos no ECPA para ver o evento e anotar coisas para o carro. Uma experiência incrível para toda a equipe, cheia de aprendizados e inspiração!
        </p>

        <div className="competition-gallery">
          {competitionImages.map((image, index) => (
            <img src={image} alt={`ECPA ${index + 1}`} key={image} className="competition-image" />
          ))}
        </div>

        <div className="competition-media">
          {competitionVideos.map((video, index) => (
            <video src={video} controls key={video} className="competition-video">
              Vídeo {index + 1} do evento da Mack Racing
            </video>
          ))}
        </div>
      </article>

      <div className="competition-cta">
        <h3>Venha fazer parte da Mack Racing!</h3>
        <p>
          Se você é apaixonado por automobilismo, engenharia e desafios, junte-se à nossa equipe! Participe de eventos, desenvolva projetos inovadores e viva experiências únicas nas pistas e nos bastidores.
        </p>
        <button
          type="button"
          className="btn primary"
          onClick={() => navigate('/contato')}
        >
          Quero fazer parte!
        </button>
      </div>

      <p className="competition-footer">
        <strong>Fórmula SAE Brasil</strong> é onde a paixão pela engenharia encontra a adrenalina das pistas. Estudantes de todo o país se unem para projetar, construir e competir com carros de alto desempenho, vivendo desafios reais e experiências inesquecíveis.
      </p>
    </section>
  );
};

export default Competition;
