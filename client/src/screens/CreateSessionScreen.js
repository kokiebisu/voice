/**
 * @file Screen where teachers can create a session with the course name
 */

/**
 * Dependencies
 */
import React, { useState } from 'react';
import {View, Text, TextInput, Button, StyleSheet, ImageBackground, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  textinput: {
    position: 'absolute',
    width: 293,
    height: 300,
    left: -50,
    top: -200,
    fontSize: 30
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    position: 'absolute',
    top: 109,
  },
});
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
      <View>
        <TextInput style={styles.textinput}
          placeholder='Enter the Course Name'
          value={course}
          onChangeText={(text) => setCourse(text)}
        />
        <Button
          title='Create Session'
          onPress={() => navigation.navigate('Teacher Session', { course })}
        />
      </View>
    </ImageBackground>
    </>
  );
};
