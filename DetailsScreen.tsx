import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

export function DetailsScreen({ route, navigation }: any) {

    const { userId } = route.params;
    const { userName } = route.params;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>Details Screen</Text>
            {/* <Text style={{ color: '#1ACB97' }}>ID: {userId}</Text> */}
            {/* <Text style={{ color: '#1ACB97' }}>Name: {userName}</Text> */}
            <Button
                title="Go to Details... again"
                onPress={() => navigation.push('Details')}
            />
        </View>
    );
}