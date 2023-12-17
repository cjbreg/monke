import {Box, FlatList} from '@gluestack-ui/themed';
import {GymPreview} from '@cjbreg/toplogger-sdk';
import GymResult from './GymResult';
import {ListRenderItem} from 'react-native';
import LoadingView from '../layout/LoadingView';
import React from 'react';
import useGymsHook from '../../hooks/gyms-hook';

const GymsList = () => {
    const {gyms, isLoading} = useGymsHook();

    const activeGyms = gyms.filter(gym => gym.live === true);
    const sortedGyms = activeGyms.sort((a, b) => a.name.localeCompare(b.name));

    const _renderItems: ListRenderItem<GymPreview> = ({item}) => <GymResult gym={item} />;
    const _renderSeparator = () => <Box p='$2' />;

    return (
        <LoadingView
            isLoading={isLoading}
        >
            <FlatList
                showsVerticalScrollIndicator={false}
                data={sortedGyms}
                renderItem={_renderItems}
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={_renderSeparator}
            />
        </LoadingView>
    );
};

export default GymsList;
