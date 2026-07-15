import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import Loader from './components/Loader.jsx';
import HomePage from './pages/HomePage.jsx';
import SobrePage from './pages/SobrePage.jsx';
import EquipePage from './pages/EquipePage.jsx';
import CarroPage from './pages/CarroPage.jsx';
import NoticiasPage from './pages/NoticiasPage.jsx';
import ContatoPage from './pages/ContatoPage.jsx';

/* Rotas: as antigas /projetos e /competicao continuam funcionando
   como apelidos das novas páginas, para não quebrar links salvos. */
const ROUTES = {
  '/': { component: HomePage, title: 'Mack Racing | Fórmula SAE Mackenzie' },
  '/sobre': { component: SobrePage, title: 'Sobre Nós | Mack Racing' },
  '/equipe': { component: EquipePage, title: 'Equipe | Mack Racing' },
  '/carro': { component: CarroPage, title: 'O Carro — MP4/1 | Mack Racing' },
  '/projetos': { component: CarroPage, title: 'O Carro — MP4/1 | Mack Racing' },
  '/noticias': { component: NoticiasPage, title: 'Notícias | Mack Racing' },
  '/competicao': { component: NoticiasPage, title: 'Notícias | Mack Racing' },
  '/contato': { component: ContatoPage, title: 'Contato | Mack Racing' },
};

function App() {
  const [path, setPath] = useState(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Bandeirada só no primeiro carregamento — navegação interna é instantânea
  useEffect(() => {
    const timer = setTimeout(() => setBooting(false), 900);
    return () => clearTimeout(timer);
  }, []);

  const route = ROUTES[path] || ROUTES['/'];

  // Título da aba por página
  useEffect(() => {
    document.title = route.title;
  }, [route]);

  const Page = route.component;

  return (
    <>
      {booting && <Loader />}
      <NavBar path={path} />
      <main>
        <div className="page-enter" key={path}>
          <Page />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
