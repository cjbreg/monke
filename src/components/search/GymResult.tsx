import {Box, Divider, HStack, Heading, Text, VStack, useToken} from '@gluestack-ui/themed';
import {Gym, GymPreview} from '@cjbreg/toplogger-sdk';
import {FontAwesome} from '@expo/vector-icons';
import GymLogo from '../GymLogo';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import useColorMode from '../../hooks/colorMode-hook';

interface GymResultProps {
    gym: GymPreview | Gym;
    onPress: () => void;
    activeGymId: number | undefined;
}

const GymResult = (props: GymResultProps) => {
    const {gym, onPress, activeGymId} = props;
    const {colorMode} = useColorMode();
    const activeColor = useToken('colors', colorMode === 'light' ? 'pastelRedTertiary' : 'parchmentTertiary');

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
                        <FontAwesome
                            name="check"
                            size={24}
                            color={activeColor}
                        />
                    }
                </HStack>
            </HStack>
        </TouchableOpacity>
    );
};

export default React.memo(GymResult);
