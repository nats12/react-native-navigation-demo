import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from './HomeScreen';
import { DetailsScreen } from './DetailsScreen';
import { ContactScreen } from './ContactScreen';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="Home">
				<Drawer.Screen name="Home" component={HomeScreen} />
				<Drawer.Screen name="Details" component={DetailsScreen} />
				<Drawer.Screen name="Contact" component={ContactScreen} />
			</Drawer.Navigator>
		</NavigationContainer>

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
