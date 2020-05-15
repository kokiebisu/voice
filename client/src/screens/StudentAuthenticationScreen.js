/**
 * @file Screen where students authenticate based on the session id
 */

/**
 * Dependencies
 */
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text } from 'native-base';
import { Row, Grid } from 'react-native-easy-grid';
/**
 * Components
 */
import { ScreenWrapper } from '../components/ScreenWrapper';
import { CustomButton } from '../components/CustomButton';
import { CustomInput } from '../components/Input';
import { useNavigation } from '@react-navigation/native';

export default () => {
  const navigation = useNavigation();
  /**
   * States
   */
  const [session, setSession] = useState('');

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
                  value={session}
                  autoCapitalize='none'
                  autoCorrect={false}
                  trim={true}
                />
              </Container>
            </Row>
            <Row size={25} style={{ backgroundColor: '#1C365D' }}>
              <Content>
                <CustomButton
                  name='Join Session'
                  press={() => {
                    navigation.navigate('Student Session', {
                      data: session,
                    });
                  }}
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
