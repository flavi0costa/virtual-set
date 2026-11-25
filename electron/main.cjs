const http = require('node:http');
const path = require('node:path');
const fs = require('node:fs/promises');
const { spawn } = require('node:child_process');
const { app, BrowserWindow, shell } = require('electron');
let server;
const port = 4193;
const nodeCandidates = ['C:/Program Files/nodejs/node.exe', 'C:/Program Files (x86)/nodejs/node.exe', path.join(process.env.LOCALAPPDATA || '', 'Programs/nodejs/node.exe')];
function waitForServer(child, attempts = 40) {
  return new Promise((resolve, reject) => {
    const probe = (left) => {
      if (child.exitCode !== null) return reject(new Error(`Virtual Set server exited (${child.exitCode})`));
      const req = http.get(`http://127.0.0.1:${port}/api/health`, res => { res.resume(); if (res.statusCode === 200) resolve(); else retry(left); });
      req.on('error', () => retry(left));
      function retry(n) { if (n <= 0) return reject(new Error('Timeout starting Virtual Set server')); setTimeout(() => probe(n - 1), 250); }
    };
    probe(attempts);
  });
}
async function createWindow() {
  const win = new BrowserWindow({ width: 1480, height: 960, minWidth: 1100, minHeight: 720, backgroundColor: '#12181d', webPreferences: { contextIsolation: true, sandbox: true, nodeIntegration: false } });
  win.loadURL(`http://127.0.0.1:${port}`);
  win.webContents.setWindowOpenHandler(({ url }) => { if (url.startsWith('http')) shell.openExternal(url); return { action: 'deny' }; });
}
app.whenReady().then(async () => {
  // The packaged app lives in app.asar, which cannot be used as a process cwd.
  const root = app.isPackaged ? process.resourcesPath : path.resolve(__dirname, '..');
  const entry = path.join(process.resourcesPath, 'server.cjs');
  const dataDir = path.join(app.getPath('userData'), 'Virtual Set Data');
  await fs.mkdir(dataDir, { recursive: true });
  const serverPath = process.env.VIRTUAL_SET_SERVER || entry;
  const bundledNode = path.join(process.resourcesPath, 'node', 'node.exe');
  const node = process.env.VIRTUAL_SET_NODE || (await fs.access(bundledNode).then(() => bundledNode, async () => { for (const candidate of nodeCandidates) { try { await fs.access(candidate); return candidate; } catch {} } return 'node'; }));
  server = spawn(node, [serverPath], { cwd: root, windowsHide: true, stdio: 'ignore', env: { ...process.env, ELECTRON_RUN_AS_NODE: '1', VIRTUAL_SET_PORT: String(port), VIRTUAL_SET_DATA: dataDir } });
  server.once('error', e => console.error(`Não foi possível iniciar o servidor local (${node}). Instale Node.js 22+ ou defina VIRTUAL_SET_NODE.`, e.message));
  try { await waitForServer(server); await createWindow(); }
  catch (e) { console.error(e.message); app.quit(); }
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
app.on('before-quit', () => { if (server && !server.killed) server.kill(); });

