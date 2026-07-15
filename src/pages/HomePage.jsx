import React from 'react';
import Hero from '../components/Hero.jsx';
import Ticker from '../components/Ticker.jsx';
import About from '../components/About.jsx';
import CarSpotlight from '../components/CarSpotlight.jsx';
import NewsFeed from '../components/NewsFeed.jsx';
import SectionHead from '../components/SectionHead.jsx';
import CTA from '../components/CTA.jsx';
import newsData from '../data/newsData';
import { go } from '../utils/navigate';

const HomePage = () => {
  const featured = newsData.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      <Hero />
      <Ticker />
      <About compact />
      <CarSpotlight />

      <section id="paddock" className="section">
        <SectionHead
          plate="NEWS"
          eyebrow="Paddock News"
          title="Últimas da equipe"
          lead="Bastidores, eventos e atualizações do MP4/1 — direto do LinkedIn, do Instagram e da nossa oficina."
        />
        <NewsFeed posts={featured} showFollowRail={false} />
        <div className="news-more">
          <button className="btn secondary" onClick={() => go('/noticias')}>
            Ver todas as notícias →
          </button>
        </div>
      </section>

      <CTA />
    </>
  );
};

export default HomePage;
