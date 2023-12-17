import {Divider, HStack, Heading, VStack, useToken} from '@gluestack-ui/themed';
import {Gym, GymPreview} from '@cjbreg/toplogger-sdk';
import {Text, TouchableOpacity} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import GymLogo from '../GymLogo';
import React from 'react';
import {useGym} from '../../providers/gym/GymProvider';

interface GymResultProps {
    gym: GymPreview | Gym;
}

const GymResult = (props: GymResultProps) => {
    const {gym} = props;
    const {gymId, setGymId} = useGym();

    const activeColor = useToken('colors', 'pastelRedTertiary');

    const isActive = gym.id === gymId;

    const handleSelectGym = () =>{
        setGymId(gym.id);
    };

    return (
        <TouchableOpacity onPress={handleSelectGym}>
            <HStack
                space='md'
            >
                <GymLogo
                    gym={gym}
                    height={50}
                    width={50}
                />

                <Divider
                    orientation="vertical"
                    bgColor='$coffee'
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
