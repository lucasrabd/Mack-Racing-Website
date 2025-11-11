import demoCar from '../assets/Carro_pronto_demo.png';
import chassi from '../assets/chassi.png';
import motorImg from '../assets/motor].png';
import devImg from '../assets/IMG_0108.jpg';
import suspVideo from '../assets/susp.mp4';

const galleryData = [
  { id: 'demo', src: demoCar, alt: 'Demo do carro pronto', title: 'Demo do Carro Pronto', type: 'image', hero: true },
  { id: 'chassi', src: chassi, alt: 'Esboço de chassi', title: 'Esboço de Chassi — conferência das soldas', type: 'image' },
  { id: 'motor', src: motorImg, alt: 'Motor do projeto', title: 'Nosso Motor', type: 'image' },
  { id: 'dev', src: devImg, alt: 'Registro do desenvolvimento', title: 'Registro do Desenvolvimento', type: 'image' },
  { id: 'susp', src: suspVideo, alt: 'Vídeo de suspensão', title: 'Vídeo: Análise do Sistema de Suspensão', type: 'video' },
];

export default galleryData;
