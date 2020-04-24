// Dependencies
import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  AsyncStorage,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

// Endpoint
import ENDPOINT from '../util/endpoint';

export default () => {
  const navigation = useNavigation();

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
        <TextInput
          autoCapitalize='none'
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder='Enter email'
        />
        <TextInput
          autoCapitalize='none'
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          placeholder='Enter password'
        />
        {!isLogin ? (
          <TextInput
            secureTextEntry={true}
            autoCapitalize='none'
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            placeholder='Confirm Password'
          />
        ) : null}
        {isLogin ? (
          <Button title='Login' onPress={onLogin} />
        ) : (
          <Button title='Register' onPress={onSignup} />
        )}
      </View>
      <Button
        title='Switch Authentication'
        onPress={() => setIsLogin(!isLogin)}
      />
    </>
  );
};
