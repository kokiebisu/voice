/**
 * @file The root file that enables transition between screens
 */

/**
 * Dependencies
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';

/**
 * Helper
 */
import { leaveTeacherRoom } from './src/util/helper';
import { leaveStudentRoom } from './src/screens/StudentSessionScreen';

/**
 * Screens
 */
import RoleSelectScreen from './src/screens/RoleSelectScreen';
import StudentAuthenticationScreen from './src/screens/StudentAuthenticationScreen';
import StudentSessionScreen from './src/screens/StudentSessionScreen';
import TeacherAuthenticationScreen from './src/screens/TeacherAuthenticationScreen';
import CreateSessionScreen from './src/screens/CreateSessionScreen';
import TeacherSessionScreen from './src/screens/TeacherSessionScreen';

/**
 * Initializing Stack
 */
const Stack = createStackNavigator();

// Components

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
        <Stack.Screen
          name='Student Session'
          component={StudentSessionScreen}
          options={({ navigation }) => ({
            headerLeft: () => (
              <HeaderBackButton onPress={() => leaveStudentRoom(navigation)} />
            ),
          })}
        />
        <Stack.Screen
          name='Teacher Session'
          component={TeacherSessionScreen}
          options={({ route, navigation }) => ({
            title: route.params.data,
            headerLeft: () => (
              <HeaderBackButton onPress={() => leaveTeacherRoom(navigation)} />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
