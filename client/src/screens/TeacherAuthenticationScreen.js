import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import axios from 'axios';

// Endpoint
import ENDPOINT from '../util/endpoint';

export default () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onAuthenticate = () => {
    try {
      axios.post(`${ENDPOINT}/auth/login`, { email, password });
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <>
      <View>
        <Text>{isLogin ? 'Login' : 'Register'}</Text>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder='Enter email'
        />
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder='Enter password'
        />
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
