import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import RoleSelectScreen from './src/screens/RoleSelectScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Role Select'>
        <Stack.Screen name='Role Select' component={RoleSelectScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
