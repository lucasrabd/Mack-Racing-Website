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
import NotFoundPage from './pages/NotFoundPage.jsx';

/* ------------------------------------------------------------
   ÁREA ADMIN — SOMENTE DESENVOLVIMENTO

   O AdminPage é carregado por ./admin/loader. Existem dois
   arquivos com esse nome:

     admin/loader.js      → devolve o AdminPage   (usado em dev)
     admin/loader.prod.js → devolve null          (usado no build)

   O `npm run build` troca um pelo outro antes de compilar, então
   o código do admin nunca entra no bundle publicado.
   ------------------------------------------------------------ */
import AdminPage from './admin/loader';

const IS_DEV = process.env.NODE_ENV === 'development';

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
  ...(IS_DEV && AdminPage
    ? { '/admin': { component: AdminPage, title: 'Admin | Mack Racing' } }
    : {}),
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

  // Rota desconhecida → 404 (antes caía no Início silenciosamente)
  const route = ROUTES[path] || { component: NotFoundPage, title: 'Página não encontrada | Mack Racing' };

  // Título da aba por página
  useEffect(() => {
    document.title = route.title;
  }, [route]);

  // Páginas que não devem ser indexadas pelo Google
  useEffect(() => {
    const id = 'meta-robots-dynamic';
    document.getElementById(id)?.remove();
    const isPrivate = path === '/admin' || route.component === NotFoundPage;
    if (isPrivate) {
      const meta = document.createElement('meta');
      meta.id = id;
      meta.name = 'robots';
      meta.content = 'noindex, nofollow';
      document.head.appendChild(meta);
    }
  }, [path, route]);

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
