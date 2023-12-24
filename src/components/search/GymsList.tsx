import {FlashList, ListRenderItem} from '@shopify/flash-list';
import {Box} from '@gluestack-ui/themed';
import {GymPreview} from '@cjbreg/toplogger-sdk';
import GymResult from './GymResult';
import LoadingView from '../layout/LoadingView';
import React from 'react';
import {useGym} from '../../providers/gym/GymProvider';
import useGymsHook from '../../hooks/gyms-hook';

interface GymListProps {
    onDismiss: () => void;
}

const GymsList = (props: GymListProps) => {
    const {gyms, isLoading} = useGymsHook();
    const {setGymId} = useGym();

    const {onDismiss} = props;


    const activeGyms = gyms.filter(gym => gym.live === true);
    const sortedGyms = activeGyms.sort((a, b) => a.name.localeCompare(b.name));

    const handleSelectGym = (gymId: number) => {
        onDismiss();
        setGymId(gymId);
    };

    const _renderItems: ListRenderItem<GymPreview> = ({item}) =>
        <GymResult
            gym={item}
            onPress={()=>handleSelectGym(item.id)}
        />;
    const _renderSeparator = () => <Box p='$2' />;

    return (
        <LoadingView
            isLoading={isLoading}
            px={0}
        >
            <FlashList
                showsVerticalScrollIndicator={false}
                data={sortedGyms}
                renderItem={_renderItems}
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={_renderSeparator}
                estimatedItemSize={67}
            />
        </LoadingView>
    );
};

export default GymsList;
