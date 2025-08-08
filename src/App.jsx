import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
// Page components
import HomePage from './pages/HomePage.jsx';
import SobrePage from './pages/SobrePage.jsx';
import EquipePage from './pages/EquipePage.jsx';
import ProjetosPage from './pages/ProjetosPage.jsx';
import CompeticaoPage from './pages/CompeticaoPage.jsx';
import ContatoPage from './pages/ContatoPage.jsx';

function App() {
  const [path, setPath] = useState(typeof window !== 'undefined' ? window.location.pathname : '/');

  // Update path when browser navigation occurs (back/forward)
  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Navigate to a new path without reloading the page
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
    default:
      PageComponent = <HomePage />;
      break;
  }

  return (
    <>
      <NavBar navigate={navigate} />
      <main>
        {PageComponent}
      </main>
      <Footer />
    </>
  );
}

export default App;