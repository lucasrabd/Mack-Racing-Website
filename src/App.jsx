import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import SobrePage from './pages/SobrePage.jsx';
import EquipePage from './pages/EquipePage.jsx';
import ProjetosPage from './pages/ProjetosPage.jsx';
import CompeticaoPage from './pages/CompeticaoPage.jsx';
import ContatoPage from './pages/ContatoPage.jsx';
import CarroPage from './pages/CarroPage.jsx';
import Loader from './components/Loader.jsx';

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <NavBar />
      <main className={`main-content${loading ? ' is-loading' : ''}`}>
        {loading ? (
          <Loader />
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="/equipe" element={<EquipePage />} />
            <Route path="/projetos" element={<ProjetosPage />} />
            <Route path="/competicao" element={<CompeticaoPage />} />
            <Route path="/contato" element={<ContatoPage />} />
            <Route path="/carro" element={<CarroPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
