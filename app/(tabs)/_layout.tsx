import {Icon, Pressable, SearchIcon, useToken} from '@gluestack-ui/themed';
import {Link, Tabs} from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {useColorScheme} from 'react-native';


/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
    return <FontAwesome size={28} {...props} />;
}

export default function TabLayout() {
    const colorMode = useColorScheme();

    const activeColor = useToken('colors', colorMode === 'light' ? 'pastelRedTertiary' : 'parchmentTertiary') ;
    const tabBarColor = useToken('colors', colorMode === 'light' ? 'latteFoam' : 'coffeeQuaternary');
    const tabBarInactiveColor = useToken('colors', colorMode === 'light' ? 'olive' : 'latteFoamTertiary');
    const borderColor = useToken('colors', colorMode === 'light' ? 'latteFoamTertiary' : 'olive');
    const headingColor = useToken('colors', colorMode === 'light' ? 'textLight900' : 'latteFoam');

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: activeColor,
                tabBarInactiveTintColor: tabBarInactiveColor,
                tabBarStyle: {
                    backgroundColor: tabBarColor,
                    borderTopColor: borderColor,
                    borderTopWidth: 1,
                },
                headerStyle: {
                    backgroundColor: tabBarColor,
                    borderBottomColor: borderColor,
                    borderBottomWidth: 1,
                },
                headerTintColor: headingColor,
                tabBarShowLabel: false,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({color, focused}) => <TabBarIcon name={focused ? 'circle' : 'circle-o'} color={color} />,
                    headerRight: () => (
                        <Link href="/search" asChild>
                            <Pressable
                                px='$4'
                            >
                                {() => (
                                    <Icon
                                        as={SearchIcon}
                                        size='lg'
                                        color='$pastelRedTertiary'
                                        $dark-color='$parchmentTertiary'
                                    />
                                )}
                            </Pressable>
                        </Link>
                    ),
                }}
            />

            <Tabs.Screen
                name="two"
                options={{
                    tabBarIcon: ({color, focused}) => <TabBarIcon name={focused ? 'circle' : 'circle-o'} color={color} />,
                }}
            />
        </Tabs>
    );
}
