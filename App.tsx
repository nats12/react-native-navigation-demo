import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './HomeScreen';
import { DetailsScreen } from './DetailsScreen';
import { ContactScreen } from './ContactScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator 
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
					  let iconName= "Home";
		  
					  if (route.name === 'Home') {
						iconName = 'ios-home';
					  } else if (route.name === 'Details') {
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
