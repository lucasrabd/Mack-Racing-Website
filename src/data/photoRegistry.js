/* ============================================================
   REGISTRO DE FOTOS — Mack Racing
   ARQUIVO GERADO pela área /admin em 15/07/2026, 22:23:52.

   Mapeia a "chave" da foto (nome do arquivo sem .png) para o
   asset importado. Usado pela página Equipe e pelo /admin.

   Para adicionar alguém novo, prefira usar o /admin (ele já
   gera este arquivo e a foto redimensionada no ZIP).
   ============================================================ */

import Alan_Phelipe from '../assets/fotos/membros/Alan_Phelipe.png';
import Alexandre_Laurito from '../assets/fotos/membros/Alexandre_Laurito.png';
import Amanda_Alvarenga from '../assets/fotos/membros/Amanda_Alvarenga.png';
import Ana_Luiza_Jorge from '../assets/fotos/membros/Ana_Luiza_Jorge.png';
import Ana_Luiza_Klaussen from '../assets/fotos/membros/Ana_Luiza_Klaussen.png';
import Aynoa_Ferreira from '../assets/fotos/membros/Aynoa_Ferreira.png';
import Bruno_Erazo from '../assets/fotos/membros/Bruno_Erazo.png';
import Camila_Figueiredo from '../assets/fotos/membros/Camila_Figueiredo.png';
import Carlos_Henrique_Siqueira from '../assets/fotos/membros/Carlos_Henrique_Siqueira.png';
import Eduardo_Romeo from '../assets/fotos/membros/Eduardo_Romeo.png';
import Felipe_Bessa from '../assets/fotos/membros/Felipe_Bessa.png';
import Fernando_Mancini from '../assets/fotos/membros/Fernando_Mancini.png';
import Gabriela_Blattner from '../assets/fotos/membros/Gabriela_Blattner.png';
import Giovanni_Cecconello from '../assets/fotos/membros/Giovanni_Cecconello.png';
import Guilherme_Monsalles from '../assets/fotos/membros/Guilherme_Monsalles.png';
import Gustavo_Santos from '../assets/fotos/membros/Gustavo_Santos.png';
import Igor_Garcez from '../assets/fotos/membros/Igor_Garcez.png';
import Ingrid_Vitoria from '../assets/fotos/membros/Ingrid_Vitoria.png';
import Joao_Pucciarello from '../assets/fotos/membros/Joao_Pucciarello.png';
import Kevin_Rodrigues from '../assets/fotos/membros/Kevin_Rodrigues.png';
import Lara_Fiorotto from '../assets/fotos/membros/Lara_Fiorotto.png';
import Luana_Pavanelli from '../assets/fotos/membros/Luana_Pavanelli.png';
import Lucas_Bob from '../assets/fotos/membros/Lucas_Bob.png';
import Lucas_Polati from '../assets/fotos/membros/Lucas_Polati.png';
import Marcelo_Koichy from '../assets/fotos/membros/Marcelo_Koichy.png';
import Marcos_Nishino from '../assets/fotos/membros/Marcos_Nishino.png';
import Nickolas_Saiki from '../assets/fotos/membros/Nickolas_Saiki.png';
import Pedro_DOnofrio from '../assets/fotos/membros/Pedro_DOnofrio.png';
import Raphael_Ribeiro from '../assets/fotos/membros/Raphael_Ribeiro.png';
import Sophia_Betoni from '../assets/fotos/membros/Sophia_Betoni.png';
import Thierry_Caparroz from '../assets/fotos/membros/Thierry_Caparroz.png';
import Victor_Melchert from '../assets/fotos/membros/Victor_Melchert.png';
import Vinicius_Yazigi from '../assets/fotos/membros/Vinicius_Yazigi.png';
import Vitor_Hashimoto from '../assets/fotos/membros/Vitor_Hashimoto.png';

/* chave (= nome do arquivo) -> asset */
export const PHOTOS = {
  Alan_Phelipe,
  Alexandre_Laurito,
  Amanda_Alvarenga,
  Ana_Luiza_Jorge,
  Ana_Luiza_Klaussen,
  Aynoa_Ferreira,
  Bruno_Erazo,
  Camila_Figueiredo,
  Carlos_Henrique_Siqueira,
  Eduardo_Romeo,
  Felipe_Bessa,
  Fernando_Mancini,
  Gabriela_Blattner,
  Giovanni_Cecconello,
  Guilherme_Monsalles,
  Gustavo_Santos,
  Igor_Garcez,
  Ingrid_Vitoria,
  Joao_Pucciarello,
  Kevin_Rodrigues,
  Lara_Fiorotto,
  Luana_Pavanelli,
  Lucas_Bob,
  Lucas_Polati,
  Marcelo_Koichy,
  Marcos_Nishino,
  Nickolas_Saiki,
  Pedro_DOnofrio,
  Raphael_Ribeiro,
  Sophia_Betoni,
  Thierry_Caparroz,
  Victor_Melchert,
  Vinicius_Yazigi,
  Vitor_Hashimoto,
};

export const PHOTO_KEYS = Object.keys(PHOTOS).sort();

/* Resolve a foto a partir da chave. Retorna null se não existir. */
export function getPhoto(key) {
  return PHOTOS[key] || null;
}
