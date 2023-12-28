import {Box, Divider, HStack, Heading, Text, VStack} from '@gluestack-ui/themed';
import {Gym, GymPreview} from '@cjbreg/toplogger-sdk';
import {CheckIcon} from '../Icon';
import GymLogo from '../GymLogo';
import React from 'react';
import {TouchableOpacity} from 'react-native';

interface GymResultProps {
    gym: GymPreview | Gym;
    onPress: () => void;
    activeGymId: number | undefined;
}

const GymResult = (props: GymResultProps) => {
    const {gym, onPress, activeGymId} = props;

    const isActive = gym.id === activeGymId;

    return (
        <TouchableOpacity onPress={onPress}>
            <HStack
                space='md'
            >
                <Box>
                    <GymLogo
                        gym={gym}
                        height={50}
                        width={50}
                    />
                </Box>

                <Divider
                    orientation="vertical"
                    bgColor='$coffee'
                    $dark-bgColor='$olive'
                />

                <HStack flex={1} alignItems='center'>
                    <VStack flex={1}>
                        <Heading>
                            {gym.name}
                        </Heading>

                        <Text>
                            {gym.city}
                        </Text>
                    </VStack>

                    {isActive &&
                        <CheckIcon
                            size='2xl'
                            color='$pastelRedTertiary'
                            $dark-color='$parchmentTertiary'
                        />
                    }
                </HStack>
            </HStack>
        </TouchableOpacity>
    );
};

export default React.memo(GymResult);
