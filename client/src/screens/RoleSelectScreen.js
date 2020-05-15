/**
 * @file The initial screen where the user picks their role
 */

// Dependencies
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
// import { Block, Text, Button } from 'galio-framework';
import { Container, Header, Content, Text, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
// Components
import { ScreenWrapper } from '../components/ScreenWrapper';
import { CustomButton } from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

export default () => {
  const navigation = useNavigation();
  return (
    <ScreenWrapper>
      <Container>
        <Grid>
          <Row size={25} style={{ backgroundColor: '#1C365D' }}></Row>
          <Row size={35}>
            <Container style={{ backgroundColor: '#1C365D' }}>
              <Text style={styles.title}>Voice</Text>
              <Text style={styles.subtitle}>Select your role</Text>
            </Container>
          </Row>
          <Row size={40} style={{ backgroundColor: '#1C365D' }}>
            <Content>
              <Button
                large
                style={styles.buttons}
                block
                onPress={() => navigation.navigate('Student Authentication')}>
                <Text style={styles.buttonText}>Student</Text>
              </Button>
              <Button
                large
                style={styles.buttons}
                block
                onPress={() => navigation.navigate('Teacher Authentication')}>
                <Text style={styles.buttonText}>Teacher</Text>
              </Button>
            </Content>
          </Row>
        </Grid>
      </Container>
    </ScreenWrapper>
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
});
