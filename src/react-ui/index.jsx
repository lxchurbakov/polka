import React from 'react';

import { Clickable, Base, Text } from 'libs/atoms';
import IPC from 'plugins/communication/renderer';

const ipc = new IPC();

export default () => {
    const [value, setValue] = React.useState(0);

    const handleClick = React.useCallback(() => {
        ipc.send({ type: 'ping', data: Math.random() });
    }, []);

    React.useEffect(() => {
        return ipc.onMessage.on(({ type, data }) => {
            if (type === 'pong') {
                setValue(data);
            }
        });
    }, []);

    return (
        <Base>
            <Text mb="12px" size="16px" weight="300">Click to test IPC</Text>

            <Clickable onClick={handleClick} background="#006699" p="6px 8px" radius="2px">
                <Text size="14px" weight="600" color="white">Test IPC</Text>
            </Clickable>

            <Text>Response: {value}</Text>
        </Base>
    );
};
