import {Box, HStack, Heading} from '@gluestack-ui/themed';
import GymsList from '../src/components/search/GymsList';
import LoadingView from '../src/components/layout/LoadingView';
import {Platform} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {router} from 'expo-router';
import {useCallback} from 'react';

export default function ModalScreen() {

    const dismissModal = useCallback(() => {
        router.push('../');
    }, []);

    return (
        <LoadingView
            isLoading={false}
        >
            <Box>
                <HStack
                    justifyContent="center"
                >
                    <Heading>
                            Search
                    </Heading>
                </HStack>

                <GymsList onDismiss={dismissModal} />

                <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
            </Box>
        </LoadingView>
    );
}
