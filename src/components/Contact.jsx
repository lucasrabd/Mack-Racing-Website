import React from 'react';

/**
 * Contact section providing ways to get in touch with the team.  
 */
const Contact = () => {
  return (
    <section id="contato" className="section contact-section">
      <h2 className="section-title" style={{ fontSize: '2.3rem', marginBottom: '1.5rem' }}>
        Entre em Contato
      </h2>
      <p style={{ fontSize: '1.15rem', color: 'var(--color-text)', marginBottom: '2.5rem', textAlign: 'center' }}>
        Quer saber mais sobre a Mack Racing, ser patrocinador ou fazer parte do time? <br />
        Fale com a gente e acelere junto!
      </p>
      <ul className="contact-list" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem', fontSize: '1.1rem' }}>
        <li>
          <strong style={{ color: 'var(--color-primary)' }}>E-mail:</strong>{' '}
          <a href="mailto:fsaemackracing@gmail.com" style={{ color: '#fff', fontWeight: 500 }}>
            fsaemackracing@gmail.com
          </a>
        </li>
        <li>
          <strong style={{ color: 'var(--color-primary)' }}>Instagram:</strong>{' '}
          <a href="https://instagram.com/equipemackracing" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontWeight: 500 }}>
            @equipemackracing
          </a>
        </li>
        <li>
          <strong style={{ color: 'var(--color-primary)' }}>LinkedIn:</strong>{' '}
          <a
            href="https://www.linkedin.com/in/equipe-mack-racing"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#fff', fontWeight: 500 }}
          >
            Equipe Mack Racing
          </a>
        </li>
      </ul>
      <div style={{ marginTop: '2.5rem', textAlign: 'center', color: 'var(--color-muted)', fontSize: '1rem' }}>
        <span>Estamos prontos para acelerar com você!</span>
      </div>
    </section>
  );
};

export default Contact;