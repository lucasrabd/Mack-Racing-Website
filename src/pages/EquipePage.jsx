import React, { useMemo, useState } from 'react';

// IMPORTANDO TODAS AS FOTOS NOVAS
import Thierry_Caparroz from '../assets/fotos/membros/Thierry_Caparroz.png';
import Igor_Garcez from '../assets/fotos/membros/Igor_Garcez.png';
import Pedro_DOnofrio from '../assets/fotos/membros/Pedro_DOnofrio.png';

import Joao_Pucciarello from '../assets/fotos/membros/Joao_Pucciarello.png';
import Alexandre_Laurito from '../assets/fotos/membros/Alexandre_Laurito.png';
import Kevin_Rodrigues from '../assets/fotos/membros/Kevin_Rodrigues.png';
import Fernando_Mancini from '../assets/fotos/membros/Fernando_Mancini.png';

import Felipe_Bessa from '../assets/fotos/membros/Felipe_Bessa.png';
import Guilherme_Monsalles from '../assets/fotos/membros/Guilherme_Monsalles.png';
import Ana_Luiza_Jorge from '../assets/fotos/membros/Ana_Luiza_Jorge.png';

import Lucas_Bob from '../assets/fotos/membros/Lucas_Bob.png';
import Luana_Pavanelli from '../assets/fotos/membros/Luana_Pavanelli.png';
import Carlos_Henrique_Siqueira from '../assets/fotos/membros/Carlos_Henrique_Siqueira.png';
import Marcos_Nishino from '../assets/fotos/membros/Marcos_Nishino.png';
import Sophia_Betoni from '../assets/fotos/membros/Sophia_Betoni.png';
import Alan_Phelipe from '../assets/fotos/membros/Alan_Phelipe.png';
import Aynoah_Ferreira from '../assets/fotos/membros/Aynoa_Ferreira.png';

import Raphael_Ribeiro from '../assets/fotos/membros/Raphael_Ribeiro.png';
import Gustavo_Santos from '../assets/fotos/membros/Gustavo_Santos.png';
import Amanda_Alvarenga from '../assets/fotos/membros/Amanda_Alvarenga.png';
import Lara_Fiorotto from '../assets/fotos/membros/Lara_Fiorotto.png';
import Vinicius_Yazigi from '../assets/fotos/membros/Vinicius_Yazigi.png';
import Bruno_Erazo from '../assets/fotos/membros/Bruno_Erazo.png';
import Gabriela_Blattner from '../assets/fotos/membros/Gabriela_Blattner.png';

import Marcelo_Koichy from '../assets/fotos/membros/Marcelo_Koichy.png';
import Vitor_Hashimoto from '../assets/fotos/membros/Vitor_Hashimoto.png';
import Lucas_Polati from '../assets/fotos/membros/Lucas_Polati.png';
import Eduardo_Romeo from '../assets/fotos/membros/Eduardo_Romeo.png';

import Camila_Figueiredo from '../assets/fotos/membros/Camila_Figueiredo.png';
import Victor_Melchert from '../assets/fotos/membros/Victor_Melchert.png';
import Nickolas_Saiki from '../assets/fotos/membros/Nickolas_Saiki.png';
import Ingrid_Vitoria from '../assets/fotos/membros/Ingrid_Vitoria.png';
import Ana_Luiza_Klaussen from '../assets/fotos/membros/Ana_Luiza_Klaussen.png';
import Giovanni_Cecconello from '../assets/fotos/membros/Giovanni_Cecconello.png';

// === SETORES ===
const SECTORES = [
  'Todos',
  'Diretores',
  'Aero e Body',
  'Chassis',
  'Elétrica/Eletrônica',
  'Powertrain/Drivetrain',
  'Suspensão e Freios',
  'Back Office',
];

// === LISTA COMPLETA E CORRETA DE MEMBROS ===
const MEMBERS = [
  // --- Diretores ---
  { name: 'Thierry Caparroz', role: 'Capitão e Chefe de Equipe', sector: 'Diretores', photo: Thierry_Caparroz },
  { name: 'Igor Garcez', role: 'Manufatura e Chefe de Oficina', sector: 'Diretores', photo: Igor_Garcez },
  { name: 'Pedro D’Onofrio', role: 'Diretor de Projetos', sector: 'Diretores', photo: Pedro_DOnofrio },

  // --- Aero & Body ---
  { name: 'João Pucciarello', role: 'Diretor', sector: 'Aero e Body', photo: Joao_Pucciarello },
  { name: 'Alexandre Laurito', role: 'Membro', sector: 'Aero e Body', photo: Alexandre_Laurito },
  { name: 'Kevin Rodrigues', role: 'Membro', sector: 'Aero e Body', photo: Kevin_Rodrigues },
  { name: 'Fernando Mancini', role: 'Membro', sector: 'Aero e Body', photo: Fernando_Mancini },

  // --- Chassis ---
  { name: 'Felipe Bessa', role: 'Diretor', sector: 'Chassis', photo: Felipe_Bessa },
  { name: 'Guilherme Monsalles', role: 'Membro', sector: 'Chassis', photo: Guilherme_Monsalles },
  { name: 'Ana Luiza Jorge', role: 'Membro', sector: 'Chassis', photo: Ana_Luiza_Jorge },

  // --- Elétrica ---
  { name: 'Lucas Bob', role: 'Diretor', sector: 'Elétrica/Eletrônica', photo: Lucas_Bob },
  { name: 'Luana Pavanelli', role: 'Membro', sector: 'Elétrica/Eletrônica', photo: Luana_Pavanelli },
  { name: 'Carlos Henrique Siqueira', role: 'Membro', sector: 'Elétrica/Eletrônica', photo: Carlos_Henrique_Siqueira },
  { name: 'Marcos Nishino', role: 'Membro', sector: 'Elétrica/Eletrônica', photo: Marcos_Nishino },
  { name: 'Sophia Betoni', role: 'Membro', sector: 'Elétrica/Eletrônica', photo: Sophia_Betoni },
  { name: 'Alan Phelipe', role: 'Membro', sector: 'Elétrica/Eletrônica', photo: Alan_Phelipe },
  { name: 'Aynoã Ferreira', role: 'Membro', sector: 'Elétrica/Eletrônica', photo: Aynoah_Ferreira },

  // --- Powertrain ---
  { name: 'Raphael Ribeiro', role: 'Diretor', sector: 'Powertrain/Drivetrain', photo: Raphael_Ribeiro },
  { name: 'Gustavo Santos', role: 'Membro', sector: 'Powertrain/Drivetrain', photo: Gustavo_Santos },
  { name: 'Amanda Alvarenga', role: 'Membro', sector: 'Powertrain/Drivetrain', photo: Amanda_Alvarenga },
  { name: 'Pedro D’Onofrio', role: 'Membro', sector: 'Powertrain/Drivetrain', photo: Pedro_DOnofrio },
  { name: 'Thierry Caparroz', role: 'Membro', sector: 'Powertrain/Drivetrain', photo: Thierry_Caparroz },
  { name: 'Lara Fiorotto', role: 'Membro', sector: 'Powertrain/Drivetrain', photo: Lara_Fiorotto },
  { name: 'Vinicius Yazigi', role: 'Membro', sector: 'Powertrain/Drivetrain', photo: Vinicius_Yazigi },
  { name: 'Bruno Erazo', role: 'Membro', sector: 'Powertrain/Drivetrain', photo: Bruno_Erazo },
  { name: 'Gabriela Blattner', role: 'Membro', sector: 'Powertrain/Drivetrain', photo: Gabriela_Blattner },

  // --- Suspensão ---
  { name: 'Marcelo Koichy', role: 'Diretor', sector: 'Suspensão e Freios', photo: Marcelo_Koichy },
  { name: 'Vitor Hashimoto', role: 'Membro', sector: 'Suspensão e Freios', photo: Vitor_Hashimoto },
  { name: 'Thierry Caparroz', role: 'Membro', sector: 'Suspensão e Freios', photo: Thierry_Caparroz },
  { name: 'Lucas Polati', role: 'Membro', sector: 'Suspensão e Freios', photo: Lucas_Polati },
  { name: 'Eduardo Romeo', role: 'Membro', sector: 'Suspensão e Freios', photo: Eduardo_Romeo },

  // --- Back Office ---
  { name: 'Camila Figueiredo', role: 'Administração Geral', sector: 'Back Office', photo: Camila_Figueiredo },
  { name: 'Victor Melchert', role: 'Marketing', sector: 'Back Office', photo: Victor_Melchert },
  { name: 'Nickolas Saiki', role: 'Equipe Comercial', sector: 'Back Office', photo: Nickolas_Saiki },
  { name: 'Ingrid Vitória', role: 'Markenting', sector: 'Back Office', photo: Ingrid_Vitoria },
  { name: 'Ana Luiza Klaussen', role: 'Equipe Comercial', sector: 'Back Office', photo: Ana_Luiza_Klaussen },
  { name: 'Giovanni Cecconello', role: 'Equipe Comercial', sector: 'Back Office', photo: Giovanni_Cecconello },
];

const EquipePage = () => {
  const [active, setActive] = useState('Todos');

  const filtered = useMemo(() => {
    if (active === 'Todos') return MEMBERS;
    return MEMBERS.filter((m) => m.sector === active);
  }, [active]);

  return (
    <section className="section team-section" style={{ paddingTop: '2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
        <h2 className="section-title">Nossa Equipe</h2>

        <p className="team-note">
          Filtre por setor para conhecer quem cuida de cada área do nosso carro.
        </p>

        {/* ✅ BOTÕES REDONDINHOS CORRIGIDOS */}
        <div
          className="filters"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            justifyContent: 'center',
            marginBottom: '1.5rem',
          }}
        >
          {SECTORES.map((s) => (
            <button
              key={s}
              onClick={() => setActive(s)}
              aria-pressed={active === s}
              className={`btn ${active === s ? 'btn-primary' : 'btn-outline'}`}
              style={{
                borderRadius: '999px',
                padding: '0.5rem 1.2rem',
                border: '1px solid #9b1c31',
                background: active === s ? '#9b1c31' : 'transparent',
                color: active === s ? '#fff' : '#ddd',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: 600,
                letterSpacing: '0.5px',
                transition: '0.2s ease',
              }}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* ==== GRID ==== */}
      <div className="team-grid">
        {filtered.map((m, idx) => (
          <div className="team-card" key={idx}>
            <img src={m.photo} alt={m.name} className="avatar-img" />
            <h3>{m.name}</h3>
            <p className="muted">{m.role}</p>
            <span className="tag">{m.sector}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EquipePage;
