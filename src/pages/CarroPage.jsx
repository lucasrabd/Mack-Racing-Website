


const CarroPage = () => {
  return (
    <section id="carro" className="section carro-section" style={{ maxWidth: 700, margin: '0 auto', background: 'rgba(255,255,255,0.02)', borderRadius: 18, boxShadow: '0 2px 24px 0 rgba(0,0,0,0.10)', padding: '2.5rem 1.5rem', marginTop: 32, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 className="section-title" style={{ fontSize: '2.3rem', textAlign: 'center', marginBottom: '1.2rem', color: 'var(--color-primary, #9b1c31)' }}>MP4/1: Diário de Desenvolvimento</h2>
      <img
        src={require('../assets/IMG_0108.jpg')}
        alt="Desenvolvimento do MP4/1"
        style={{ maxWidth: 320, width: '100%', borderRadius: 16, boxShadow: '0 2px 16px 0 rgba(0,0,0,0.13)', border: '3px solid #fff', marginBottom: 32 }}
      />
      <video
        src={require('../assets/susp.mp4')}
        controls
        style={{ maxWidth: 480, width: '100%', borderRadius: 12, boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)' }}
      >
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </section>
  );
};

export default CarroPage;
