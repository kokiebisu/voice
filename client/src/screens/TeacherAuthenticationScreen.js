/**
 * @file Screen where teachers can either register or login to their account
 */

// Dependencies
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

/**
 * Components
 */
import { ScreenWrapper } from '../components/ScreenWrapper';
import { CustomInput } from '../components/Input';
import { CustomButton } from '../components/CustomButton';
import { AuthenticationButton } from '../components/AuthenticationButton';

import { Grid, Row } from 'react-native-easy-grid';
import { Container, Header, Content, Button, Text } from 'native-base';

export default () => {
  // Used to navigate between screens
  // States
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <>
      <ScreenWrapper>
        <Container>
          <Grid>
            <Row size={15} style={{ backgroundColor: '#1C365D' }} />
            <Row size={20} style={{ backgroundColor: '#1C365D' }}>
              <Text style={styles.title}>{isLogin ? 'Login' : 'Register'}</Text>
            </Row>
            <Row size={40} style={{ backgroundColor: '#1C365D' }}>
              <Container style={styles.inputWrapper}>
                <CustomInput
                  placeholder='Enter email'
                  type={(text) => setEmail(text)}
                  value={email}
                  autoCapitalize='none'
                  autoCorrect={false}
                  trim={true}
                />
                <CustomInput
                  placeholder='Enter password'
                  type={(text) => setPassword(text)}
                  value={password}
                  autoCapitalize='none'
                  autoCorrect={false}
                  trim={true}
                />
                {!isLogin ? (
                  <CustomInput
                    placeholder='Confirm Password'
                    type={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    autoCapitalize='none'
                    autoCorrect={false}
                    trim={true}
                  />
                ) : null}
              </Container>
            </Row>
            <Row size={25} style={{ backgroundColor: '#1C365D' }}>
              <Container style={{ backgroundColor: '#1C365D' }}>
                <Content>
                  {isLogin ? (
                    <AuthenticationButton
                      style={styles.buttons}
                      title='Login'
                      email={email}
                      password={password}
                    />
                  ) : (
                    <AuthenticationButton
                      title='Register'
                      email={email}
                      password={password}
                      confirmPassword={confirmPassword}
                    />
                  )}
                  <CustomButton
                    name='Switch Authentication'
                    press={() => setIsLogin(!isLogin)}
                  />
                </Content>
              </Container>
            </Row>
          </Grid>
        </Container>
      </ScreenWrapper>
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
