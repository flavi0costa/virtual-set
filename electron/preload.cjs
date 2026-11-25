const { contextBridge } = require('electron');
contextBridge.exposeInMainWorld('virtualSetHost', Object.freeze({ name: 'Virtual Set', version: '0.1.0' }));
