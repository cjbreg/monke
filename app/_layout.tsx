import {SplashScreen, Stack} from 'expo-router';
import {Box} from '@gluestack-ui/themed';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Provider from '../src/providers';
import {useColorScheme} from 'react-native';
import {useEffect} from 'react';
import {useFonts} from 'expo-font';

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
    // Ensure that reloading on `/modal` keeps a back button present.
    initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
        ...FontAwesome.font,
    });

    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    useEffect(() => {
        if (error) {
            throw error;
        }
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return <RootLayoutNav />;
}

function RootLayoutNav() {
    const colorMode = useColorScheme();

    const headerBarColor = colorMode === 'light' ? '#F2EFE9' : '#2C0F0B'; // Weirdly Modal doesn't inherit the colors from useToken
    const headerTitleColor = colorMode === 'light' ? '#262626' : '#F2EFE9';

    return (
        <Provider>
            <Box
                flex={1}
                bgColor="latteFoam"
                $dark-bg="$coffeeQuaternary"
            >
                <Stack
                    screenOptions={{
                        headerTintColor: headerBarColor,
                        headerShadowVisible: false,
                        navigationBarColor: headerBarColor,
                        headerStyle: {
                            backgroundColor: headerBarColor,
                        },
                    }}
                >
                    <Stack.Screen name="(tabs)" options={{headerShown: false}} />

                    <Stack.Screen
                        name="search"
                        options={{
                            presentation: 'modal',
                            headerShown: true,
                            headerTintColor: headerTitleColor,
                            headerStyle: {
                                backgroundColor: headerBarColor,
                            },
                        }}
                    />
                </Stack>

            </Box>
        </Provider>
    );
}
