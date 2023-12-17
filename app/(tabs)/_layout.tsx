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
    const tabBarColor = useToken('colors', 'latteFoam');
    const tabBarInactiveColor = useToken('colors', 'olive');
    const borderColor = useToken('colors', 'latteFoamTertiary');

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
                    tabBarIcon: ({color, focused}) => <TabBarIcon name={focused ? 'circle' : 'circle-o'} color={color} />,
                }}
            />
        </Tabs>
    );
}
