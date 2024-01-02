import {Box, Divider} from '@gluestack-ui/themed';
import {FlashList, ListRenderItem} from '@shopify/flash-list';
import React, {useCallback, useMemo} from 'react';
import ColoredRefreshControl from '../layout/ColoredRefreshControl';
import GymListItem from './GymListItem';
import {GymPreview} from '@cjbreg/toplogger-sdk';
import LoadingView from '../layout/LoadingView';
import {useGym} from '../../providers/gym/GymProvider';
import useGymsHook from '../../hooks/gyms-hook';

interface GymListProps {
    onDismiss: () => void;
}

const GymsList = (props: GymListProps) => {
    const {gyms, isLoading, isUpdating, refreshGyms} = useGymsHook();
    const {setGymId, gym} = useGym();

    const {onDismiss} = props;


    const activeGyms = useMemo(() => gyms.filter(gym => gym.live === true), [gyms]);
    const sortedGyms = useMemo(() => activeGyms.sort((a, b) => a.name.localeCompare(b.name)), [activeGyms]);

    const handleSelectGym = useCallback((gymId: number) => {
        setGymId(gymId);
        onDismiss();
    }, [setGymId, onDismiss]);

    const _renderItems: ListRenderItem<GymPreview> = useCallback(({item}) =>
        <GymListItem
            gymPreview={item}
            onPress={()=>handleSelectGym(item.id)}
            activeGymId={gym?.id}
        >
            <GymListItem.Logo />

            <Divider
                orientation="vertical"
                bgColor='$coffee'
                $dark-bgColor='$olive'
            />

            <GymListItem.Heading>
                <GymListItem.Title />

                <GymListItem.Subtitle />
            </GymListItem.Heading>
        </GymListItem>
    , [handleSelectGym, gym]);

    const _renderSeparator = useCallback(() => <Box p='$2' />, []);

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
                refreshControl={
                    <ColoredRefreshControl
                        refreshing={isUpdating}
                        onRefresh={() => {
                            refreshGyms();
                        }}
                    />
                }
            />
        </LoadingView>
    );
};

export default GymsList;
