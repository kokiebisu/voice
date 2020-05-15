/**
 * @file Screen where teachers can create a session with the course name
 */

/**
 * Dependencies
 */
import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Container, Header, Content, Text, Button, TextInput} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
/**
 * Components
 */
import { Input } from '../components/Input';
import { CustomButton } from '../components/CustomButton';
import { ScreenWrapper } from '../components/ScreenWrapper';
// import TextInput from "react-native-web/dist/exports/TextInput";
import { useNavigation } from '@react-navigation/native';
export default () => {
  /**
   * States
   */
  const [course, setCourse] = useState('');
  const navigation = useNavigation();
  return (
    <>
      <ScreenWrapper>
      <Container>
      <Grid>
      <Row size={25} style={{ backgroundColor: '#1C365D' }}></Row>
       
       <Row size={30}>
           <Container style={{ backgroundColor: '#1C365D' }}>
             <Text style={styles.title}>Teach something new today</Text>
             
           </Container>
         </Row>
         <Row size={25} style={{ backgroundColor: '#1C365D' }}>
          <Content>
            
          <Input 
            placeholder='Course Name'
            value={course}
            type={(text) => setCourse(text)}
          />
          </Content>
          </Row>
        
             <Row size={20} style={{ backgroundColor: '#1C365D' }}>
              <Content>
              <Button
                large
                style={styles.buttons}
                block
                onPress={() => navigation.navigate('Teacher Session')}>
                <Text style={styles.buttonText}>Enter</Text>
              </Button>
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
    elevation: 5
  },
});
