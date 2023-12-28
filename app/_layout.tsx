import {SplashScreen, Stack} from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Provider from '../src/providers';
import useColorMode from '../src/hooks/colorMode-hook';
import {useEffect} from 'react';
import {useFonts} from 'expo-font';
import {useToken} from '@gluestack-style/react';

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
    const {colorMode} = useColorMode();

    const headerColor = useToken('colors', colorMode === 'light' ? 'latteFoamTertiary' : 'olive');

    return (
        <Provider>
            <Stack
                screenOptions={{
                    headerTintColor: headerColor,
                    headerShadowVisible: false,
                    navigationBarColor: headerColor,
                }}
            >
                <Stack.Screen name="(tabs)" options={{headerShown: false}} />

                <Stack.Screen
                    name="search"
                    options={{
                        presentation: 'modal',
                        headerShown: false,
                    }}
                />
            </Stack>
        </Provider>
    );
}
