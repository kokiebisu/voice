import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  AsyncStorage,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import ENDPOINT from '../util/endpoint';

export const AuthenticationButton = ({
  title,
  email,
  password,
  confirmPassword,
}) => {
  const navigation = useNavigation();

  const onRegister = async () => {
    try {
      const response = await axios.post(`${ENDPOINT}/auth/signup`, {
        email,
        password,
        confirmPassword,
      });
      await AsyncStorage.setItem('AuthToken', response.data.token);
      navigation.navigate('Teacher Create Session');
      console.log('response', response);
    } catch (err) {
      Alert.alert(err.response.data.message);
    }
  };

  const onLogin = async () => {
    console.log('called login');
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

  const authenticate = (type) => {
    if (type === 'Login') {
      onLogin();
    } else {
      onRegister();
    }
  };

  return (
    <TouchableOpacity onPress={() => authenticate(title)}>
      <View>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
