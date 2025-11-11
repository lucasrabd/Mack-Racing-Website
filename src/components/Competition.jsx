const Competition = () => {
  return (
    <section id="competicao" className="section competition-section" style={{ background: 'rgba(255,255,255,0.01)', borderRadius: 18, boxShadow: '0 2px 24px 0 rgba(0,0,0,0.10)', padding: '2.5rem 1.5rem', maxWidth: 900, margin: '0 auto', marginTop: 32 }}>
      <h2 className="section-title" style={{ fontSize: '2.3rem', textAlign: 'center', color: 'var(--color-primary, #9b1c31)', marginBottom: '1.2rem' }}>
        Competição & Eventos
      </h2>
      <div style={{ maxWidth: 700, margin: '0 auto', marginBottom: 32, textAlign: 'center', color: '#ddd', fontSize: '1.08rem', lineHeight: 1.6 }}>
        Fundados em 2018, somos a equipe oficial de Formula SAE da Universidade Presbiteriana Mackenzie.<br/>
        O Mack Racing Team é composto por membros dos mais diversos cursos da nossa Escola de Engenharia.<br/>
        Nosso objetivo é desenvolver carros de alta performance a fim de competir nos torneios de Formula SAE Brasil a fora!
      </div>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <h3 style={{ color: '#9b1c31', fontWeight: 700, fontSize: '1.3rem', marginBottom: 6 }}>ECPA - Sport Piracicabano Automobile Club</h3>
        <span style={{ color: '#bbb', fontSize: '1rem' }}>02/08/2025</span>
        <p style={{ color: '#ddd', margin: '1rem auto 1.5rem', maxWidth: 600 }}>
          Fomos no ECPA para ver o evento e anotar coisas para o carro. Uma experiência incrível para toda a equipe, cheia de aprendizados e inspiração!
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginBottom: 24 }}>
          <img src={require('../assets/Imagem do WhatsApp de 2025-08-07 à(s) 09.24.52_8d2f472a.jpg')} alt="ECPA 1" style={{ width: 180, borderRadius: 10, boxShadow: '0 2px 12px 0 rgba(0,0,0,0.10)' }} />
          <img src={require('../assets/Imagem do WhatsApp de 2025-08-07 à(s) 09.24.53_aa9d5f9d.jpg')} alt="ECPA 2" style={{ width: 180, borderRadius: 10, boxShadow: '0 2px 12px 0 rgba(0,0,0,0.10)' }} />
          <img src={require('../assets/Imagem do WhatsApp de 2025-08-07 à(s) 09.24.53_faeb3aa9.jpg')} alt="ECPA 3" style={{ width: 180, borderRadius: 10, boxShadow: '0 2px 12px 0 rgba(0,0,0,0.10)' }} />
          <img src={require('../assets/Imagem do WhatsApp de 2025-08-07 à(s) 09.24.54_c8e16446.jpg')} alt="ECPA 4" style={{ width: 180, borderRadius: 10, boxShadow: '0 2px 12px 0 rgba(0,0,0,0.10)' }} />
          <img src={require('../assets/Imagem do WhatsApp de 2025-08-07 à(s) 09.24.56_7a2a9971.jpg')} alt="ECPA 5" style={{ width: 180, borderRadius: 10, boxShadow: '0 2px 12px 0 rgba(0,0,0,0.10)' }} />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center', marginBottom: 24 }}>
          <video src={require('../assets/Vídeo do WhatsApp de 2025-08-07 à(s) 09.24.58_14f3ae36.mp4')} controls style={{ width: 260, borderRadius: 10, boxShadow: '0 2px 12px 0 rgba(0,0,0,0.10)' }} />
          <video src={require('../assets/Vídeo do WhatsApp de 2025-08-07 à(s) 09.25.21_068dae82.mp4')} controls style={{ width: 260, borderRadius: 10, boxShadow: '0 2px 12px 0 rgba(0,0,0,0.10)' }} />
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: '0 auto', marginBottom: 32, textAlign: 'center', color: '#ddd', fontSize: '1.08rem', lineHeight: 1.6 }}>
        <h3 style={{ color: '#9b1c31', fontWeight: 700, fontSize: '1.3rem', marginBottom: 6 }}>Visita à Formula FEI Racing Team</h3>
        <span style={{ color: '#bbb', fontSize: '1rem' }}>25/10/2025</span>
        <p style={{ color: '#ddd', margin: '1rem auto 1.5rem', maxWidth: 600 }}>
          Neste último sábado (25/10) a Mack Racing foi convidada pela Formula FEI Racing Team para conhecer um pouco de suas instalações e processos da produção de seu carro.<br/>
          A Mack Racing agradece pela oportunidade e a ótima recepção dada pela Formula FEI Racing Team.<br/>
          Muito obrigado pelo convite, Formula FEI. 🏎🏎
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 12 }}>
          <img src={require('../assets/1761618271428.jpg')} alt="Visita FEI 1" style={{ width: 260, borderRadius: 10, boxShadow: '0 2px 12px rgba(0,0,0,0.10)' }} />
          <img src={require('../assets/1761618271471.jpg')} alt="Visita FEI 2" style={{ width: 260, borderRadius: 10, boxShadow: '0 2px 12px rgba(0,0,0,0.10)' }} />
          <img src={require('../assets/1761618271477.jpg')} alt="Visita FEI 3" style={{ width: 260, borderRadius: 10, boxShadow: '0 2px 12px rgba(0,0,0,0.10)' }} />
        </div>
      </div>

      <div style={{ background: 'rgba(155,28,49,0.08)', borderRadius: 12, padding: '1.2rem 1.5rem', maxWidth: 600, margin: '0 auto', textAlign: 'center', marginBottom: 24 }}>
        <h3 style={{ color: '#9b1c31', margin: 0, fontWeight: 700, fontSize: '1.2rem' }}>Venha fazer parte da Mack Racing!</h3>
        <p style={{ color: '#ddd', margin: '0.7rem 0 0.2rem', fontSize: '1.05rem' }}>
          Se você é apaixonado por automobilismo, engenharia e desafios, junte-se à nossa equipe! Participe de eventos, desenvolva projetos inovadores e viva experiências únicas nas pistas e nos bastidores.
        </p>
        <a href="/contato" className="btn primary" style={{ marginTop: 12, fontWeight: 700, fontSize: '1.1rem', padding: '0.7rem 2.2rem', borderRadius: 8 }}>
          Quero fazer parte!
        </a>
      </div>
      <div style={{ maxWidth: 700, margin: '0 auto', marginTop: 32, textAlign: 'center', color: '#bbb', fontSize: '1.05rem' }}>
        <strong style={{ color: '#9b1c31' }}>Fórmula SAE Brasil</strong> é onde a paixão pela engenharia encontra a adrenalina das pistas. Estudantes de todo o país se unem para projetar, construir e competir com carros de alto desempenho, vivendo desafios reais e experiências inesquecíveis.
      </div>
    </section>
  );
};

export default Competition;