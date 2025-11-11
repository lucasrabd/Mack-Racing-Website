import React from 'react';

const Gallery = ({ items = [], onItemClick }) => {
  if (!items || items.length === 0) return null;

  const hero = items.find((it) => it.hero) || items[0];
  const rest = items.filter((it) => it !== hero);

  return (
    <div className="gallery-root" style={{ width: '100%' }}>
      <figure className="gallery-hero" style={{ width: '100%', margin: 0 }}>
        {hero.type === 'video' ? (
          <video src={hero.src} controls className="gallery-hero-img" />
        ) : (
          <img src={hero.src} alt={hero.alt} className="gallery-hero-img" />
        )}
        {hero.title && <figcaption className="gallery-hero-caption">{hero.title}</figcaption>}
      </figure>

      <div className="gallery-grid">
        {rest.map((it) => (
          <figure
            key={it.id}
            className="gallery-item"
            onClick={() => onItemClick && onItemClick(it)}
            role={it.type === 'video' ? 'group' : 'img'}
            tabIndex={0}
          >
            {it.type === 'video' ? (
              <video src={it.src} controls className="gallery-video">Seu navegador não suporta o elemento de vídeo.</video>
            ) : (
              <img src={it.src} alt={it.alt} />
            )}
            {it.title && <figcaption>{it.title}</figcaption>}
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
