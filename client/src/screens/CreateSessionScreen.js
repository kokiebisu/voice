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

export default () => {
  /**
   * States
   */
  const [course, setCourse] = useState('');
  return (
    <>
      <ScreenWrapper>
        <Image source={require('../img/Voice.png')} style={styles.appLogo} />
        <View style={styles.inputWrapper}>
          <Input
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
  },
  inputWrapper: {
    marginBottom: 50,
  },
});
