import {Box, Divider, Heading} from '@gluestack-ui/themed';
import EditScreenInfo from '@components/EditScreenInfo';
import {Platform} from 'react-native';
import {StatusBar} from 'expo-status-bar';

export default function ModalScreen() {
    return (
        <Box
            flex={1}
            alignItems='center'
            justifyContent='center'
        >
            <Heading>Modal</Heading>

            <Divider
                my='$8'
                bgColor='$primary500'
                w='80%'
            />

            <EditScreenInfo path="app/modal.tsx" />

            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </Box>
    );
}
