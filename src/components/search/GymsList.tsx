import {Box, Divider, Input, InputField} from '@gluestack-ui/themed';
import {FlashList, ListRenderItem} from '@shopify/flash-list';
import React, {useCallback, useMemo, useState} from 'react';
import ColoredRefreshControl from '../layout/ColoredRefreshControl';
import FuzzySearch from 'fuzzy-search';
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
    const [searchQuery, setSearchQuery] = useState<string | null>('' as string);
    const {onDismiss} = props;

    const activeGyms = useMemo(() => gyms.filter(gym => gym.live === true), [gyms]);
    const sortedGyms = useMemo(() => activeGyms.sort((a, b) => a.name.localeCompare(b.name)), [activeGyms]);

    const searcher = useMemo(() => new FuzzySearch(sortedGyms, ['name', 'city'], {
        sort: true,
    }), [sortedGyms]);

    const searchedGyms = useMemo(() => {
        if (searchQuery) {
            return searcher.search(searchQuery);
        }
        return sortedGyms;
    }, [searcher, searchQuery, sortedGyms]);

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
            pt={0}
        >
            <Box flex={1} gap="$4" >
                <Input >
                    <InputField placeholder="Search for a gym"
                        onChangeText={(text) => {
                            setSearchQuery(text);
                        }}
                    />
                </Input>

                <FlashList
                    showsVerticalScrollIndicator={false}
                    data={searchedGyms}
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
            </Box>
        </LoadingView>
    );
};

export default GymsList;
