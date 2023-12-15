import {createStyle} from '@gluestack-style/react';

export const ActionsheetIcon = createStyle({
    props: {
        size: 'sm',
    },
    color: '$backgroundLight500',
    _dark: {
        color: '$backgroundDark400',
    },
});
