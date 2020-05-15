/**
 * @file Screen where students authenticate based on the session id
 */

/**
 * Dependencies
 */
import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
  Container,
  Header,
  Content,
  Text,
  Button,
  TextInput,
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
/**
 * Components
 */
import { ScreenWrapper } from '../components/ScreenWrapper';
import { CustomButton } from '../components/CustomButton';
import { CustomInput } from '../components/Input';
import { useNavigation } from '@react-navigation/native';

export default () => {
  /**
   * States
   */
  const [session, setSession] = useState('');
  const navigation = useNavigation();
  return (
    <>
      <ScreenWrapper>
        <Container>
          <Grid>
            <Row size={15} style={{ backgroundColor: '#1C365D' }} />
            <Row size={35}>
              <Container
                style={{
                  backgroundColor: '#1C365D',
                }}>
                <Text style={styles.title}>Learn something new today</Text>
              </Container>
            </Row>
            <Row size={20}>
              <Container style={styles.inputWrapper}>
                <CustomInput
                  placeholder='Session ID'
                  type={(text) => setSession(text)}
                  course={session}
                  autoCapitalize='none'
                  autoCorrect={false}
                  trim={true}
                />
              </Container>
            </Row>
            <Row size={25} style={{ backgroundColor: '#1C365D' }}>
              <Content>
                <CustomButton
                  name='ENTER'
                  screen='Student Session'
                  data={session}
                />
              </Content>
            </Row>
          </Grid>
        </Container>
      </ScreenWrapper>
    </>
  );
};

const styles = StyleSheet.create({
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
});
