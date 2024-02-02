import {Box, Heading, Text} from '@gluestack-ui/themed';
import {useEffect, useState} from 'react';
import {DeviceMotion} from 'expo-sensors';

export default function TabThreeScreen() {
    const [subscription, setSubscription] = useState(null);

    const [rotation, setRotation] = useState({
        alpha: 0,
        beta: 0,
        gamma: 0,
    });

    const _subscribe = () => {
        setSubscription(
            DeviceMotion.addListener(event => {
                setRotation(event.rotation);
            }),
        );
    };

    const _unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
    };

    useEffect(() => {
        _subscribe();
        return () => _unsubscribe();
    }, []);

    return (
        <Box
            flex={1}
            alignItems="center"
            justifyContent="center"
            bgColor="$latteFoam"
            $dark-bg="$coffeeQuaternary"
        >
            <Heading>rotation:</Heading>

            <Text>alpha: {rotation.alpha.toFixed(2)}</Text>

            <Text>beta: {rotation.beta.toFixed(2)}</Text>

            <Text>gamma: {rotation.gamma.toFixed(2)}</Text>

        </Box>
    );
}

