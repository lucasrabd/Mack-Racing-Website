import React from 'react';
import logo from '../assets/logo_vermelho_sem_fundo.png';
import { go } from '../utils/navigate';
import { SOCIALS } from '../data/newsData';
import { InstagramIcon, LinkedInIcon, TikTokIcon } from '../utils/icons.jsx';

const NAV = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre Nós' },
  { to: '/equipe', label: 'Equipe' },
  { to: '/carro', label: 'O Carro — MP4/1' },
  { to: '/noticias', label: 'Notícias' },
  { to: '/contato', label: 'Contato' },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src={logo} alt="Mack Racing" />
          <p>
            Equipe oficial de Fórmula SAE da Universidade Presbiteriana
            Mackenzie. Projetando o MP4/1 rumo à FSAE Brasil 2026.
          </p>
        </div>

        <div>
          <h4>Navegação</h4>
          <ul className="footer-links">
            {NAV.map((l) => (
              <li key={l.to}>
                <button onClick={() => go(l.to)}>{l.label}</button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Siga a equipe</h4>
          <div className="social-row">
            <a href={SOCIALS.instagram.url} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href={SOCIALS.linkedin.url} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href={SOCIALS.tiktok.url} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <TikTokIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="mono">© {year} MACK RACING — UNIVERSIDADE PRESBITERIANA MACKENZIE</span>
        <span className="mono">SÃO PAULO · BRASIL /// FSAE</span>
      </div>
    </footer>
  );
};

export default Footer;
