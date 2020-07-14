import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { ContactScreen } from './ContactScreen';

export function DetailsScreen({ route, navigation }: any) {

    return (
        <>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 40 }}>Details Screen</Text>
                <Text style={{ fontSize: 20 }}>Welcome to the Details screen</Text>
            </View>
        </>
    );
}