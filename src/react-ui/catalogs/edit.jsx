import React from 'react';

import { Base, Text, Clickable } from 'libs/atoms';

export default ({ router }) => {
    const { mode, id } = router.params;

    const save = React.useCallback(() => {
        console.log('save')
    }, []);

    return (
        <Base p="32px">
            <Text mb="12px" size="32px" weight="600">
                {{ new: 'Создание', edit: 'Редактирование'}[mode]} каталога
            </Text>

            <Text mb="24px" size="16px" weight="400">
                Укажите название каталога и корневую папку.
            </Text>

            <Clickable onClick={save} background="#006699" p="6px 10px" radius="4px">
                <Text size="14px" weight="600" color="white">Сохранить</Text>
            </Clickable>
        </Base>
    );
};
