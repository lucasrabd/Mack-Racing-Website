import React, { useState } from 'react';
import Lightbox from './Lightbox.jsx';
import { SOCIALS } from '../data/newsData';
import { LinkedInIcon, InstagramIcon, TikTokIcon } from '../utils/icons.jsx';
import logoMini from '../assets/logo-negativo-ADAPTADO.png';

const MONTHS = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

const formatDate = (iso) => {
  const [y, m, d] = iso.split('-').map(Number);
  return `${String(d).padStart(2, '0')} ${MONTHS[m - 1]} ${y}`;
};

/* ---------- Post interno (conteúdo do próprio site) ---------- */
const PaddockCard = ({ post, onOpenMedia }) => {
  const media = post.media || [];
  const visible = media.slice(0, 3);
  const extra = media.length - visible.length;
  const cols = media.length >= 3 ? 'cols-3' : media.length === 2 ? 'cols-2' : '';

  return (
    <article className="news-card">
      <div className="news-head">
        <div className="news-avatar"><img src={logoMini} alt="" /></div>
        <div className="news-source">
          <b>Mack Racing</b>
          <span className="mono">{formatDate(post.date)}</span>
        </div>
        <span className="badge paddock">Paddock</span>
      </div>

      <div className="news-body">
        <h4>{post.title}</h4>
        <p>{post.text}</p>

        {media.length > 0 && (
          <div className={`news-media ${cols}`}>
            {visible.map((m, i) => {
              const isLast = i === visible.length - 1 && extra > 0;
              if (isLast) {
                return (
                  <button
                    type="button"
                    className="more-tile"
                    key={m.src}
                    onClick={() => onOpenMedia(m)}
                    aria-label={`Ver mais ${extra} mídias`}
                  >
                    <img src={m.type === 'video' ? media[0].src : m.src} alt="" />
                    <span>+{extra}</span>
                  </button>
                );
              }
              return m.type === 'video' ? (
                <video key={m.src} src={m.src} onClick={() => onOpenMedia(m)} muted />
              ) : (
                <img key={m.src} src={m.src} alt={m.alt} onClick={() => onOpenMedia(m)} loading="lazy" />
              );
            })}
          </div>
        )}
      </div>

      <div className="news-foot">
        <span className="mono">#MackRacing</span>
        {media.length > 0 && (
          <button type="button" onClick={() => onOpenMedia(media[0])}>
            Ver galeria →
          </button>
        )}
      </div>
    </article>
  );
};

/* ---------- Embed oficial do LinkedIn ---------- */
const LinkedInCard = ({ post }) => (
  <article className="news-card">
    <div className="news-head">
      <div className="news-avatar"><LinkedInIcon /></div>
      <div className="news-source">
        <b>{SOCIALS.linkedin.handle}</b>
        <span className="mono">{formatDate(post.date)}</span>
      </div>
      <span className="badge linkedin">LinkedIn</span>
    </div>
    <iframe
      className="embed-frame"
      src={`https://www.linkedin.com/embed/feed/update/urn:li:activity:${post.urn}`}
      title={`Post do LinkedIn — ${formatDate(post.date)}`}
      allowFullScreen
      loading="lazy"
    />
    <div className="news-foot">
      <span className="mono">via linkedin.com</span>
      <a href={SOCIALS.linkedin.url} target="_blank" rel="noopener noreferrer">
        Ver no LinkedIn →
      </a>
    </div>
  </article>
);

/* ---------- Embed oficial do Instagram ---------- */
const InstagramCard = ({ post }) => {
  const clean = post.url.replace(/\/+$/, '');
  return (
    <article className="news-card">
      <div className="news-head">
        <div className="news-avatar"><InstagramIcon /></div>
        <div className="news-source">
          <b>{SOCIALS.instagram.handle}</b>
          <span className="mono">{formatDate(post.date)}</span>
        </div>
        <span className="badge instagram">Instagram</span>
      </div>
      <iframe
        className="embed-frame"
        src={`${clean}/embed`}
        title={`Post do Instagram — ${formatDate(post.date)}`}
        allowFullScreen
        loading="lazy"
      />
      <div className="news-foot">
        <span className="mono">via instagram.com</span>
        <a href={post.url} target="_blank" rel="noopener noreferrer">
          Ver no Instagram →
        </a>
      </div>
    </article>
  );
};

/* ---------- Rail "siga a equipe" ---------- */
export const FollowRail = () => (
  <div className="follow-rail">
    <a className="follow-card" href={SOCIALS.linkedin.url} target="_blank" rel="noopener noreferrer">
      <LinkedInIcon style={{ color: '#0a66c2' }} />
      <div>
        <b>{SOCIALS.linkedin.label}</b>
        <span>{SOCIALS.linkedin.handle}</span>
      </div>
    </a>
    <a className="follow-card" href={SOCIALS.instagram.url} target="_blank" rel="noopener noreferrer">
      <InstagramIcon style={{ color: '#dc2743' }} />
      <div>
        <b>{SOCIALS.instagram.label}</b>
        <span>{SOCIALS.instagram.handle}</span>
      </div>
    </a>
    <a className="follow-card" href={SOCIALS.tiktok.url} target="_blank" rel="noopener noreferrer">
      <TikTokIcon />
      <div>
        <b>{SOCIALS.tiktok.label}</b>
        <span>{SOCIALS.tiktok.handle}</span>
      </div>
    </a>
  </div>
);

/* ---------- Feed ---------- */
const NewsFeed = ({ posts, showFollowRail = true }) => {
  const [lightboxItem, setLightboxItem] = useState(null);

  return (
    <>
      <div className="news-grid">
        {posts.map((post) => {
          if (post.type === 'linkedin') return <LinkedInCard key={post.id} post={post} />;
          if (post.type === 'instagram') return <InstagramCard key={post.id} post={post} />;
          return <PaddockCard key={post.id} post={post} onOpenMedia={setLightboxItem} />;
        })}
      </div>

      {showFollowRail && <FollowRail />}

      <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
    </>
  );
};

export default NewsFeed;
