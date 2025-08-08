import React from 'react';

/**
 * Contact section providing ways to get in touch with the team.  
 */
const Contact = () => {
  return (
    <section id="contato" className="section contact-section">
      <h2 className="section-title">Entre em Contato</h2>
      <p>
        Ficou interessado em saber mais sobre a Mack&nbsp;Racing, tornar-se patrocinador ou fazer parte da equipe?
        Entre em contato conosco!
      </p>
      <ul className="contact-list">
        <li>
          <strong>E-mail:</strong> <a href="mailto:fsaemackracing@gmail.com">fsaemackracing@gmail.com</a>
        </li>
        <li>
          <strong>Instagram:</strong>{' '}
          <a href="https://instagram.com/equipemackracing" target="_blank" rel="noopener noreferrer">
            equipemackracing
          </a>
        </li>
        <li>
          <strong>LinkedIn:</strong>{' '}
          <a
            href="https://www.linkedin.com/in/equipe-mack-racing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Equipe&nbsp;Mack&nbsp;Racing
          </a>
        </li>
        <li>
          <strong>Facebook:</strong>{' '}
          <a href="https://www.facebook.com/equipemackracing" target="_blank" rel="noopener noreferrer">
            equipemackracing
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;