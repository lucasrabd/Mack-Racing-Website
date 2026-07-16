import React, { useEffect, useState } from 'react';
import logo from '../assets/logo_vermelho_sem_fundo.png';
import { go } from '../utils/navigate';

const LINKS = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre Nós' },
  { to: '/equipe', label: 'Equipe' },
  { to: '/carro', label: 'O Carro' },
  { to: '/noticias', label: 'Notícias' },
];

const NavBar = ({ path }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Fecha ao redimensionar para desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 860 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [menuOpen]);

  // Bloqueia scroll com menu aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Fecha com ESC
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const navTo = (to) => {
    setMenuOpen(false);
    go(to);
  };

  const isActive = (to) => {
    if (to === '/') return path === '/';
    if (to === '/carro') return path === '/carro' || path === '/projetos';
    if (to === '/noticias') return path === '/noticias' || path === '/competicao';
    return path === to;
  };

  return (
    <header className="header">
      <div
        className="logo-container"
        onClick={() => navTo('/')}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && navTo('/')}
      >
        <img src={logo} alt="Logo Mack Racing" className="logo" />
        <span>Mack&nbsp;Racing</span>
      </div>

      <nav className={`nav ${menuOpen ? 'open' : ''}`} aria-label="Navegação principal">
        {LINKS.map((l) => (
          <button
            key={l.to}
            className={`nav-link ${isActive(l.to) ? 'active' : ''}`}
            onClick={() => navTo(l.to)}
          >
            {l.label}
          </button>
        ))}
        <button className="btn primary nav-cta" onClick={() => navTo('/contato')}>
          Contato
        </button>
      </nav>

      <button
        className={`menu-btn ${menuOpen ? 'open' : ''}`}
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span /><span /><span />
      </button>
    </header>
  );
};

export default NavBar;
