import _ from 'lodash';

export default class {
    listeners = [];

    on = (listener) => {
        this.listeners.push(listener);

        return () => {
            this.listeners = _.filter(this.listeners, (l) => l !== listener);
        };
    }

    emitsa = (data) => 
        this.listeners.reduce((acc, l) => acc.then(($data) => Promise.resolve(l($data))), Promise.resolve(data));

    emitss = (data) => 
        this.listeners.reduce((acc, l) => l(acc), data);

    emitpa = (data) => 
        Promise.all(this.listeners.map((l) => Promise.resolve(l(data))));

    emitps = (data) => 
        this.listeners.map((l) => l(data));
};
