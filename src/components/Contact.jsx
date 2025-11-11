import React, { useState } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Enviando...');
    emailjs.send(
  'service_hm69arn',
  'template_nmtmht5',
      {
        from_name: form.nome,
        from_email: form.email,
        message: form.mensagem,
  to_email: 'lucascaraboladb@gmail.com',
      },
  'mbWuG1Zu2pIO5O1n8'
    )
      .then(() => {
        setStatus('Mensagem enviada com sucesso!');
        setForm({ nome: '', email: '', mensagem: '' });
      })
      .catch(() => {
        setStatus('Erro ao enviar. Tente novamente.');
      });
  };

  return (
    <section id="contato" className="section contact-section">
      <h2 className="section-title">Entre em Contato</h2>
      <p className="contact-description">
        Quer saber mais sobre a Mack Racing, ser patrocinador ou fazer parte do time?
        <br />Fale com a gente e acelere junto!
      </p>
      <div className="contact-structure" style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', justifyContent: 'center', alignItems: 'flex-start', margin: '2.5rem 0' }}>
  <form className="contact-form" onSubmit={handleSubmit} autoComplete="off" style={{ minWidth: 320, maxWidth: 400, flex: 1, background: 'var(--color-bg-secondary, #181820)', padding: 24, borderRadius: 12, boxShadow: '0 2px 12px #0002' }}>
          <h3 style={{ marginBottom: 18, fontWeight: 700, fontSize: '1.3rem', color: 'var(--color-primary)' }}>Envie uma mensagem</h3>
          <label style={{ display: 'block', marginBottom: 12 }}>
            Nome
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              required
              placeholder="Seu nome"
              style={{ width: '100%', marginTop: 4, padding: 8, borderRadius: 6, border: '1px solid #333', background: '#222', color: '#fff' }}
            />
          </label>
          <label style={{ display: 'block', marginBottom: 12 }}>
            E-mail
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="seu@email.com"
              style={{ width: '100%', marginTop: 4, padding: 8, borderRadius: 6, border: '1px solid #333', background: '#222', color: '#fff' }}
            />
          </label>
          <label style={{ display: 'block', marginBottom: 16 }}>
            Mensagem
            <textarea
              name="mensagem"
              value={form.mensagem}
              onChange={handleChange}
              required
              placeholder="Digite sua mensagem"
              rows={5}
              style={{ width: '100%', marginTop: 4, padding: 8, borderRadius: 6, border: '1px solid #333', background: '#222', color: '#fff', resize: 'vertical' }}
            />
          </label>
          <button type="submit" className="btn primary" disabled={status === 'Enviando...'} style={{ width: '100%', padding: 10, fontWeight: 700, fontSize: '1.1rem' }}>
            {status === 'Enviando...' ? 'Enviando...' : 'Enviar'}
          </button>
          {status && <div className="form-status" style={{ marginTop: 10, color: 'var(--color-primary)' }}>{status}</div>}
        </form>
        <div className="contact-info" style={{ minWidth: 260, maxWidth: 350, flex: 1 }}>
          <ul className="contact-list" style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '1.08rem', color: '#fff', lineHeight: 1.7 }}>
            <li style={{ marginBottom: 10 }}>
              <strong style={{ color: 'var(--color-primary)' }}>E-mail:</strong>{' '}
              <a href="mailto:marketingmackracing@gmail.com" style={{ color: '#fff', fontWeight: 500 }}>marketingmackracing@gmail.com</a>
            </li>
            <li style={{ marginBottom: 10 }}>
              <strong style={{ color: 'var(--color-primary)' }}>Instagram:</strong>{' '}
              <a href="https://instagram.com/equipemackracing" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontWeight: 500 }}>@equipemackracing</a>
            </li>
            <li style={{ marginBottom: 10 }}>
              <strong style={{ color: 'var(--color-primary)' }}>LinkedIn:</strong>{' '}
              <a href="https://www.linkedin.com/company/equipe-mack-racing" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontWeight: 500 }}>Equipe Mack Racing</a>
            </li>
            <li style={{ marginBottom: 10 }}>
              <strong style={{ color: 'var(--color-primary)' }}>Endereço:</strong>{' '}
              Rua Maria Antônia, 103 - Higienópolis, São Paulo - SP
              <br />
              <a href="https://www.google.com/maps?q=Rua+Maria+Antônia,+103,+Higienópolis,+São+Paulo" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', fontWeight: 500, display: 'inline-block', marginTop: 4 }}>Ver no Google Maps</a>
            </li>
          </ul>
          <div className="contact-map" style={{ marginTop: 18, borderRadius: 8, overflow: 'hidden', boxShadow: '0 1px 8px #0002' }}>
            <iframe
              src="https://www.google.com/maps?q=Rua+Maria+Antônia,+103,+Higienópolis,+São+Paulo&output=embed"
              width="100%"
              height="180"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Mackenzie"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="contact-footer" style={{ textAlign: 'center', color: 'var(--color-muted)', fontSize: '1rem', marginTop: 32 }}>
        Estamos prontos para acelerar com você!
      </div>
    </section>
  );
};

export default Contact;