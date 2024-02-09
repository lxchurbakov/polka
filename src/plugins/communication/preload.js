const { contextBridge, ipcRenderer } = require('electron')

module.exports = class {
    constructor () {
        /* Forward messages from renderer to main */
        process.once('loaded', () => {
            window.addEventListener('message', (evt) => {
                ipcRenderer.send('message', evt.data);
            });
        })

        /* Forward messages from main to renderer */
        contextBridge.exposeInMainWorld('electronAPI', {
            onMessage: (listener) => 
                ipcRenderer.on('message', (_event, value) => listener(value)),
        });
    }
};
