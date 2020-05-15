/**
 * @file Screen where teachers can either register or login to their account
 */

// Dependencies
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Font, AppLoading } from "expo";

/**
 * Components
 */
import { Input } from '../components/Input';
import { AuthenticationButton } from '../components/AuthenticationButton';
import {Grid, Row} from "react-native-easy-grid";
import { Container, Header, Content, Button } from 'native-base';
import {CustomButton} from "../components/CustomButton";
export default () => {
  // Used to navigate between screens

  // States
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // /**
  //  * Sends a login request to server
  //  */
  // const onLogin = async () => {
  //   try {
  //     const response = await axios.post(`${ENDPOINT}/auth/login`, {
  //       email,
  //       password,
  //     });
  //     await AsyncStorage.setItem('AuthToken', response.data.token);
  //     navigation.navigate('Teacher Create Session');
  //   } catch (err) {
  //     Alert.alert(err.response.data.message);
  //     setEmail('');
  //     setPassword('');
  //   }
  // };

  // /**
  //  * Sends a signup request to server
  //  */
  // const onSignup = async () => {
  //   try {
  //     const response = await axios.post(`${ENDPOINT}/auth/signup`, {
  //       email,
  //       password,
  //       confirmPassword,
  //     });
  //     await AsyncStorage.setItem('AuthToken', response.data.token);
  //     navigation.navigate('Teacher Create Session');
  //   } catch (err) {
  //     Alert.alert(err.response.data.message);
  //   }
  // };

  return (
    <>
    <Grid>
        <Row size={20} style={{ backgroundColor: '#1C365D' }}>
        <Text style={styles.title}>{isLogin ? 'Login' : 'Register'}</Text>
        </Row>
        <Row size={30}style={{ backgroundColor: '#1C365D' }}>
          <Input
            placeholder='Enter email'
            type={(text) => setEmail(text)}
            value={email}
            autoCapitalize='none'
            autoCorrect={false}
            trim={true}
          />
        </Row>
      <Row size={30} style={{ backgroundColor: '#1C365D' }}>
          <Input
            placeholder='Enter password'
            type={(text) => setPassword(text)}
            value={password}
            autoCapitalize='none'
            autoCorrect={false}
            trim={true}
          />
      </Row>

        {!isLogin ? (

            <Input
              placeholder='Confirm Password'
              type={(text) => setConfirmPassword(text)}
              value={confirmPassword}
              autoCapitalize='none'
              autoCorrect={false}
              trim={true}
            />


        ) : null}
      <Row size={20} style={{ backgroundColor: '#1C365D' }}>
        {isLogin ? (
          <Content>
            <CustomButton>
            large
            style={styles.buttons}
            block
            title='Login'
            email={email}
            password={password}
            <Text style={styles.buttonText}>Log in</Text>
            </CustomButton>


          </Content>
        ) : (
          <AuthenticationButton
            title='Register'
            email={email}
            password={password}
            confirmPassword={confirmPassword}
          />
        )}
      </Row>
      <View>
        <Button
          title='Switch Authentication'
          onPress={() => setIsLogin(!isLogin)}
        />
      </View>
    </Grid>
    </>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 42,
    color: 'white',
  },
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
    marginTop: 150,
  },
  submitView: {
    marginBottom: 50,
  },
  buttonText: {
    fontSize: 14,
  },
});
