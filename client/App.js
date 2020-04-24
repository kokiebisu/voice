import React from 'react';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import RoleSelectScreen from './src/screens/RoleSelectScreen';
import StudentAuthenticationScreen from './src/screens/StudentAuthenticationScreen';
import TeacherAuthenticationScreen from './src/screens/TeacherAuthenticationScreen';
import StudentSessionScreen from './src/screens/StudentSessionScreen';
import TeacherSessionScreen from './src/screens/TeacherSessionScreen';

// Route
import { useRoute } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Role Select'>
        <Stack.Screen name='Role Select' component={RoleSelectScreen} />
        <Stack.Screen
          name='Student Authentication'
          component={StudentAuthenticationScreen}
        />
        <Stack.Screen
          name='Teacher Authentication'
          component={TeacherAuthenticationScreen}
        />
        <Stack.Screen name='Student Session' component={StudentSessionScreen} />
        <Stack.Screen
          name='Teacher Session'
          component={TeacherSessionScreen}
          options={({ route }) => ({ title: route.params.course })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
