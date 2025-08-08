import React, { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo-negativo-ADAPTADO.png';

const NavBar = ({ navigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const btnRef = useRef(null);

  const links = [
    { to: '/', label: 'Início' },
    { to: '/sobre', label: 'Sobre Nós' },
    { to: '/equipe', label: 'Equipe' },
    { to: '/projetos', label: 'Projetos' },
    { to: '/competicao', label: 'Competição' },
    { to: '/contato', label: 'Contato' },
  ];

  const currentPath =
    typeof window !== 'undefined' ? window.location.pathname : '/';

  // Fecha ao redimensionar para desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [menuOpen]);

  // Bloqueia scroll quando menu aberto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Fecha com ESC e clique fora
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    const onClickOutside = (e) => {
      if (!menuOpen) return;
      const nav = navRef.current;
      const btn = btnRef.current;
      if (nav && !nav.contains(e.target) && btn && !btn.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClickOutside);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClickOutside);
    };
  }, [menuOpen]);

  const handleNavigate = (href) => {
    setMenuOpen(false);
    if (navigate) {
      navigate(href);
    } else {
      // fallback caso não passe o navigate
      window.location.href = href;
    }
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo Mack Racing" className="logo" />
        <span>Mack&nbsp;Racing</span>
      </div>

      {/* backdrop só no mobile quando aberto */}
      {menuOpen && <div className="nav-backdrop" aria-hidden="true" />}

      <nav
        id="site-nav"
        ref={navRef}
        className={`nav ${menuOpen ? 'open' : ''}`}
        aria-label="Navegação principal"
      >
        {links.map((link) => (
          <a
            key={link.to}
            href={link.to}
            className={currentPath === link.to ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleNavigate(link.to);
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <button
        ref={btnRef}
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Abrir menu"
        aria-controls="site-nav"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
};

export default NavBar;
