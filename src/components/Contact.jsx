import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import SectionHead from './SectionHead.jsx';
import { SOCIALS } from '../data/newsData';
import { MailIcon, InstagramIcon, LinkedInIcon, PinIcon } from '../utils/icons.jsx';

const Contact = () => {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'ok' | 'err'

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs
      .send(
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
        setStatus('ok');
        setForm({ nome: '', email: '', mensagem: '' });
      })
      .catch(() => setStatus('err'));
  };

  return (
    <section id="contato" className="section">
      <SectionHead
        plate="BOX"
        eyebrow="Fale com a equipe"
        title="Entre em contato"
        lead="Quer patrocinar o projeto, entrar para o time ou saber mais sobre a Mack Racing? Manda mensagem — a gente responde rápido."
      />

      <div className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
          <h3>Envie uma mensagem</h3>

          <div className="field">
            <label htmlFor="ct-nome">Nome</label>
            <input
              id="ct-nome"
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              required
              placeholder="Seu nome"
            />
          </div>

          <div className="field">
            <label htmlFor="ct-email">E-mail</label>
            <input
              id="ct-email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="seu@email.com"
            />
          </div>

          <div className="field">
            <label htmlFor="ct-msg">Mensagem</label>
            <textarea
              id="ct-msg"
              name="mensagem"
              value={form.mensagem}
              onChange={handleChange}
              required
              placeholder="Como podemos acelerar juntos?"
            />
          </div>

          <button
            type="submit"
            className="btn primary"
            disabled={status === 'sending'}
            style={{ width: '100%' }}
          >
            {status === 'sending' ? 'Enviando…' : 'Enviar mensagem'}
          </button>

          {status === 'ok' && (
            <p className="form-status ok">// Mensagem enviada com sucesso. Obrigado!</p>
          )}
          {status === 'err' && (
            <p className="form-status err">// Erro ao enviar. Tente novamente.</p>
          )}
        </form>

        <div className="channel-list">
          <a className="channel-card" href="mailto:contato@mackracing.com.br">
            <MailIcon />
            <div>
              <b>E-mail</b>
              <span>contato@mackracing.com.br</span>
            </div>
          </a>
          <a className="channel-card" href={SOCIALS.instagram.url} target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
            <div>
              <b>Instagram</b>
              <span>{SOCIALS.instagram.handle} — respondemos DMs</span>
            </div>
          </a>
          <a className="channel-card" href={SOCIALS.linkedin.url} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
            <div>
              <b>LinkedIn</b>
              <span>{SOCIALS.linkedin.handle} — parcerias e patrocínios</span>
            </div>
          </a>
          <div className="channel-card">
            <PinIcon />
            <div>
              <b>Onde estamos</b>
              <span>Universidade Presbiteriana Mackenzie — Higienópolis, São Paulo/SP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
