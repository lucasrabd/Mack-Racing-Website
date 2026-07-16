/* ============================================================
   Gera o conteúdo de src/data/photoRegistry.js a partir da
   lista de chaves de foto usadas no /admin.

   Assim, ao adicionar uma foto nova pelo admin, o registry sai
   pronto no ZIP — sem precisar editar import por import na mão.
   ============================================================ */

export function buildPhotoRegistrySource(keys) {
  const sorted = [...new Set(keys)].sort();

  const imports = sorted
    .map((k) => `import ${k} from '../assets/fotos/membros/${k}.png';`)
    .join('\n');

  const entries = sorted.map((k) => `  ${k},`).join('\n');

  return `/* ============================================================
   REGISTRO DE FOTOS — Mack Racing
   ARQUIVO GERADO pela área /admin em ${new Date().toLocaleString('pt-BR')}.

   Mapeia a "chave" da foto (nome do arquivo sem .png) para o
   asset importado. Usado pela página Equipe e pelo /admin.

   Para adicionar alguém novo, prefira usar o /admin (ele já
   gera este arquivo e a foto redimensionada no ZIP).
   ============================================================ */

${imports}

/* chave (= nome do arquivo) -> asset */
export const PHOTOS = {
${entries}
};

export const PHOTO_KEYS = Object.keys(PHOTOS).sort();

/* Resolve a foto a partir da chave. Retorna null se não existir. */
export function getPhoto(key) {
  return PHOTOS[key] || null;
}
`;
}
