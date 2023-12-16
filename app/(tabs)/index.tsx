import {Box, Button, ButtonText, Divider, Heading, Text, VStack} from '@gluestack-ui/themed';
import LoadingView from '@components/layout/LoadingView';
import {useGym} from '@/providers/gym/GymProvider';

export default function TabOneScreen() {
    const {gym, isLoading, setGymId} = useGym();

    return (
        <LoadingView
            isLoading={isLoading}
        >
            <VStack
                flex={1}
                justifyContent='space-between'
            >
                <Box>
                    <Heading>{gym?.name}</Heading>

                    <Text>{gym?.nr_of_boulders} boulders</Text>

                    <Divider
                        my='$4'
                        bgColor='$coffee'
                        w='80%'
                    />
                </Box>

                <Button
                    onPress={() => {
                        setGymId(gym?.id === 6 ? 5 : 6);
                    }}
                >
                    <ButtonText>Switch Gym</ButtonText>
                </Button>
            </VStack>
        </LoadingView>
    );
}
