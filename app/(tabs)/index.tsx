import {Box, Button, ButtonText, Divider, Heading} from '@gluestack-ui/themed';
import {useGym} from '@providers/gym/GymProvider';

export default function TabOneScreen() {
    const {gym, isLoading, setGymId} = useGym();

    return (
        <Box
            flex={1}
            alignItems="center"
            justifyContent="center"
            bgColor='$latteFoam'
        >
            <Heading>Tab One</Heading>

            <Heading>{gym?.name}</Heading>

            <Heading>{isLoading ? 'Loading' : 'Not Loading'}</Heading>

            <Button
                onPress={() => {
                    setGymId(gym?.id === 6 ? 5 : 6);
                }
                }
            >
                <ButtonText>Switch Gym</ButtonText>
            </Button>


            <Divider
                my='$8'
                bgColor='$primary500'
                w='80%'
            />
        </Box>
    );
}
