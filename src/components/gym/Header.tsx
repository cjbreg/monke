
import {HStack, Heading, Text, VStack} from '@gluestack-ui/themed';
import {Gym} from '@cjbreg/toplogger-sdk';
import GymLogo from '../GymLogo';
import React from 'react';

interface HeaderProps {
    gym: Gym;
    }


const Header = (props: HeaderProps) => {
    const {gym} = props;

    return (
        <HStack>
            <VStack flex={1} w="75%">
                <Heading>{gym.name}</Heading>

                <Text>{gym.nr_of_boulders} boulders</Text>
            </VStack>

            {gym &&
        <GymLogo
            gym={gym}
        />
            }
        </HStack>
    );
};

export default React.memo(Header);
