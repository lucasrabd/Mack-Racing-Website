import React from 'react';

/* Avatar circular com enquadramento controlável.
   focus = { x, y } em %  → object-position
   zoom  = escala (1 = normal)
   Usado pela Equipe e pelo preview do /admin, para o que você vê
   no admin ser exatamente o que sai no site. */
const Avatar = ({ src, alt, focus, zoom = 1, className = '', size }) => {
  const f = focus || { x: 50, y: 0 };
  const style = {
    objectPosition: `${f.x}% ${f.y}%`,
    transform: zoom && zoom !== 1 ? `scale(${zoom})` : undefined,
  };
  if (size) {
    style.width = size;
    style.height = size;
  }

  if (!src) {
    return (
      <div
        className={`avatar-img avatar-fallback ${className}`}
        style={size ? { width: size, height: size } : undefined}
        aria-label={alt}
        role="img"
      >
        {(alt || '?').charAt(0)}
      </div>
    );
  }

  return (
    <span className={`avatar-clip ${className}`} style={size ? { width: size, height: size } : undefined}>
      <img src={src} alt={alt} className="avatar-img" style={style} loading="lazy" />
    </span>
  );
};

export default Avatar;
