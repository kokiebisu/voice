/**
 * @file The initial screen where the user picks their role
 */

// Dependencies
import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    position: 'absolute',
    top: 109,
  },
  role: {
    position: 'absolute',
    top: 249,
  },
  buttonContainer1: {
    position: 'absolute',
    width: 293,
    height: 73,
    left: 51,
    top: 479,
    backgroundColor: '#03a5fc',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000000',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer2: {
    position: 'absolute',
    width: 293,
    height: 73,
    left: 51,
    top: 350,
    backgroundColor: '#03a5fc',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000000',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default () => {
  /**
   * Used to navigate between screens
   */
  const navigation = useNavigation();

  return (
    <>
      <ImageBackground
        source={require('../img/images.jpg')}
        style={styles.container}>
        <Image source={require('../img/Voice.png')} style={styles.logo}></Image>
        <Image source={require('../img/role.png')} style={styles.role}></Image>

        <TouchableOpacity
          style={styles.buttonContainer1}
          onPress={() => navigation.navigate('Student Authentication')}>
          <Text>Student</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer2}
          title='Teacher'
          onPress={() => navigation.navigate('Teacher Create Session')}>
          <Text>Teacher</Text>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
};
