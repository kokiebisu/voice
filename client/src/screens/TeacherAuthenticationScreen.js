/**
 * @file Screen where teachers can either register or login to their account
 */

// Dependencies
import React, { useState } from 'react';
import {View, Text, Button, AsyncStorage, Alert, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import ENDPOINT from '../util/endpoint';

/**
 * Components
 */
import { Input } from '../components/Input';
import {CustomButton} from "../components/CustomButton";

export default () => {
  // Used to navigate between screens
  const navigation = useNavigation();

  // States
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  /**
   * Sends a login request to server
   */
  const onLogin = async () => {
    try {
      const response = await axios.post(`${ENDPOINT}/auth/login`, {
        email,
        password,
      });
      await AsyncStorage.setItem('AuthToken', response.data.token);
      navigation.navigate('Teacher Create Session');
    } catch (err) {
      Alert.alert(err.response.data.message);
      setEmail('');
      setPassword('');
    }
  };

  /**
   * Sends a signup request to server
   */
  const onSignup = async () => {
    try {
      const response = await axios.post(`${ENDPOINT}/auth/signup`, {
        email,
        password,
        confirmPassword,
      });
      await AsyncStorage.setItem('AuthToken', response.data.token);
      navigation.navigate('Teacher Create Session');
    } catch (err) {
      Alert.alert(err.response.data.message);
    }
  };

  return (
    <>
      <View>
        <Text>{isLogin ? 'Login' : 'Register'}</Text>
        <View>
          <Input
            placeholder='Enter email'
            type={(text) => setEmail(text)}
            value={email}
            autoCapitalize='none'
            autoCorrect={false}
            trim={true}
          />
        </View>
        <View>
          <Input
            placeholder='Enter password'
            type={(text) => setPassword(text)}
            value={password}
            autoCapitalize='none'
            autoCorrect={false}
            trim={true}
          />
        </View>
        {!isLogin ? (
          <View>
            <Input
              placeholder='Confirm Password'
              type={(text) => setConfirmPassword(text)}
              value={confirmPassword}
              autoCapitalize='none'
              autoCorrect={false}
              trim={true}
            />
          </View>
        ) : null}
        {isLogin ? (
          <View>
            <CustomButton title='Login' onPress={onLogin} />
          </View>
        ) : (
          <View>
            <CustomButton title='Register' onPress={onSignup} />
          </View>
        )}
      </View>
      <View>
        <Button
          title='Switch Authentication'
          onPress={() => setIsLogin(!isLogin)}
        />
      </View>
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
  headingImage: {
    flex: 1,
    resizeMode: 'contain',
    marginTop: 150
  },
  submitView: {
    marginBottom: 50
  }
});
