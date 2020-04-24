import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import axios from 'axios';

// Endpoint
import ENDPOINT from '../util/endpoint';

export default () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onAuthenticate = () => {
    if (isLogin) {
      try {
        axios.post(`${ENDPOINT}/auth/login`, { email, password });
      } catch (err) {
        throw new Error(err);
      }
    } else {
      try {
        axios.post(`${ENDPOINT}/auth/signup`, {
          email,
          password,
          confirmPassword,
        });
      } catch (err) {
        throw new Error(err);
      }
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
          placeholder='Enter password'
        />
        {!isLogin ? (
          <TextInput
            autoCapitalize='none'
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            placeholder='Confirm Password'
          />
        ) : null}
        <Button
          title={`${isLogin ? 'Login' : 'Register'}`}
          onPress={onAuthenticate}
        />
      </View>
      <Button
        title='Switch Authentication'
        onPress={() => setIsLogin(!isLogin)}
      />
    </>
  );
};
