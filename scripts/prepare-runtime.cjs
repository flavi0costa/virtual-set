const fs = require('node:fs');
const path = require('node:path');

const source = path.resolve(__dirname, '../node_modules/node-win-x64/bin/node.exe');
const targetDir = path.resolve(__dirname, '../runtime/node');
const target = path.join(targetDir, 'node.exe');

if (!fs.existsSync(source)) {
  throw new Error('Runtime Node ausente. Execute npm ci antes de empacotar.');
}

fs.mkdirSync(targetDir, { recursive: true });
fs.copyFileSync(source, target);
console.log(`Runtime Node copiado para ${target}`);
