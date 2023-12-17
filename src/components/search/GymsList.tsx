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

    const _renderItems: ListRenderItem<GymPreview> = ({item}) => <GymResult gym={item} />;

    const _renderSeparator = () => <Box p='$2' />;

    return (
        <LoadingView
            isLoading={isLoading}
        >
            <FlatList
                data={activeGyms}
                renderItem={_renderItems}
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={_renderSeparator}
            />
        </LoadingView>
    );
};

export default GymsList;
