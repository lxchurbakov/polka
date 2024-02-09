import React from 'react';

import { Clickable, Base, Text } from 'libs/atoms';

export default ({ router }) => {
    const create = React.useCallback(() => {
        const id = /* create new */ '100';

        router.navigate('catalogs/edit', { id, mode: 'new' });
    }, []);

    return (
        <Base p="32px">
            <Text mb="12px" size="32px" weight="600">
                Ваши каталоги
            </Text>

            <Text mb="24px" size="16px" weight="400">
                Все документы организованы по каталогам.
            </Text>

            <Clickable onClick={create} background="#006699" p="6px 10px" radius="4px">
                <Text size="14px" weight="600" color="white">Добавить каталог</Text>
            </Clickable>
        </Base>
    );
};
