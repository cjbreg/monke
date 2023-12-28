import {createStyle} from '@gluestack-style/react';

export const BaseIcon = createStyle({
    color: '$backgroundLight800',
    _dark: {
        color: '$backgroundDark400',
    },
    variants: {
        size: {
            '2xs': {
                h: '$3',
                w: '$3',
                props: {

                    size: 12,
                },
            },
            'xs': {
                h: '$3.5',
                w: '$3.5',
                props: {

                    size: 14,
                },
            },
            'sm': {
                h: '$4',
                w: '$4',
                props: {

                    size: 16,
                },
            },
            'md': {
                h: '$4.5',
                w: '$4.5',
                props: {

                    size: 18,
                },
            },
            'lg': {
                h: '$5',
                w: '$5',
                props: {

                    size: 20,
                },
            },
            'xl': {
                h: '$6',
                w: '$6',
                props: {

                    size: 24,
                },
            },
            '2xl': {
                h: '$7',
                w: '$7',
                props: {

                    size: 28,
                },
            },
            '3xl': {
                h: '$8',
                w: '$8',
                props: {

                    size: 32,
                },
            },
        },
    },
    // defaultProps: {
    //   size: 'md',
    // },
});

export const Icon = createStyle({
    props: {
        size: '2xl',

        fill: 'none',
    },
    color: '$backgroundLight800',
    _dark: {

        color: '$backgroundDark400',
    },
});
