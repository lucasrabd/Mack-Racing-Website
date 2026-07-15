/* ============================================================
   EQUIPE — Mack Racing
   Para adicionar alguém: coloque a foto em assets/fotos/membros,
   importe aqui e adicione o objeto na lista MEMBERS.
   ============================================================ */

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

export const SECTOR_DESCRIPTIONS = [
  { name: 'Chassis', desc: 'Projeto e fabricação do chassi, segurança e ergonomia.' },
  { name: 'Powertrain', desc: 'Motorização, transmissão e desempenho do conjunto propulsor.' },
  { name: 'Suspensão e Freios', desc: 'Geometria, estabilidade, frenagem e dirigibilidade.' },
  { name: 'Aero e Body', desc: 'Aerodinâmica, carenagem e eficiência em pista.' },
  { name: 'Elétrica/Eletrônica', desc: 'Aquisição de dados, chicote, instrumentação e telemetria.' },
  { name: 'Back Office', desc: 'Captação de recursos, parcerias, marketing e gestão.' },
];

export const MEMBERS = [
  // --- Diretores ---
  { name: 'Thierry Caparroz', role: 'Capitão e Chefe de Equipe', sector: 'Diretores', photo: Thierry_Caparroz },
  { name: 'Igor Garcez', role: 'Manufatura e Chefe de Oficina', sector: 'Diretores', photo: Igor_Garcez },
  { name: 'Pedro D\u2019Onofrio', role: 'Diretor de Projetos', sector: 'Diretores', photo: Pedro_DOnofrio },

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
  { name: 'Pedro D\u2019Onofrio', role: 'Membro', sector: 'Powertrain/Drivetrain', photo: Pedro_DOnofrio },
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
  { name: 'Ingrid Vitória', role: 'Marketing', sector: 'Back Office', photo: Ingrid_Vitoria },
  { name: 'Ana Luiza Klaussen', role: 'Equipe Comercial', sector: 'Back Office', photo: Ana_Luiza_Klaussen },
  { name: 'Giovanni Cecconello', role: 'Equipe Comercial', sector: 'Back Office', photo: Giovanni_Cecconello },
];

/* Contagem de pessoas únicas (alguns membros atuam em mais de um setor) */
export const UNIQUE_COUNT = new Set(MEMBERS.map((m) => m.name)).size;
