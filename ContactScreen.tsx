import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

export function ContactScreen(props: any) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 40 }}>Contact Screen</Text>
            <Text style={{ fontSize: 20 }}>Welcome to the Contact screen</Text>
        </View>
    );
}