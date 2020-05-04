/**
 * @file Screen where teachers can create a session with the course name
 */

/**
 * Dependencies
 */
import React, { useState } from 'react';
import {
  Text,
  TextInput,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Styles
import { styles } from '../styles/CreateSessionScreen.styles';

export default () => {
  /**
   * Used to navigate between the screens
   */
  const navigation = useNavigation();

  /**
   * States
   */
  const [course, setCourse] = useState('');

  return (
    <>
      <ImageBackground
        source={require('../img/images.jpg')}
        style={styles.container}>
        <Image source={require('../img/Voice.png')} style={styles.logo}></Image>
        <TextInput
          style={styles.textbox}
          placeholder='Enter the Course Name'
          value={course}
          onChangeText={(text) => setCourse(text)}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Teacher Session', { course })}>
          <Text>Create Session</Text>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
};
