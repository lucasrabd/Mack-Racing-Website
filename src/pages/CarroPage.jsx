import React from 'react';
import carroImage from '../assets/IMG_0108.jpg';
import suspensionVideo from '../assets/susp.mp4';

const CarroPage = () => {
  return (
    <section id="carro" className="section carro-section">
      <h2 className="section-title carro-title">MP4/1: Diário de Desenvolvimento</h2>
      <img
        src={carroImage}
        alt="Desenvolvimento do MP4/1"
        className="carro-image"
      />
      <video
        src={suspensionVideo}
        controls
        className="carro-video"
      >
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </section>
  );
};

export default CarroPage;
