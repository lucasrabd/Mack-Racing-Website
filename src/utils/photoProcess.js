/* ============================================================
   Processamento de imagem no navegador (sem backend).

   Recebe o File que o usuário escolheu, redimensiona para
   400x400 PNG e devolve um data URL + os bytes para o ZIP.

   Usa <canvas>, então roda tudo local — nada é enviado a lugar nenhum.
   ============================================================ */

export const PHOTO_SIZE = 400;

/* Nomes de arquivo/import válidos: sem acento, sem espaço, sem símbolo.
   'Aynoã Ferreira' -> 'Aynoa_Ferreira'  */
export function toPhotoKey(name) {
  const semAcento = String(name)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // tira diacríticos
    .replace(/[\u2018\u2019']/g, ''); // tira apóstrofos (D’Onofrio -> DOnofrio)

  const key = semAcento
    .replace(/[^a-zA-Z0-9]+/g, '_') // resto vira _
    .replace(/^_+|_+$/g, '') // sem _ nas pontas
    .replace(/_{2,}/g, '_'); // sem __ duplicado

  // Identificador JS não pode começar com número
  return /^[0-9]/.test(key) ? `Foto_${key}` : key || 'Sem_Nome';
}

/* Garante uma chave única dentro de um conjunto já usado */
export function uniquePhotoKey(base, taken) {
  let key = base;
  let i = 2;
  while (taken.has(key)) {
    key = `${base}_${i}`;
    i += 1;
  }
  return key;
}

/* Lê o File e devolve um HTMLImageElement carregado */
function loadImage(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Não foi possível ler a imagem.'));
    };
    img.src = url;
  });
}

/* Redimensiona para PHOTO_SIZE x PHOTO_SIZE, cobrindo o quadrado
   (mesma lógica do object-fit: cover) e centralizando.
   O ajuste fino de enquadramento continua sendo o focus/zoom do card,
   então aqui só garantimos um quadrado de boa qualidade. */
export async function processPhoto(file) {
  if (!file.type.startsWith('image/')) {
    throw new Error('O arquivo precisa ser uma imagem.');
  }

  const img = await loadImage(file);
  const canvas = document.createElement('canvas');
  canvas.width = PHOTO_SIZE;
  canvas.height = PHOTO_SIZE;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';

  // cover: escala pelo menor lado e centraliza
  const scale = Math.max(PHOTO_SIZE / img.width, PHOTO_SIZE / img.height);
  const w = img.width * scale;
  const h = img.height * scale;
  const dx = (PHOTO_SIZE - w) / 2;
  const dy = (PHOTO_SIZE - h) / 2;
  ctx.drawImage(img, dx, dy, w, h);

  const dataUrl = canvas.toDataURL('image/png');

  return {
    dataUrl,
    base64: dataUrl.split(',')[1],
    width: PHOTO_SIZE,
    height: PHOTO_SIZE,
    originalName: file.name,
    originalSize: file.size,
  };
}
