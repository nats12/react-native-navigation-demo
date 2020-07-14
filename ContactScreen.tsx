import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { DetailsScreen } from './DetailsScreen';
import { ContactAScreen } from './ContactAScreen';
import { ContactBScreen } from './ContactBScreen';

export function ContactScreen(props: any) {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Contact A"
                component={ContactAScreen} />
            <Stack.Screen
                name="Contact B"
                component={ContactBScreen} />
        </Stack.Navigator>
    );
}