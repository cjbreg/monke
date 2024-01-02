import GymListItemContext from './GymPreviewContext';
import GymListItemHeading from './GymListItemHeading';
import GymListItemLogo from './GymListItemLogo';
import GymListItemSubtitle from './GymListItemSubtitle';
import GymListItemTitle from './GymListItemTitle';
import {GymPreview} from '@cjbreg/toplogger-sdk';
import {HStack} from '@gluestack-ui/themed';
import React from 'react';
import {TouchableOpacity} from 'react-native';

type Props = {
    gymPreview: GymPreview
    activeGymId?: number
    onPress: () => void
    children: React.ReactNode
}

const GymListItem = ({gymPreview, activeGymId, onPress, children}: Props) => {
    return (
        <GymListItemContext.Provider value={{gymPreview, activeGymId}}>
            <TouchableOpacity onPress={onPress}>
                <HStack
                    gap='$4'
                >
                    {children}
                </HStack>
            </TouchableOpacity>
        </GymListItemContext.Provider>
    );
};

GymListItem.Title = GymListItemTitle;
GymListItem.Subtitle = GymListItemSubtitle;
GymListItem.Logo = GymListItemLogo;
GymListItem.Heading = GymListItemHeading;

export default GymListItem;
