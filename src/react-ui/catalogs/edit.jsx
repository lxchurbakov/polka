import React from 'react';

import { Base, Text, Clickable } from 'libs/atoms';
import { LineInput } from 'libs/inputs';

export default ({ router }) => {
    const { mode, id } = router.params;
    const [name, setName] = React.useState('');

    const save = React.useCallback(() => {
        console.log('save')
    }, []);

    return (
        <Base p="32px">
            <Text mb="12px" size="32px" weight="600">
                {{ new: 'Создание', edit: 'Редактирование'}[mode]} каталога
            </Text>

            <Base mb="24px">
                <Text mb="4px" size="16px" weight="400">
                    Укажите название каталога:
                </Text>

                <LineInput placeholder="Название" background="#e0e0e0" value={name} onChange={setName} />
            </Base>

            <Base mb="24px">
                <Text mb="4px" size="16px" weight="400">
                    Укажите корневую папку:
                </Text>

                <LineInput placeholder="Корневая папка" background="#e0e0e0" value={name} onChange={setName} />
            </Base>

            <Clickable onClick={save} background="#006699" p="6px 10px" radius="4px">
                <Text size="14px" weight="600" color="white">Сохранить</Text>
            </Clickable>
        </Base>
    );
};
