/**
 * @file Screen where students authenticate based on the session id
 */

/**
 * Dependencies
 */
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Image, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  textbox: {
    position: 'absolute', 
    width: 293,
    height: 73,
    left: 61,
    top: 410,
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

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo:{
    position: 'absolute', 
    top: 159,
  },

  buttonContainer: {  
    position: 'absolute', 
    width: 293,
    height: 73,
    left: 61,
    top: 559,
    backgroundColor: '#03a5fc',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000000',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,  
    elevation: 5 ,
    alignItems: 'center',
    justifyContent: 'center',
  
  },  

 });
export default () => {
  /**
   * Used to navigate between the screens
   */
  const navigation = useNavigation();

  /**
   * States
   */
  const [session, setSession] = useState('');

  return (
    <>
      <ImageBackground source={require('../img/images.jpg')} style={styles.container}>
        <Image source ={require('../img/Voice.png')} style={styles.logo}></Image>
        <TextInput style={styles.textbox}
          placeholder='Enter the session id'
          value={session}
          onChangeText={(text) => setSession(text)}
        />
        <View style={styles.buttonContainer}>  
        <Button 
          title='Enter' 
          color="black"  
          onPress={() =>
            navigation.navigate('Student Session', { sessionId: session })
          }
        />
        </View>

      </ImageBackground>
    </>
  );
};
