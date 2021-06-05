import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tabs1 } from './Tabs1';
import { Tabs2 } from './Tabs2'
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}

            tabBarOptions={{
                activeTintColor: '#5658D6',
                labelStyle: {
                    marginBottom: (Platform.OS === 'ios') ? 12 : 10
                },
                style: {
                    backgroundColor: 'rgba(255,255,255,0.5)',
                    borderWidth: 0,
                    elevation: 0,

                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Tabs1}
                options={{
                    tabBarLabel: "Home!",
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name="list-outline"
                            size={25}
                            color={color}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="SearchScreen"
                component={Tabs2}
                options={{
                    tabBarLabel: "Búsqueda",
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name="search-outline"
                            size={25}
                            color={color}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
}