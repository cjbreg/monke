import {Link, Tabs} from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Pressable, useToken} from '@gluestack-ui/themed';


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

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: activeColor,
                tabBarStyle: {
                    backgroundColor: tabBarColor,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                headerShadowVisible: false,
                headerStyle: {
                    backgroundColor: tabBarColor,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Tab One',
                    tabBarIcon: ({color}) => <TabBarIcon name="code" color={color} />,
                    headerRight: () => (
                        <Link href="/modal" asChild>
                            <Pressable
                                px='$4'
                            >
                                {() => (
                                    <FontAwesome
                                        name="info-circle"
                                        size={25}
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
                    title: 'Tab Two',
                    tabBarIcon: ({color}) => <TabBarIcon name="code" color={color} />,
                }}
            />
        </Tabs>
    );
}
