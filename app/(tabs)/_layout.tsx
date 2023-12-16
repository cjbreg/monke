import {Link, Tabs} from 'expo-router';
import {Pressable, useToken} from '@gluestack-ui/themed';
import FontAwesome from '@expo/vector-icons/FontAwesome';


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
    const activeColor = useToken('colors', 'pastelRedTertiary');
    const tabBarColor = useToken('colors', 'latteFoamSecondary');
    const tabBarInactiveColor = useToken('colors', 'olive');

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: activeColor,
                tabBarInactiveTintColor: tabBarInactiveColor,
                tabBarStyle: {
                    backgroundColor: tabBarColor,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                headerShadowVisible: false,
                headerStyle: {
                    backgroundColor: tabBarColor,
                },
                tabBarShowLabel: false,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({color}) => <TabBarIcon name="circle-o" color={color} />,
                    headerRight: () => (
                        <Link href="/modal" asChild>
                            <Pressable
                                px='$4'
                            >
                                {() => (
                                    <FontAwesome
                                        name="search"
                                        size={24}
                                        color={activeColor}
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
                    tabBarIcon: ({color}) => <TabBarIcon name="circle" color={color} />,
                }}
            />
        </Tabs>
    );
}
