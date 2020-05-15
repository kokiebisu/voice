/**
 * @file The initial screen where the user picks their role
 */

// Dependencies
import React from 'react';
import { StyleSheet } from 'react-native';
// import { Block, Text, Button } from 'galio-framework';
import { Container, Content, Text, Button } from 'native-base';
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
          <Row size={15} style={{ backgroundColor: '#1C365D' }}></Row>
          <Row size={45}>
            <Container style={{ backgroundColor: '#1C365D' }}>
              <Text style={styles.title}>Voice</Text>
            </Container>
          </Row>
          <Row size={40} style={{ backgroundColor: '#1C365D' }}>
            <Content>
              <CustomButton
                name='Student'
                press={() => navigation.navigate('Student Authentication')}
              />
              <CustomButton
                name='Teacher'
                press={() => navigation.navigate('Teacher Authentication')}
              />
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
