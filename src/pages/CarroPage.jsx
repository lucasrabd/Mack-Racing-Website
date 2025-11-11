import React from 'react';
import Gallery from '../components/Gallery';
import galleryData from '../data/galleryData';

const CarroPage = () => {
  return (
    <section id="carro" className="section carro-section" style={{ maxWidth: 900, margin: '0 auto', background: 'rgba(255,255,255,0.02)', borderRadius: 18, boxShadow: '0 2px 24px 0 rgba(0,0,0,0.10)', padding: '2.5rem 1.5rem', marginTop: 32, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 className="section-title" style={{ fontSize: '2.3rem', textAlign: 'center', marginBottom: '1.2rem', color: 'var(--color-primary, #9b1c31)' }}>MP4/1: Diário de Desenvolvimento</h2>

      <Gallery items={galleryData} />

    </section>
  );
};

export default CarroPage;
