/**
 * @file Screen where teachers can create a session with the course name
 */

/**
 * Dependencies
 */
import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Image } from 'react-native';

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
        <Image source={require('../img/Voice.png')} style={styles.appLogo} />
        <View style={styles.inputWrapper}>
          <Input
            placeholder='Course Name'
            course={course}
            type={(text) => setCourse(text)}
          />
        </View>
        <View>
          <CustomButton
            name='Create Session'
            screen='Teacher Session'
            data={course}
          />
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputWrapper: {
    marginBottom: 50,
  },
});
