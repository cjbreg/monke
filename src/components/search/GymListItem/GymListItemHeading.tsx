import {CheckIcon, HStack, VStack} from '@gluestack-ui/themed';
import React from 'react';
import {useGymListItemContext} from './GymPreviewContext';

type Props = {
    children: React.ReactNode
}

const GymListItemHeading = ({children}: Props) => {
    const {gymPreview, activeGymId} = useGymListItemContext();

    const isActive = gymPreview.id === activeGymId;

    return (
        <HStack flex={1} alignItems='center'>
            <VStack flex={1}>
                {children}
            </VStack>

            {isActive &&
                <CheckIcon
                    size='2xl'
                    color='$pastelRedTertiary'
                    $dark-color='$parchmentTertiary'
                />
            }
        </HStack>
    );
};

export default GymListItemHeading;
