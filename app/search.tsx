import {Box, HStack, Heading} from '@gluestack-ui/themed';
import GymsList from '../src/components/search/GymsList';
import LoadingView from '../src/components/layout/LoadingView';
import {Platform} from 'react-native';
import {StatusBar} from 'expo-status-bar';

export default function ModalScreen() {
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

                <GymsList/>

                <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
            </Box>
        </LoadingView>
    );
}
