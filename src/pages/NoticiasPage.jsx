import React from 'react';
import SectionHead from '../components/SectionHead.jsx';
import NewsFeed from '../components/NewsFeed.jsx';
import newsData from '../data/newsData';

const NoticiasPage = () => (
  <section className="section">
    <SectionHead
      plate="FEED"
      eyebrow="Paddock News"
      title="Notícias & eventos"
      lead="Tudo o que a Mack Racing anda aprontando: posts do LinkedIn e do Instagram da equipe, eventos, visitas técnicas e os bastidores do MP4/1."
    />
    <NewsFeed posts={newsData} />
  </section>
);

export default NoticiasPage;
