import {Box, HStack, Heading, VStack} from '@gluestack-ui/themed';
import GymsList from '../src/components/search/GymsList';
import LoadingView from '../src/components/layout/LoadingView';
import {Platform} from 'react-native';
import {StatusBar} from 'expo-status-bar';

export default function ModalScreen() {
    return (
        <LoadingView
            isLoading={false}
        >
            <Box flex={1}>
                <VStack
                    flex={1}
                >
                    <HStack
                        justifyContent="center"
                    >
                        <Heading>
                            Search
                        </Heading>
                    </HStack>
                </VStack>

                <GymsList/>

                <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
            </Box>
        </LoadingView>
    );
}
