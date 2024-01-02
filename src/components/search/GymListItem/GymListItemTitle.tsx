import {Heading} from '@gluestack-ui/themed';
import React from 'react';
import {useGymListItemContext} from './GymPreviewContext';

const GymListItemTitle = () => {
    const {gymPreview} = useGymListItemContext();

    return (
        <Heading>
            {gymPreview.name}
        </Heading>
    );
};

export default GymListItemTitle;
