/* ============================================================
   BUILD SEGURO — Mack Racing

   Garante que a área /admin NUNCA vá para o site publicado.

   Como funciona:
   1. faz backup de src/admin/loader.js
   2. copia loader.prod.js (que exporta null) por cima dele
   3. roda o react-scripts build
   4. restaura o loader.js original (mesmo se o build falhar)

   Sem isso, o Webpack empacotaria o código do admin no bundle
   de produção mesmo com a rota desligada — daria para ler o
   JS publicado e ver tudo.
   ============================================================ */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const LOADER = path.join(ROOT, 'src', 'admin', 'loader.js');
const LOADER_PROD = path.join(ROOT, 'src', 'admin', 'loader.prod.js');
const BACKUP = path.join(ROOT, 'src', 'admin', '.loader.backup');

function fail(msg) {
  console.error(`\n[build-safe] ERRO: ${msg}\n`);
  process.exit(1);
}

if (!fs.existsSync(LOADER)) fail('src/admin/loader.js não encontrado.');
if (!fs.existsSync(LOADER_PROD)) fail('src/admin/loader.prod.js não encontrado.');

let restored = false;
function restore() {
  if (restored) return;
  restored = true;
  if (fs.existsSync(BACKUP)) {
    fs.copyFileSync(BACKUP, LOADER);
    fs.unlinkSync(BACKUP);
    console.log('[build-safe] loader de desenvolvimento restaurado.');
  }
}

process.on('exit', restore);
process.on('SIGINT', () => { restore(); process.exit(130); });
process.on('uncaughtException', (e) => { restore(); fail(e.message); });

try {
  fs.copyFileSync(LOADER, BACKUP);
  fs.copyFileSync(LOADER_PROD, LOADER);
  console.log('[build-safe] admin desativado para o build de produção.');

  // GENERATE_SOURCEMAP=false: sem sourcemap, ninguém remonta o código-fonte
  // do site a partir do bundle publicado.
  execSync('react-scripts build', {
    stdio: 'inherit',
    cwd: ROOT,
    env: { ...process.env, GENERATE_SOURCEMAP: 'false' },
  });
} catch (err) {
  restore();
  fail('o build falhou. Veja o log acima.');
} finally {
  restore();
}

/* --- Verificação final: o admin realmente não está no bundle? --- */
const buildDir = path.join(ROOT, 'build', 'static');
const SUSPECT = [
  'Área administrativa',
  'mackracing.admin.members',
  'focus-stage',
  'Ajustar enquadramento',
  'Duplicar p/ outro setor',
  'exportTeamDataFile',
  'dropzone',
  'mackracing.admin.uploads',
  'Trocar a foto',
  'Criar arquivo novo em vez de substituir',
  'buildPhotoRegistrySource',
];

function walk(dir) {
  let out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out = out.concat(walk(full));
    else out.push(full);
  }
  return out;
}

if (fs.existsSync(buildDir)) {
  const leaks = [];
  for (const file of walk(buildDir)) {
    if (!/\.(js|css|map)$/.test(file)) continue;
    const content = fs.readFileSync(file, 'utf8');
    for (const term of SUSPECT) {
      if (content.includes(term)) leaks.push(`${term} → ${path.relative(ROOT, file)}`);
    }
  }
  if (leaks.length) {
    console.error('\n[build-safe] ATENÇÃO: código do admin encontrado no bundle:');
    leaks.forEach((l) => console.error('  - ' + l));
    fail('build abortado por segurança.');
  }
  console.log('[build-safe] OK — nenhum vestígio do admin no bundle publicado.');
}
