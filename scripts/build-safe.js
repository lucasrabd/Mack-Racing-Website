const { execSync } = require('child_process');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

execSync('react-scripts build', {
  stdio: 'inherit',
  cwd: ROOT,
  env: { ...process.env, GENERATE_SOURCEMAP: 'false' },
});
