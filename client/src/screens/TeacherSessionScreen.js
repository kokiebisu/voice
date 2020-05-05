/**
 * @file Screen where teachers can monitor the feedbacks
 * being sent from the students
 */

/**
 * Dependencies
 */
import React, { useEffect, useState } from 'react';
import {View, Text, Button, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image} from 'react-native';
import io from 'socket.io-client';

/**
 * Helper Method
 */
import { generateSessionId } from '../util/helper';

/**
 * Endpoint
 */
import endpoint from '../util/endpoint';
const styles = StyleSheet.create({
  textbox: {
    position: 'absolute',
    width: 293,
    height: 73,
    left: 10,
    top: 70,
    backgroundColor: '#3C95A8',
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
});

  /**
 * Socket that will be eventually be connected
 */
let socket;
let roomId;

export default () => {
  /**
   * States
   */
  const [sessionId, setSessionId] = useState('');
  const [tooslow, setTooslow] = useState('');

  useEffect(() => {
    socket = io(endpoint);
    roomId = generateSessionId(5);
    setSessionId(roomId);
    socket.emit('createRoom', roomId);
  }, [endpoint]);

  useEffect(() => {
    socket.on('displayFeedbacks', (result) => {
      console.log('result', result[0].feedbacks);
      setTooslow(result[0].feedbacks['too slow']);
      console.log('too slow', tooslow);
    });
  }, [tooslow]);

  const respond = (feedbackName) => {
    socket.emit('respondFeedback', feedbackName, roomId);
  };

  return (
    <View>
      <ImageBackground source={require('../img/images.jpg')} style={styles.container}>
        <Image source ={require('../img/Voice.png')} style={styles.logo}></Image>
      </ImageBackground>
      <Text style={styles.textbox}>SessionID: {sessionId}</Text>
      {tooslow === '' || tooslow === undefined ? null : (
        <TouchableOpacity
          onPress={() => {
            respond('too slow');
            console.log('tooslow', tooslow);
          }}>
          <Text>Too Slow: {tooslow}</Text>
        </TouchableOpacity>
      )}
    </View>

  );
};
