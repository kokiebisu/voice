/**
 * @file Screen where teachers can create a session with the course name
 */

/**
 * Dependencies
 */
import React, { useState } from 'react';
import { StyleSheet, ImageBackground, Image } from 'react-native';

/**
 * Components
 */
import { Input } from '../components/Input';
import { CustomButton } from '../components/CustomButton';

export default () => {
  /**
   * States
   */
  const [course, setCourse] = useState('');
  return (
    <>
      <ImageBackground
        source={require('../img/images.jpg')}
        style={styles.backgroundWrapper}>
        <Image
          source={require('../img/Voice.png')}
          style={styles.appLogo}></Image>
        <Input
          placeholder='Course Name'
          course={course}
          type={(text) => setCourse(text)}
        />
        <CustomButton
          name='Create Session'
          screen='Teacher Session'
          data={course}
        />
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  appLogo: {
    marginBottom: -60,
    marginTop: 15,
  },
});
