/**
 * @file Screen where teachers can create a session with the course name
 */

/**
 * Dependencies
 */
import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';

/**
 * Components
 */
import { Input } from '../components/Input';
import { CustomButton } from '../components/CustomButton';
import { ScreenWrapper } from '../components/ScreenWrapper';
import TextInput from "react-native-web/dist/exports/TextInput";

export default () => {
  /**
   * States
   */
  const [course, setCourse] = useState('');

  return (
    <>
      <ScreenWrapper>
        <Image source={require('../img/teach_today.png')} style={styles.headingImage} />
        <View style={styles.inputWrapper}>
          <Input style={{ height: 40, backgroundColor: 'gray', borderWidth: 1 }}
            placeholder='Course Name'
            value={course}
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
      </ScreenWrapper>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4195a7'

  },
  inputWrapper: {
    marginBottom: 30,
  },
  inputStyle: {
    backgroundColor: '#5b9ead',
    opacity: 0.2
  },
  headingImage: {
    flex: 1,
    width: 320,
    height: 320,
    resizeMode: 'contain',
    marginTop: 150
  }
});
