import {Divider, ScrollView, VStack} from '@gluestack-ui/themed';
import Header from '../../components/gym/Header';
import LoadingView from '../../components/layout/LoadingView';
import NotFoundScreen from './NotFoundScreen';
import OpeningHours from '../../components/gym/OpeningHours';
import {RefreshControl} from 'react-native';
import {useGym} from '../../providers/gym/GymProvider';


export default function GymScreen() {
    const {gym, isLoading, isUpdating, refreshGym} = useGym();
    if (!gym) {
        return <NotFoundScreen/>;
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
                    <RefreshControl
                        refreshing={isUpdating}
                        onRefresh={() => {
                            refreshGym();
                        }}
                    />
                }
            >
                <VStack
                    flex={1}
                >
                    <Header gym={gym} />

                    <Divider
                        my='$4'
                        bgColor='$coffee'
                        w='75%'
                    />

                    <OpeningHours
                        hours={gym.opening_hours}
                    />

                </VStack>
            </ScrollView>
        </LoadingView>

    );
}
