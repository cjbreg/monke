import {HStack} from '@gluestack-ui/themed';
import React from 'react';
import {useGymCardContext} from './GymCardContext';


type Props = {
    children: React.ReactNode
}

const GymCardHeader = ({children}: Props) => {
    useGymCardContext();

    return (
        <HStack
            justifyContent='space-between'
            alignItems='center'
        >
            {children}
        </HStack>
    );
};

export default React.memo(GymCardHeader);

