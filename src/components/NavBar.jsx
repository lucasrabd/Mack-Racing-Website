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

  // Fecha com ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
    };
  }, []);

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
    <>
      <header className="header">
        <div
          className="logo-container"
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        >
          <img src={logo} alt="Logo Mack Racing" className="logo" />
          <span>Mack&nbsp;Racing</span>
        </div>

        <nav
          id="site-nav"
          ref={navRef}
          className={`nav ${menuOpen ? 'open' : ''}`}
          aria-label="Navegação principal"
        >
          {links.map((link) =>
            link.to === currentPath ? (
              <span
                key={link.to}
                className="active"
                style={{
                  color: 'var(--color-primary)',
                  fontWeight: 700,
                  cursor: 'default',
                  borderBottom: '2px solid var(--color-primary)',
                  paddingBottom: 2,
                }}
              >
                {link.label}
              </span>
            ) : link.to === '/contato' && currentPath === '/contato' ? null : (
              <a
                key={link.to}
                href={link.to}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigate(link.to);
                }}
              >
                {link.label}
              </a>
            )
          )}
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

