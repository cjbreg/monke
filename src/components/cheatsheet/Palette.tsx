import {Box, HStack, Heading, Text} from '@gluestack-ui/themed';
import React from 'react';
import {VStack} from '@gluestack-ui/themed';

interface props {
    colorName: string;
    title?: string;
}

const ColoredBox = (props: props) => {
    const {colorName, title} = props;

    const bgColor = `$${colorName}`;
    const bgColorSecondary = `$${colorName}Secondary`;
    const bgColorTertiary = `$${colorName}Tertiary`;

    return (
        <VStack flex={1}>
            <VStack
                justifyContent='space-between'
                h={200}
                bgColor={bgColor}
            >
                <Heading>{title}</Heading>

                <Text>Primary</Text>
            </VStack>

            <VStack
                h={70}
                bgColor={bgColorSecondary}
                justifyContent='flex-end'
            >
                <Text>Secondary</Text>
            </VStack>

            <VStack
                h={70}
                bgColor={bgColorTertiary}
                justifyContent='flex-end'
            >
                <Text>Tertiary</Text>
            </VStack>
        </VStack>
    );
};

const Palette = () => {
    return (
        <Box
            flex={1}
            w='100%'
        >
            <HStack
                flex={1}
                justifyContent='space-evenly'
            >
                <ColoredBox colorName='latteFoam' title='Latte Foam' />

                <ColoredBox colorName='parchment' title='Parchment' />

                <ColoredBox colorName='pastelRed' title='Pastel Red' />

                <ColoredBox colorName='coffee' title='Coffee' />

                <ColoredBox colorName='olive' title='Olive' />
            </HStack>
        </Box>
    );
};

export default Palette;
