/**
 * @file The initial screen where the user picks their role
 */

// Dependencies
import React from 'react';
import { ImageBackground, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Styles
import { styles } from '../styles/RoleSelectScreen.styles';

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
