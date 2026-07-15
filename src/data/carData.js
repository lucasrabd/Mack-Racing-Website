/* ============================================================
   MP4/1 — Dados do carro e diário de desenvolvimento
   ============================================================ */

import carRender from '../assets/carro-mp41.png';
import chassi from '../assets/chassi.png';
import motorImg from '../assets/motor.png';
import devImg from '../assets/dev-registro.jpg';
import suspVideo from '../assets/susp.mp4';

export const CAR = {
  name: 'MP4/1',
  render: carRender,
  tagline: 'Nosso primeiro carro. Cada solda, cada linha de código e cada noite na oficina leva o MP4/1 para mais perto do grid da FSAE Brasil.',
  specs: [
    { label: 'STATUS', value: 'Em desenvolvimento', hot: true },
    { label: 'META DE PESO', value: '≤ 300 kg' },
    { label: 'ESTREIA PREVISTA', value: 'Início de 2026' },
    { label: 'PRIMEIRA COMPETIÇÃO', value: 'FSAE Brasil 2026' },
    { label: 'CATEGORIA', value: 'Fórmula SAE — Combustão' },
  ],
};

export const GALLERY = [
  { id: 'render', src: carRender, alt: 'Render do MP4/1 finalizado', title: 'MP4/1 — Conceito final', type: 'image', hero: true },
  { id: 'chassi', src: chassi, alt: 'Esboço do chassi tubular', title: 'Chassi — conferência das soldas', type: 'image' },
  { id: 'motor', src: motorImg, alt: 'Motor do MP4/1', title: 'Powertrain — nosso motor', type: 'image' },
  { id: 'dev', src: devImg, alt: 'Registro do desenvolvimento na oficina', title: 'Registro do desenvolvimento', type: 'image' },
  { id: 'susp', src: suspVideo, alt: 'Vídeo da análise da suspensão', title: 'Suspensão — análise do sistema', type: 'video' },
];
