/* ============================================================
   EQUIPE — Mack Racing
   ARQUIVO GERADO pela área /admin em 15/07/2026, 22:23:43.
   Para editar: rode o site em dev, acesse /admin, ajuste e exporte.

   Campos:
     name / role / sector
     photoKey - chave em src/data/photoRegistry.js
     focus    - { x, y } em % (posição da foto no círculo)
     zoom     - escala da foto (1 = normal)
   ============================================================ */

import { getPhoto } from './photoRegistry';

export const SECTORS = [
  'Todos',
  'Diretores',
  'Aero e Body',
  'Chassis',
  'Elétrica/Eletrônica',
  'Powertrain/Drivetrain',
  'Suspensão e Freios',
  'Back Office',
];

/* Setores atribuíveis (sem "Todos", que é só filtro) */
export const ASSIGNABLE_SECTORS = SECTORS.filter((s) => s !== 'Todos');

export const SECTOR_DESCRIPTIONS = [
  { name: 'Chassis', desc: 'Projeto e fabricação do chassi, segurança e ergonomia.' },
  { name: 'Powertrain', desc: 'Motorização, transmissão e desempenho do conjunto propulsor.' },
  { name: 'Suspensão e Freios', desc: 'Geometria, estabilidade, frenagem e dirigibilidade.' },
  { name: 'Aero e Body', desc: 'Aerodinâmica, carenagem e eficiência em pista.' },
  { name: 'Elétrica/Eletrônica', desc: 'Aquisição de dados, chicote, instrumentação e telemetria.' },
  { name: 'Back Office', desc: 'Captação de recursos, parcerias, marketing e gestão.' },
];

export const DEFAULT_FOCUS = { x: 50, y: 0 };
export const DEFAULT_ZOOM = 1;

export const BASE_MEMBERS = [
  // --- Diretores ---
  { name: 'Igor Garcez', role: 'Manufatura e Chefe de Oficina', sector: 'Diretores', photoKey: 'Igor_Garcez', focus: { x: 48, y: 48 }, zoom: 1 },
  { name: 'Pedro D’Onofrio', role: 'Diretor de Projetos', sector: 'Diretores', photoKey: 'Pedro_DOnofrio', focus: { x: 50, y: 0 }, zoom: 1 },
  { name: 'Victor Melchert', role: 'Capitão e Chefe de equipe', sector: 'Diretores', photoKey: 'Victor_Melchert', focus: { x: 21, y: 4 }, zoom: 1 },

  // --- Aero e Body ---
  { name: 'Alexandre Laurito', role: 'Diretor - CAD/Modelagem', sector: 'Aero e Body', photoKey: 'Alexandre_Laurito', focus: { x: 50, y: 0 }, zoom: 1 },
  { name: 'João Pucciarello', role: 'Membro', sector: 'Aero e Body', photoKey: 'Joao_Pucciarello', focus: { x: 52, y: 66 }, zoom: 1 },
  { name: 'Kevin Rodrigues', role: 'Membro', sector: 'Aero e Body', photoKey: 'Kevin_Rodrigues', focus: { x: 52, y: 82 }, zoom: 1 },
  { name: 'Fernando Mancini', role: 'Membro', sector: 'Aero e Body', photoKey: 'Fernando_Mancini', focus: { x: 37, y: 0 }, zoom: 1 },

  // --- Chassis ---
  { name: 'Guilherme Aquotti', role: 'Diretor de Chassis', sector: 'Chassis', photoKey: 'Guilherme_Monsalles', focus: { x: 44, y: 0 }, zoom: 1 },
  { name: 'Felipe Bessa', role: 'Membro', sector: 'Chassis', photoKey: 'Felipe_Bessa', focus: { x: 52, y: 49 }, zoom: 1 },
  { name: 'Ana Luiza Jorge', role: 'Membro', sector: 'Chassis', photoKey: 'Ana_Luiza_Jorge', focus: { x: 54, y: 100 }, zoom: 1 },

  // --- Elétrica/Eletrônica ---
  { name: 'Lucas Bob', role: 'Diretor de Elétrica/Eletrônica - Projetista de Eletrônica', sector: 'Elétrica/Eletrônica', photoKey: 'Lucas_Bob', focus: { x: 50, y: 0 }, zoom: 1 },
  { name: 'Aynoã Ferreira', role: 'Membro', sector: 'Elétrica/Eletrônica', photoKey: 'Aynoa_Ferreira', focus: { x: 63, y: 21 }, zoom: 1 },
  { name: 'Luana Pavanelli', role: 'Membro', sector: 'Elétrica/Eletrônica', photoKey: 'Luana_Pavanelli', focus: { x: 50, y: 100 }, zoom: 1 },
  { name: 'Carlos Henrique Siqueira', role: 'Membro', sector: 'Elétrica/Eletrônica', photoKey: 'Carlos_Henrique_Siqueira', focus: { x: 42, y: 0 }, zoom: 1 },
  { name: 'Marcos Nishino', role: 'Membro', sector: 'Elétrica/Eletrônica', photoKey: 'Marcos_Nishino', focus: { x: 59, y: 64 }, zoom: 1 },
  { name: 'Sophia Betoni', role: 'Membro', sector: 'Elétrica/Eletrônica', photoKey: 'Sophia_Betoni', focus: { x: 57, y: 80 }, zoom: 1 },
  { name: 'Alan Phelipe', role: 'Membro', sector: 'Elétrica/Eletrônica', photoKey: 'Alan_Phelipe', focus: { x: 51, y: 100 }, zoom: 1 },

  // --- Powertrain/Drivetrain ---
  { name: 'Raphael Ribeiro', role: 'Diretor de Powertrain - Sistemas de Lubrificação', sector: 'Powertrain/Drivetrain', photoKey: 'Raphael_Ribeiro', focus: { x: 56, y: 57 }, zoom: 1 },
  { name: 'Pedro Neves', role: 'Membro', sector: 'Powertrain/Drivetrain', photoKey: 'Alan_Phelipe', focus: { x: 50, y: 0 }, zoom: 1 },
  { name: 'Gustavo Santos', role: 'Membro', sector: 'Powertrain/Drivetrain', photoKey: 'Gustavo_Santos', focus: { x: 50, y: 0 }, zoom: 1 },
  { name: 'Amanda Alvarenga', role: 'Membro', sector: 'Powertrain/Drivetrain', photoKey: 'Amanda_Alvarenga', focus: { x: 34, y: 51 }, zoom: 1 },
  { name: 'Pedro D’Onofrio', role: 'Membro', sector: 'Powertrain/Drivetrain', photoKey: 'Pedro_DOnofrio', focus: { x: 50, y: 0 }, zoom: 1 },
  { name: 'Thierry Caparroz', role: 'Membro', sector: 'Powertrain/Drivetrain', photoKey: 'Thierry_Caparroz', focus: { x: 44, y: 70 }, zoom: 1 },
  { name: 'Lara Fiorotto', role: 'Membro', sector: 'Powertrain/Drivetrain', photoKey: 'Lara_Fiorotto', focus: { x: 46, y: 90 }, zoom: 1 },
  { name: 'Vinicius Yazigi', role: 'Membro', sector: 'Powertrain/Drivetrain', photoKey: 'Vinicius_Yazigi', focus: { x: 65, y: 100 }, zoom: 1 },
  { name: 'Bruno Erazo', role: 'Membro', sector: 'Powertrain/Drivetrain', photoKey: 'Bruno_Erazo', focus: { x: 49, y: 0 }, zoom: 1.4 },
  { name: 'Gabriela Blattner', role: 'Membro', sector: 'Powertrain/Drivetrain', photoKey: 'Gabriela_Blattner', focus: { x: 73, y: 73 }, zoom: 1 },

  // --- Suspensão e Freios ---
  { name: 'Marcelo Koichy', role: 'Diretor de Suspensão e Freios - Dinâmica/CAD', sector: 'Suspensão e Freios', photoKey: 'Marcelo_Koichy', focus: { x: 50, y: 0 }, zoom: 1 },
  { name: 'Vitor Hashimoto', role: 'Membro', sector: 'Suspensão e Freios', photoKey: 'Vitor_Hashimoto', focus: { x: 50, y: 0 }, zoom: 1 },
  { name: 'Thierry Caparroz', role: 'Membro', sector: 'Suspensão e Freios', photoKey: 'Thierry_Caparroz', focus: { x: 50, y: 0 }, zoom: 1 },
  { name: 'Lucas Polati', role: 'Membro', sector: 'Suspensão e Freios', photoKey: 'Lucas_Polati', focus: { x: 50, y: 0 }, zoom: 1 },
  { name: 'Eduardo Romeo', role: 'Membro', sector: 'Suspensão e Freios', photoKey: 'Eduardo_Romeo', focus: { x: 50, y: 0 }, zoom: 1 },

  // --- Back Office ---
  { name: 'Camila Figueiredo', role: 'Administração Geral', sector: 'Back Office', photoKey: 'Camila_Figueiredo', focus: { x: 50, y: 0 }, zoom: 1 },
  { name: 'Nickolas Saiki', role: 'Equipe Comercial', sector: 'Back Office', photoKey: 'Nickolas_Saiki', focus: { x: 55, y: 100 }, zoom: 1 },
  { name: 'Ingrid Vitória', role: 'Marketing', sector: 'Back Office', photoKey: 'Ingrid_Vitoria', focus: { x: 32, y: 0 }, zoom: 1 },
  { name: 'Ana Luiza Klaussen', role: 'Equipe Comercial', sector: 'Back Office', photoKey: 'Ana_Luiza_Klaussen', focus: { x: 54, y: 100 }, zoom: 1 },
  { name: 'Giovanni Cecconello', role: 'Equipe Comercial', sector: 'Back Office', photoKey: 'Giovanni_Cecconello', focus: { x: 59, y: 81 }, zoom: 1 },
];

/* Normaliza: garante focus/zoom e resolve o asset da foto */
export function hydrate(list) {
  return list.map((m) => ({
    ...m,
    focus: m.focus || { ...DEFAULT_FOCUS },
    zoom: typeof m.zoom === 'number' ? m.zoom : DEFAULT_ZOOM,
    photo: getPhoto(m.photoKey),
  }));
}

export const MEMBERS = hydrate(BASE_MEMBERS);

/* Contagem de pessoas únicas (alguns membros atuam em mais de um setor) */
export const UNIQUE_COUNT = new Set(BASE_MEMBERS.map((m) => m.name)).size;
