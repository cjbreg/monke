import {Divider, HStack, ScrollView, VStack} from '@gluestack-ui/themed';
import Button from '../../ui/atoms/Button';
import ButtonExample from '../../components/ButtonExample';
import {CheckIcon} from '../../components/Icon';
import ColoredRefreshControl from '../../components/layout/ColoredRefreshControl';
import GymCard from '../../components/gym/GymCard';
import LoadingView from '../../components/layout/LoadingView';
import NotFoundScreen from './NotFoundScreen';
import OpeningHours from '../../components/gym/OpeningHours';
import {useGym} from '../../providers/gym/GymProvider';


export default function GymScreen() {
    const {gym, isLoading, isUpdating, refreshGym} = useGym();


    if (!gym) {
        return (
            <LoadingView
                isLoading={isLoading}
            >
                <NotFoundScreen/>
            </LoadingView>
        );
    }

    return (
        <LoadingView
            isLoading={isLoading}
            px={0}
            py={0}
        >
            <ScrollView
                px='$6'
                py='$4'
                refreshControl={
                    <ColoredRefreshControl
                        refreshing={isUpdating}
                        onRefresh={() => {
                            refreshGym();
                        }}
                    />
                }
                // eslint-disable-next-line react-native/no-inline-styles
                contentContainerStyle={{flexGrow: 1}}
            >
                <VStack
                    flex={1}
                    gap='$4'
                >
                    <GymCard gym={gym}>
                        <GymCard.Header>
                            <GymCard.Title />

                            <GymCard.Logo />
                        </GymCard.Header>
                    </GymCard>

                    <Divider
                        bgColor='$coffee'
                        w='75%'
                    />

                    <OpeningHours
                        hours={gym.opening_hours}
                    />
                </VStack>

                <HStack justifyContent='space-between'>
                    <ButtonExample />

                    <Button
                        action='secondary'
                        gap='$2'
                        onPress={() => {
                            console.log('pressed');
                        }}
                    >
                        <Button.Text>
                            Second
                        </Button.Text>

                        <Button.Icon as={CheckIcon} size='xl' />

                    </Button>

                </HStack>
            </ScrollView>
        </LoadingView>

    );
}
