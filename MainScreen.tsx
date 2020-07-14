import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { DetailsScreen } from './DetailsScreen';
import { ContactScreen } from './ContactScreen';
import { HomeScreen } from './HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';

export function MainScreen(props: any) {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = "ios-home";

                    if(route.name === 'Home') {
                    }
                    else if (route.name === 'Details') {
                        iconName = 'ios-list';
                    } else if (route.name === 'Contact') {
                        iconName = 'ios-call';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                

            })}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Details" component={DetailsScreen} />
            <Tab.Screen name="Contact" component={ContactScreen} />
        </Tab.Navigator>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});