import React, { useState } from 'react';
import Lightbox from './Lightbox.jsx';

const Gallery = ({ items = [] }) => {
  const [selected, setSelected] = useState(null);

  if (!items.length) return null;

  const hero = items.find((it) => it.hero) || items[0];
  const rest = items.filter((it) => it !== hero);

  return (
    <div className="gallery-root">
      <figure className="gallery-hero">
        {hero.type === 'video' ? (
          <video src={hero.src} controls />
        ) : (
          <img src={hero.src} alt={hero.alt} onClick={() => setSelected(hero)} style={{ cursor: 'zoom-in' }} />
        )}
        {hero.title && <figcaption>{hero.title}</figcaption>}
      </figure>

      <div className="gallery-grid">
        {rest.map((it) => (
          <figure
            key={it.id}
            className="gallery-item"
            onClick={() => setSelected(it)}
            onKeyDown={(e) => e.key === 'Enter' && setSelected(it)}
            tabIndex={0}
            role="button"
            aria-label={`Ampliar: ${it.title || it.alt}`}
          >
            {it.type === 'video' ? (
              <video src={it.src} muted />
            ) : (
              <img src={it.src} alt={it.alt} loading="lazy" />
            )}
            {it.title && <figcaption>{it.title}</figcaption>}
          </figure>
        ))}
      </div>

      <Lightbox item={selected} onClose={() => setSelected(null)} />
    </div>
  );
};

export default Gallery;
