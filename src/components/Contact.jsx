import React, { useMemo, useState } from 'react';
import emailjs from 'emailjs-com';

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const DESTINATION_EMAIL = process.env.REACT_APP_EMAILJS_TO_EMAIL;

const initialForm = { nome: '', email: '', mensagem: '' };

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ message: '', type: 'idle' });

  const validateField = (name, value) => {
    const trimmed = value.trim();
    if (!trimmed) {
      return 'Campo obrigatório';
    }
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmed)) {
        return 'Informe um e-mail válido';
      }
    }
    if (name === 'mensagem' && trimmed.length < 10) {
      return 'Descreva sua mensagem com pelo menos 10 caracteres';
    }
    return '';
  };

  const isFormValid = useMemo(() => {
    return (
      Object.values(form).every((value) => value.trim()) &&
      Object.values(errors).every((message) => !message)
    );
  }, [form, errors]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationResults = Object.entries(form).reduce((acc, [name, value]) => {
      acc[name] = validateField(name, value);
      return acc;
    }, {});

    setErrors(validationResults);

    const hasErrors = Object.values(validationResults).some((message) => message);
    if (hasErrors) {
      setStatus({ message: 'Revise os campos destacados antes de enviar.', type: 'error' });
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY || !DESTINATION_EMAIL) {
      setStatus({ message: 'Configuração de envio indisponível no momento.', type: 'error' });
      return;
    }

    setStatus({ message: 'Enviando...', type: 'loading' });

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.nome,
          from_email: form.email,
          message: form.mensagem,
          to_email: DESTINATION_EMAIL,
        },
        PUBLIC_KEY
      );
      setStatus({ message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.', type: 'success' });
      setForm(initialForm);
      setErrors({});
    } catch (error) {
      setStatus({ message: 'Erro ao enviar. Tente novamente em alguns instantes.', type: 'error' });
    }
  };

  const isSending = status.type === 'loading';

  return (
    <section id="contato" className="section contact-section">
      <h2 className="section-title">Entre em Contato</h2>
      <p className="contact-description">
        Quer saber mais sobre a Mack Racing, ser patrocinador ou fazer parte do time?
        <br />Fale com a gente e acelere junto!
      </p>
      <div className="contact-structure">
        <form className="contact-form" onSubmit={handleSubmit} autoComplete="off" noValidate>
          <h3 className="contact-form-title">Envie uma mensagem</h3>
          <label className="contact-label">
            Nome
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              className={`contact-input${errors.nome ? ' has-error' : ''}`}
              placeholder="Seu nome"
              required
            />
            {errors.nome && <span className="contact-error">{errors.nome}</span>}
          </label>
          <label className="contact-label">
            E-mail
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`contact-input${errors.email ? ' has-error' : ''}`}
              placeholder="seu@email.com"
              required
            />
            {errors.email && <span className="contact-error">{errors.email}</span>}
          </label>
          <label className="contact-label">
            Mensagem
            <textarea
              name="mensagem"
              value={form.mensagem}
              onChange={handleChange}
              className={`contact-textarea${errors.mensagem ? ' has-error' : ''}`}
              placeholder="Digite sua mensagem"
              rows={5}
              required
            />
            {errors.mensagem && <span className="contact-error">{errors.mensagem}</span>}
          </label>
          <button
            type="submit"
            className="btn primary contact-submit"
            disabled={!isFormValid || isSending}
          >
            {isSending ? 'Enviando...' : 'Enviar'}
          </button>
          {status.message && (
            <div className={`contact-status contact-status-${status.type}`} role="status">
              {status.message}
            </div>
          )}
        </form>
        <div className="contact-info">
          <ul className="contact-list">
            <li>
              <strong>E-mail:</strong>{' '}
              <a href="mailto:fsaemackracing@gmail.com">fsaemackracing@gmail.com</a>
            </li>
            <li>
              <strong>Instagram:</strong>{' '}
              <a href="https://instagram.com/equipemackracing" target="_blank" rel="noopener noreferrer">
                @equipemackracing
              </a>
            </li>
            <li>
              <strong>LinkedIn:</strong>{' '}
              <a
                href="https://www.linkedin.com/in/equipe-mack-racing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Equipe Mack Racing
              </a>
            </li>
            <li>
              <strong>Endereço:</strong>{' '}
              Rua Maria Antônia, 103 - Higienópolis, São Paulo - SP
              <br />
              <a
                href="https://www.google.com/maps?q=Rua+Maria+Antônia,+103,+Higienópolis,+São+Paulo"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-map-link"
              >
                Ver no Google Maps
              </a>
            </li>
          </ul>
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps?q=Rua+Maria+Antônia,+103,+Higienópolis,+São+Paulo&output=embed"
              width="100%"
              height="180"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Mackenzie"
            />
          </div>
        </div>
      </div>
      <div className="contact-footer">Estamos prontos para acelerar com você!</div>
    </section>
  );
};

export default Contact;
