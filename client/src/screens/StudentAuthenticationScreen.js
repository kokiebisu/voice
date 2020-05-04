/**
 * @file Screen where students authenticate based on the session id
 */

/**
 * Dependencies
 */
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Styles
import { styles } from 'react-native';

export default () => {
  /**
   * Used to navigate between the screens
   */
  const navigation = useNavigation();

  /**
   * States
   */
  const [session, setSession] = useState('');

  return (
    <>
      <ImageBackground
        source={require('../img/images.jpg')}
        style={styles.container}>
        <Image source={require('../img/Voice.png')} style={styles.logo}></Image>
        <TextInput
          autoCapitalize={false}
          autoCorrect={false}
          style={styles.textbox}
          placeholder='Enter the session id'
          value={session}
          onChangeText={(text) => {
            setSession(text.trim());
          }}
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            navigation.navigate('Student Session', { sessionId: session });
          }}>
          <Text>Enter</Text>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
};
