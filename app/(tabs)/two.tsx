import * as LocalAuthentication from 'expo-local-authentication';
import {Box, Heading} from '@gluestack-ui/themed';
import {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';



export default function TabTwoScreen() {
    const [isBiometricSupported, setIsBiometricSupported] = useState(false);
    const [fingerprint, setFingerprint] = useState(false);

    useEffect(() => {
        (async() => {
            const compatible = await LocalAuthentication.hasHardwareAsync();
            setIsBiometricSupported(compatible);
            const enroll = await LocalAuthentication.isEnrolledAsync();
            if (enroll) {
                setFingerprint(true);
            }
        })();
    }, []);

    const handle = async() => {
        try {
            const biometricAuth = await LocalAuthentication.authenticateAsync({
                promptMessage: 'Login with Fingerprint',
                disableDeviceFallback: true,
                cancelLabel: 'Cancel',
            });
            if (biometricAuth.success) {
                // router.replace('Home');
                console.log('success');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (

        <Box
            flex={1}
            alignItems="center"
            justifyContent="center"
            bgColor="$latteFoam"
            $dark-bg="$coffeeQuaternary"
        >
            {isBiometricSupported && fingerprint ? (
                <TouchableOpacity onPress={handle}>
                    <Heading>Start fingerprint test</Heading>
                </TouchableOpacity>
            ) : (
                <Box>
                    <Heading>fingerprint not supported/ allocated</Heading>
                </Box>
            )}
        </Box>
    );
}

