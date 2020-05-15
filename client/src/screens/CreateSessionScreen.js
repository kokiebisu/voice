/**
 * @file Screen where teachers can create a session with the course name
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
import { CustomInput } from '../components/Input';
import { CustomButton } from '../components/CustomButton';
import { ScreenWrapper } from '../components/ScreenWrapper';
// import TextInput from "react-native-web/dist/exports/TextInput";
import { useNavigation } from '@react-navigation/native';

export default () => {
  const navigation = useNavigation();
  /**
   * States
   */
  const [course, setCourse] = useState('');
  return (
    <>
      <ScreenWrapper>
        <Container>
          <Grid>
            <Row size={15} style={{ backgroundColor: '#1C365D' }} />

            <Row size={40}>
              <Container style={{ backgroundColor: '#1C365D' }}>
                <Text style={styles.title}>Teach something new today</Text>
              </Container>
            </Row>
            <Row size={25} style={{ backgroundColor: '#1C365D' }}>
              <Content>
                <CustomInput
                  placeholder='Course Name'
                  value={course}
                  type={(text) => setCourse(text)}
                />
              </Content>
            </Row>
            <Row size={20} style={{ backgroundColor: '#1C365D' }}>
              <Content>
                <CustomButton
                  name='Create Session'
                  press={() => navigation.navigate('Teacher Session', course)}
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
  subtitle: {
    fontSize: 24,
    color: 'white',
  },
  buttons: {
    marginVertical: 10,
    backgroundColor: '#DD6B4D',
  },
  buttonText: {
    fontSize: 14,
  },
  textbox: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'grey',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
});
