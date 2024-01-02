import {Divider, ScrollView, VStack} from '@gluestack-ui/themed';
import ButtonExample from '../../components/ButtonExample';
import ColoredRefreshControl from '../../components/layout/ColoredRefreshControl';
import Header from '../../components/gym/Header';
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
                    <Header gym={gym} />

                    <Divider
                        bgColor='$coffee'
                        w='75%'
                    />

                    <OpeningHours
                        hours={gym.opening_hours}
                    />
                </VStack>

                <ButtonExample />
            </ScrollView>
        </LoadingView>

    );
}
