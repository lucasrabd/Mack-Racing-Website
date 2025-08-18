import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import SobrePage from './pages/SobrePage.jsx';
import EquipePage from './pages/EquipePage.jsx';
import ProjetosPage from './pages/ProjetosPage.jsx';
import CompeticaoPage from './pages/CompeticaoPage.jsx';
import ContatoPage from './pages/ContatoPage.jsx';
import Loader from './components/Loader.jsx';
import CarroPage from './pages/CarroPage.jsx';

function App() {
  const [path, setPath] = useState(typeof window !== 'undefined' ? window.location.pathname : '/');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Simula carregamento de página
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, [path]);

  const navigate = (to) => {
    if (to !== path) {
      window.history.pushState({}, '', to);
      setPath(to);
    }
  };

  let PageComponent;
  switch (path) {
    case '/sobre':
      PageComponent = <SobrePage />;
      break;
    case '/equipe':
      PageComponent = <EquipePage />;
      break;
    case '/projetos':
      PageComponent = <ProjetosPage />;
      break;
    case '/competicao':
      PageComponent = <CompeticaoPage />;
      break;
    case '/contato':
      PageComponent = <ContatoPage />;
      break;
    case '/carro':
      PageComponent = <CarroPage />;
      break;
    default:
      PageComponent = <HomePage />;
      break;
  }

  return (
    <>
      <NavBar navigate={navigate} />
      <main style={{ minHeight: '60vh', display: loading ? 'flex' : 'block', alignItems: 'center', justifyContent: 'center' }}>
        {loading ? <Loader /> : PageComponent}
      </main>
      <Footer />
    </>
  );
}

export default App;