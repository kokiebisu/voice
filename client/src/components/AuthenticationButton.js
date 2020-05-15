import React from 'react';
import { StyleSheet, AsyncStorage, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import ENDPOINT from '../util/endpoint';
import { Button, Text } from 'native-base';

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
    <Button
      large
      style={styles.buttons}
      block
      onPress={() => authenticate(title)}>
      <Text>{title}</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  buttons: {
    marginVertical: 10,
    backgroundColor: '#DD6B4D',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
