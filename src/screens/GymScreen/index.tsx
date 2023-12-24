import {Divider, VStack} from '@gluestack-ui/themed';
import Header from '../../components/gym/Header';
import LoadingView from '../../components/layout/LoadingView';
import NotFoundScreen from './NotFoundScreen';
import OpeningHours from '../../components/gym/OpeningHours';
import {useGym} from '../../providers/gym/GymProvider';


export default function GymScreen() {
    const {gym, isLoading} = useGym();
    if (!gym) {
        return <NotFoundScreen/>;
    }

    return (
        <LoadingView
            isLoading={isLoading}
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
        </LoadingView>
    );
}
