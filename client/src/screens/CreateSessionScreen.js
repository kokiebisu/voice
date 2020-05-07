/**
 * @file Screen where teachers can create a session with the course name
 */

/**
 * Dependencies
 */
import React, { useState } from 'react';
import {View, Text, TextInput, Button, StyleSheet, ImageBackground, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logo: {
    // position: 'absolute',
    // top: 109,
    marginBottom: 200,
    marginTop: 15,
  },
  courseContentContainer: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 20,
    fontSize: 20,
    width: 250,
    height: 300,
    paddingLeft: 20,
  },
  buttonContainer2: {
    // position: 'absolute',
    width: 293,
    height: 73,
    // left: 51,
    // top: 350,
    marginTop: -100,
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
        <TextInput style={styles.courseContentContainer}
          placeholder='Course Name'
          value={course}
          onChangeText={(text) => setCourse(text)}
        />
        <TouchableOpacity
            style={styles.buttonContainer2}

            onPress={() => navigation.navigate('Teacher Create Session')}>
          <Text style={styles.titleText}>Create Session</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
    </>
  );
};
