/**
 * @file Screen where teachers can either register or login to their account
 */

// Dependencies
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

/**
 * Components
 */
import { CustomInput } from '../components/Input';
import { AuthenticationButton } from '../components/AuthenticationButton';
import { Grid, Row } from 'react-native-easy-grid';
import { Container, Header, Content, Button, Text } from 'native-base';
import { CustomButton } from '../components/CustomButton';

export default () => {
  // Used to navigate between screens
  // States
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <>
      <Grid>
        <Row size={20} style={{ backgroundColor: '#1C365D' }}>
          <Text style={styles.title}>{isLogin ? 'Login' : 'Register'}</Text>
        </Row>
        <Row size={30} style={{ backgroundColor: '#1C365D' }}>
          <CustomInput
            placeholder='Enter email'
            type={(text) => setEmail(text)}
            value={email}
            autoCapitalize='none'
            autoCorrect={false}
            trim={true}
          />
        </Row>
        <Row size={30} style={{ backgroundColor: '#1C365D' }}>
          <CustomInput
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
              <AuthenticationButton
                style={styles.buttons}
                title='Login'
                email={email}
                password={password}
              />
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
        <Row>
          <Container>
            <Button
              title='Switch Authentication'
              onPress={() => setIsLogin(!isLogin)}
            />
          </Container>
        </Row>
      </Grid>
    </>
  );
};

const styles = {
  title: {
    fontSize: 42,
    color: 'white',
  },
  buttons: {
    marginVertical: 10,
    backgroundColor: '#DD6B4D',
  },
  buttonText: {
    fontSize: 14,
  },
  inputWrapper: {
    backgroundColor: '#1C365D',
  },
};
