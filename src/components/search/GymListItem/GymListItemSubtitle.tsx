import React from 'react';
import {Text} from '@gluestack-ui/themed';
import {useGymListItemContext} from './GymPreviewContext';

const GymListItemSubtitle = () => {
    const {gymPreview} = useGymListItemContext();

    return (
        <Text>
            {gymPreview.city}
        </Text>
    );
};

export default GymListItemSubtitle;
