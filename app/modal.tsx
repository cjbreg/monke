import {Heading, VStack} from '@gluestack-ui/themed';
import Palette from '../src/components/cheatsheet/Palette';
import {Platform} from 'react-native';
import {StatusBar} from 'expo-status-bar';

export default function ModalScreen() {
    return (
        <VStack
            flex={1}
            alignItems='center'
            justifyContent='center'
            space='xl'
        >
            <Heading>Color Palette</Heading>

            <Palette />

            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </VStack>
    );
}
