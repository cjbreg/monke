import {Box, Heading, Text} from '@gluestack-ui/themed';
import {Link, Stack} from 'expo-router';


export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{title: 'Oops!'}} />

            <Box
                flex={1}
                alignItems='center'
                justifyContent='center'
                padding='$5'
            >
                <Heading>This screen does not exist.</Heading>

                <Box
                    mt='$4'
                    px='$4'
                >
                    <Link href="/">
                        <Text>Go to home screen!</Text>
                    </Link>
                </Box>
            </Box>
        </>
    );
}
