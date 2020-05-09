/**
 * @file Screen where students authenticate based on the session id
 */

/**
 * Dependencies
 */
import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';

/**
 * Components
 */
import { ScreenWrapper } from '../components/ScreenWrapper';
import { CustomButton } from '../components/CustomButton';
import { Input } from '../components/Input';

export default () => {
  /**
   * States
   */
  const [session, setSession] = useState('');

  return (
    <>
      <ScreenWrapper>
        <Image source={require('../img/Voice.png')} style={styles.logo}></Image>
        <View style={styles.inputWrapper}>
          <Input
            placeholder='Enter the session id'
            type={(text) => setSession(text)}
            course={session}
            autoCapitalize={false}
            autoCorrect={false}
            trim={true}
          />
        </View>
        <View>
          <CustomButton name='Enter' screen='Student Session' data={session} />
        </View>
      </ScreenWrapper>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputWrapper: {
    marginBottom: 50,
  },
  logo: {
    position: 'absolute',
    top: 109,
  },
});
