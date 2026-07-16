import React from 'react';
import SectionHead from '../components/SectionHead.jsx';
import { go } from '../utils/navigate';

/* 404 — bandeira preta: rota inexistente */
const NotFoundPage = () => (
  <section className="section notfound">
    <SectionHead
      plate="404"
      eyebrow="Bandeira preta"
      title="Página não encontrada"
      lead="O endereço que você tentou acessar não existe ou foi movido. Volte para os boxes e tente outro caminho."
    />
    <div className="notfound-actions">
      <button className="admin-btn primary" onClick={() => go('/')}>
        Voltar ao início
      </button>
      <button className="admin-btn ghost" onClick={() => go('/equipe')}>
        Ver a equipe
      </button>
    </div>
  </section>
);

export default NotFoundPage;
