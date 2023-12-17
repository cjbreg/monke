import {Box, Divider, HStack, Heading, Text, VStack} from '@gluestack-ui/themed';
import GymLogo from '../../src/components/GymLogo';
import LoadingView from '../../src/components/layout/LoadingView';
import {useGym} from '../../src/providers/gym/GymProvider';

export default function TabOneScreen() {
    const {gym, isLoading} = useGym();

    return (
        <LoadingView
            isLoading={isLoading}
        >
            <VStack
                flex={1}
                justifyContent='space-between'
            >
                <Box>
                    <HStack>
                        <VStack flex={1} w="75%">
                            <Heading>{gym?.name}</Heading>

                            <Text>{gym?.nr_of_boulders} boulders</Text>
                        </VStack>

                        {gym &&
                            <GymLogo
                                gym={gym}
                            />
                        }
                    </HStack>

                    <Divider
                        my='$4'
                        bgColor='$coffee'
                        w='75%'
                    />
                </Box>
            </VStack>
        </LoadingView>
    );
}
