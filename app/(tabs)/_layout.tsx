import {Link, Tabs} from 'expo-router';
import {Pressable, useColorScheme} from 'react-native';
import Colors from '../../constants/Colors';
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
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Tab One',
                    tabBarIcon: ({color}) => <TabBarIcon name="code" color={color} />,
                    headerRight: () => (
                        <Link href="/modal" asChild>
                            <Pressable>
                                {() => (
                                    <FontAwesome
                                        name="info-circle"
                                        size={25}
                                        color={Colors[colorScheme ?? 'light'].text}
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
