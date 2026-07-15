import React from 'react';
import CarSpotlight from '../components/CarSpotlight.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Gallery from '../components/Gallery.jsx';
import CTA from '../components/CTA.jsx';
import { GALLERY } from '../data/carData';

const CarroPage = () => (
  <>
    <CarSpotlight showLink={false} />

    <section id="diario" className="section">
      <SectionHead
        plate="LOG"
        eyebrow="Diário de desenvolvimento"
        title="MP4/1 na oficina"
        lead="Registro do que acontece nos bastidores: chassi, powertrain, suspensão e cada etapa até o carro completo."
      />
      <Gallery items={GALLERY} />
    </section>

    <CTA />
  </>
);

export default CarroPage;
