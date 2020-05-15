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
              <CustomButton name='Student' screen='Student Authentication' />
              <CustomButton name='Teacher' screen='Teacher Authentication' />
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
});
