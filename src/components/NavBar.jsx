import React, { useState } from 'react';
import logo from '../assets/logo-negativo-ADAPTADO.png';

const NavBar = ({ navigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  // Define routes for multi-page navigation
  const links = [
    { to: '/', label: 'Início' },
    { to: '/sobre', label: 'Sobre Nós' },
    { to: '/equipe', label: 'Equipe' },
    { to: '/projetos', label: 'Projetos' },
    { to: '/competicao', label: 'Competição' },
    { to: '/contato', label: 'Contato' },
  ];
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo Mack Racing" className="logo" />
        <span>Mack&nbsp;Racing</span>
      </div>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}> 
        {links.map(link => (
          <a
            key={link.to}
            href={link.to}
            className={currentPath === link.to ? 'active' : ''}
            onClick={e => {
              e.preventDefault();
              setMenuOpen(false);
              if (navigate) navigate(link.to);
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default NavBar;