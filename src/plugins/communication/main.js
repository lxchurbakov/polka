const { ipcMain } = require('electron');
const { default: EventEmitter } = require('libs/events');

module.exports = class {
    onMessage = new EventEmitter();

    constructor (window) {
        this.window = window;

        ipcMain.on('message', (event, arg) => {
            this.onMessage.emitps(arg.data);
        });        
    }

    send = ({ type, data }) => {
        this.window.webContents.send('message', { type, data });
    };
};
