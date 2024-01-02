import {Heading, Text, VStack} from '@gluestack-ui/themed';
import React from 'react';
import {useGymCardContext} from './GymCardContext';

const GymCardTitle = () => {
    const {gym} = useGymCardContext();

    return (
        <VStack flex={1} w="75%">
            <Heading>{gym.name}</Heading>

            <Text>{gym.nr_of_boulders} boulders</Text>
        </VStack>
    );
};

export default React.memo(GymCardTitle);
