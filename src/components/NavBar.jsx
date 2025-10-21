import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo-negativo-ADAPTADO.png';

const NAV_LINKS = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre Nós' },
  { to: '/equipe', label: 'Equipe' },
  { to: '/projetos', label: 'Projetos' },
  { to: '/competicao', label: 'Competição' },
  { to: '/contato', label: 'Contato' },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const btnRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className="header">
        <Link to="/" className="logo-container" aria-label="Página inicial Mack Racing">
          <img src={logo} alt="Logo Mack Racing" className="logo" />
          <span>Mack&nbsp;Racing</span>
        </Link>

        <nav
          id="site-nav"
          ref={navRef}
          className={`nav ${menuOpen ? 'open' : ''}`}
          aria-label="Navegação principal"
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `nav-link${isActive ? ' active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          ref={btnRef}
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-controls="site-nav"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {menuOpen && (
        <div
          className="nav-backdrop"
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default NavBar;
