import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainScreen } from './MainScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Root from './Roots';


const Stack = createStackNavigator();


export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={MainScreen} />
				<Stack.Screen name="Root" component={Root} />
			</Stack.Navigator>
		</NavigationContainer>

	);
}


