import React, { useEffect } from 'react';

/* Visualizador em tela cheia para fotos e vídeos */
const Lightbox = ({ item, onClose }) => {
  useEffect(() => {
    if (!item) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <button className="lightbox-close" aria-label="Fechar" onClick={onClose}>×</button>
      {item.type === 'video' ? (
        <video src={item.src} controls autoPlay onClick={(e) => e.stopPropagation()} />
      ) : (
        <img src={item.src} alt={item.alt || ''} onClick={(e) => e.stopPropagation()} />
      )}
      {(item.title || item.alt) && (
        <span className="lightbox-caption">{item.title || item.alt}</span>
      )}
    </div>
  );
};

export default Lightbox;
