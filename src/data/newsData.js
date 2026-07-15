/* ============================================================
   FEED DE NOTÍCIAS — Mack Racing
   ============================================================
   Este arquivo alimenta a página /noticias e a seção "Paddock News"
   da home. Existem 3 tipos de post:

   1) type: 'linkedin'  → embed oficial do LinkedIn (iframe)
      COMO PEGAR O CÓDIGO:
      - Abra o post da Mack Racing no LinkedIn (pelo navegador)
      - Clique nos três pontinhos (⋯) do post → "Incorporar esta publicação"
      - Copie o número que aparece depois de "urn:li:activity:"
      - Cole no campo `urn` abaixo. Pronto, o post aparece no site.

   2) type: 'instagram' → embed oficial do Instagram
      - Basta colar a URL do post no campo `url`
        (ex.: https://www.instagram.com/p/ABC123xyz/)

   3) type: 'paddock'   → post interno do site (título, texto, fotos
      e vídeos hospedados no próprio projeto). Use para conteúdo
      exclusivo ou quando não quiser depender de rede social.

   Os posts aparecem na ordem desta lista (mais novo primeiro).
   `featured: true` faz o post aparecer também na home.
   ============================================================ */

import ecpa01 from '../assets/ecpa-01.jpg';
import ecpa02 from '../assets/ecpa-02.jpg';
import ecpa03 from '../assets/ecpa-03.jpg';
import ecpa04 from '../assets/ecpa-04.jpg';
import ecpa05 from '../assets/ecpa-05.jpg';
import ecpaVideo01 from '../assets/ecpa-video-01.mp4';
import ecpaVideo02 from '../assets/ecpa-video-02.mp4';
import fei01 from '../assets/fei-01.jpg';
import fei02 from '../assets/fei-02.jpg';
import fei03 from '../assets/fei-03.jpg';

const newsData = [
  {
    id: 'li-formulasae',
    type: 'linkedin',
    urn: '7445424854335520768',
    date: '2026-04-02',
    featured: true,
  },
  {
    id: 'li-processo-seletivo',
    type: 'linkedin',
    urn: '7441770752581767168',
    date: '2026-03-23',
    featured: true,
  },
  {
    id: 'li-mackracing-03',
    type: 'linkedin',
    urn: '7434334155968233473',
    date: '2026-03-02',
  },
  {
    id: 'li-mackracing-02',
    type: 'linkedin',
    urn: '7424288564194152448',
    date: '2026-02-03',
  },

  /* ---- EXEMPLO DE POST DO INSTAGRAM ---------------------------

  {
    id: 'ig-001',
    type: 'instagram',
    url: 'https://www.instagram.com/p/CODIGO_DO_POST/',
    date: '2026-06-10',
  },
  --------------------------------------------------------------- */

  {
    id: 'pd-fei',
    type: 'paddock',
    date: '2025-10-25',
    featured: true,
    title: 'Visita à Formula FEI Racing Team',
    text: 'A Mack Racing foi convidada pela Formula FEI Racing Team para conhecer suas instalações e os processos de produção do carro deles. Saímos de lá com o caderno cheio de anotações e muita inspiração para o MP4/1.\nObrigado pelo convite e pela ótima recepção, Formula FEI! 🏎️',
    media: [
      { type: 'image', src: fei01, alt: 'Equipes Mack Racing e Formula FEI reunidas' },
      { type: 'image', src: fei02, alt: 'Visita à oficina da Formula FEI' },
      { type: 'image', src: fei03, alt: 'Detalhes do carro da Formula FEI' },
    ],
  },

  {
    id: 'pd-ecpa',
    type: 'paddock',
    date: '2025-08-02',
    featured: false,
    title: 'ECPA — Esporte Clube Piracicabano de Automobilismo',
    text: 'A equipe foi ao ECPA acompanhar o evento de perto e anotar referências para o desenvolvimento do nosso carro. Uma experiência incrível, cheia de aprendizado e inspiração para todo o time!',
    media: [
      { type: 'image', src: ecpa01, alt: 'Equipe Mack Racing no ECPA' },
      { type: 'image', src: ecpa02, alt: 'Carros no grid do ECPA' },
      { type: 'image', src: ecpa03, alt: 'Registro do evento no ECPA' },
      { type: 'image', src: ecpa04, alt: 'Membros da equipe observando a pista' },
      { type: 'image', src: ecpa05, alt: 'Detalhe de carro de competição no ECPA' },
      { type: 'video', src: ecpaVideo01, alt: 'Vídeo do evento no ECPA' },
      { type: 'video', src: ecpaVideo02, alt: 'Carros em movimento no ECPA' },
    ],
  },
];

/* Redes oficiais — usadas nos cards "siga a equipe", contato e rodapé */
export const SOCIALS = {
  linkedin: {
    label: 'LinkedIn',
    handle: 'Equipe Mack Racing',
    url: 'https://www.linkedin.com/company/equipe-mack-racing/',
  },
  instagram: {
    label: 'Instagram',
    handle: '@equipemackracing',
    url: 'https://instagram.com/equipemackracing',
  },
  tiktok: {
    label: 'TikTok',
    handle: '@mackracing',
    url: 'https://www.tiktok.com/@mackracing',
  },
};

export default newsData;