import React, {ComponentProps} from 'react';
import GymListItemContext from './GymPreviewContext';
import GymListItemHeading from './GymListItemHeading';
import GymListItemLogo from './GymListItemLogo';
import GymListItemSubtitle from './GymListItemSubtitle';
import GymListItemTitle from './GymListItemTitle';
import {GymPreview} from '@cjbreg/toplogger-sdk';
import {HStack} from '@gluestack-ui/themed';
import {TouchableOpacity} from 'react-native';

type IHStackProps = ComponentProps<typeof HStack>;

type Props = {
    gymPreview: GymPreview
    activeGymId?: number
    onPress: () => void
    children: React.ReactNode
    _style?: IHStackProps
}

const GymListItem = ({gymPreview, activeGymId, onPress, children, _style}: Props) => {
    const stylePropsWithoutRef = _style as Omit<typeof _style, 'ref'>;

    return (
        <GymListItemContext.Provider value={{gymPreview, activeGymId}}>
            <TouchableOpacity onPress={onPress}>
                <HStack
                    gap='$4'
                    {...stylePropsWithoutRef}
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
