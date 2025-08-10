import React, { useMemo, useState } from 'react';
import membro_01 from '../assets/fotos/membros/membro_01.jpg';
import membro_02 from '../assets/fotos/membros/membro_02.jpg';
import membro_03 from '../assets/fotos/membros/membro_03.jpg';
import membro_04 from '../assets/fotos/membros/membro_04.jpg';
import membro_05 from '../assets/fotos/membros/membro_05.jpg';
import membro_06 from '../assets/fotos/membros/membro_06.jpg';
import membro_07 from '../assets/fotos/membros/membro_07.jpg';
import membro_08 from '../assets/fotos/membros/membro_08.jpg';
import membro_09 from '../assets/fotos/membros/membro_09.jpg';
import membro_10 from '../assets/fotos/membros/membro_10.jpg';
import membro_11 from '../assets/fotos/membros/membro_11.jpg';
import membro_12 from '../assets/fotos/membros/membro_12.jpg';
import membro_13 from '../assets/fotos/membros/membro_13.jpg';
import membro_14 from '../assets/fotos/membros/membro_14.jpg';
import membro_15 from '../assets/fotos/membros/membro_15.jpg';
import membro_16 from '../assets/fotos/membros/membro_16.jpg';

const SECTORES = [
  'Todos',
  'Chassis',
  'Suspensão e Freios',
  'Elétrica',
  'Back Office',
  'Powertrain e Drivetrain',
  'Aerodinâmica/Frame',
];

const MEMBERS = [
  { name: 'Membro 1', role: 'Engenheiro', sector: 'Chassis', photo: membro_01 },
  { name: 'Membro 2', role: 'Engenheiro', sector: 'Suspensão e Freios', photo: membro_02 },
  { name: 'Membro 3', role: 'Engenheiro', sector: 'Elétrica', photo: membro_03 },
  { name: 'Membro 4', role: 'Back Office', sector: 'Back Office', photo: membro_04 },
  { name: 'Membro 5', role: 'Powertrain', sector: 'Powertrain e Drivetrain', photo: membro_05 },
  { name: 'Membro 6', role: 'Aerodinâmica', sector: 'Aerodinâmica/Frame', photo: membro_06 },
  { name: 'Membro 7', role: 'Chassis', sector: 'Chassis', photo: membro_07 },
  { name: 'Membro 8', role: 'Elétrica', sector: 'Elétrica', photo: membro_08 },
  { name: 'Membro 9', role: 'Chassis', sector: 'Chassis', photo: membro_09 },
  { name: 'Membro 10', role: 'Back Office', sector: 'Back Office', photo: membro_10 },
  { name: 'Membro 11', role: 'Powertrain', sector: 'Powertrain e Drivetrain', photo: membro_11 },
  { name: 'Membro 12', role: 'Elétrica', sector: 'Elétrica', photo: membro_12 },
  { name: 'Membro 13', role: 'Suspensão', sector: 'Suspensão e Freios', photo: membro_13 },
  { name: 'Membro 14', role: 'Aerodinâmica', sector: 'Aerodinâmica/Frame', photo: membro_14 },
  { name: 'Membro 15', role: 'Chassis', sector: 'Chassis', photo: membro_15 },
  { name: 'Membro 16', role: 'Elétrica', sector: 'Elétrica', photo: membro_16 },
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
        <h2 className="section-title" style={{ marginBottom: '1rem' }}>Nossa Equipe</h2>

        <p
          className="team-note"
          style={{
            margin: '0.25rem 0 1rem',
            fontSize: '1rem',
            maxWidth: 'none',
            textAlign: 'center',
          }}
        >
          Filtre por setor para conhecer quem cuida de cada área do nosso carro.
        </p>

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
                padding: '0.5rem 0.9rem',
                border: '1px solid var(--accent, #9b1c31)',
                background: active === s ? 'var(--accent, #9b1c31)' : 'transparent',
                color: active === s ? '#fff' : 'var(--text, #ddd)',
                cursor: 'pointer',
                fontSize: '0.9rem',
              }}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      
      <div className="team-grid">
        {filtered.map((m, idx) => (
          <div className="team-card" key={idx}>
            <img src={m.photo} alt={m.name} className="avatar-img" />
            <h3>{m.name}</h3>
            <p className="muted">{m.role}</p>
            <span
              className="tag"
              style={{
                display: 'inline-block',
                marginTop: '0.4rem',
                padding: '0.2rem 0.6rem',
                borderRadius: '999px',
                border: '1px solid #555',
                fontSize: '0.75rem',
              }}
            >
              {m.sector}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EquipePage;
