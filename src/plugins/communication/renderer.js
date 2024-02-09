import EventEmitter from 'libs/events';

export default class {
    onMessage = new EventEmitter();

    constructor () {
        window.electronAPI.onMessage(({ type, data }) => {
            this.onMessage.emitps({ type, data });
        })
    }

    send = ({ type, data }) => {
        window.postMessage({
            type: 'message',
            data: { type, data }
        });
    };
};
