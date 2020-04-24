import React from 'react';
import * as firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import RoleSelectScreen from './src/screens/RoleSelectScreen';
import StudentAuthenticationScreen from './src/screens/StudentAuthenticationScreen';
import StudentSessionScreen from './src/screens/StudentSessionScreen';
import TeacherAuthenticationScreen from './src/screens/TeacherAuthenticationScreen';
import CreateSessionScreen from './src/screens/CreateSessionScreen';
import TeacherSessionScreen from './src/screens/TeacherSessionScreen';

// Firebase configuration
var config = {
  apiKey: '',
  authDomain: '',
  databaseURL: 'https://voice-3cf58.firebaseio.com/',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
};

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
          name='Teacher Create Session'
          component={CreateSessionScreen}
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
