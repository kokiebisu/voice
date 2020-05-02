/**
 * @file Screen where users can send feedbacks to the teacher instantaneously
 */

/**
 * Dependencies
 */
import React, { useState, useEffect } from 'react';
import { Text, View, Alert, Button, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import io from 'socket.io-client';

/**
 * Endpoint for the WebSocket
 */
import ENDPOINT from '../util/endpoint';
// import { TouchableOpacity } from 'react-native-gesture-handler';

let socket;
let roomId;

export default () => {
  /**
   * Used to navigate between the screens
   */
  const navigation = useNavigation();

  /**
   * Used to receive data from other screens
   */
  const route = useRoute();

  /**
   * States
   */
  const [session, setSession] = useState('');
  const [voices, setVoices] = useState([]);

  /**
   * Redirects the student back to the authentication screen when
   * student gets the session id wrong
   */
  const redirectBack = () => {
    navigation.navigate('Student Authentication');
  };

  /**
   * Initial call when the screen is first rendered.
   * Creates a socket when it is successful and it fetches any voices in the room.
   */
  useEffect(() => {
    socket = io(ENDPOINT);
    roomId = route.params.sessionId;
    setSession(roomId);
    socket.emit('joinRoom', roomId, ({ error }) => {
      Alert.alert('Error', error, [
        {
          text: 'Gotcha',
          onPress: () => redirectBack(),
        },
      ]);
    });
    socket.on('updateVoices', (result) => setVoices(result.feedbacks));
  }, [ENDPOINT]);

  /**
   * Student will get kicked out of the room when the teacher ends the session
   */
  useEffect(() => {
    socket.on('kickFromRoom', () => {
      Alert.alert('Session ended', 'Please go back', [
        {
          text: 'Gotcha',
          onPress: () => redirectBack(),
        },
      ]);
    });
  }, []);

  /**
   * Receive a response back from the teacher when the feedback is seen by the teacher
   */
  useEffect(() => {
    socket.on('teacherResponse', () => {
      Alert.alert('Successful', 'Thanks for your voice', [
        {
          text: 'No Problem',
          onPress: () => {},
        },
      ]);
    });
  }, []);

  /**
   * Updates any voices that are sent in the room
   */
  useEffect(() => {
    socket.on('updateVoices', (result) => {
      setVoices(result.feedbacks);
    });
  }, [voices]);

  /**
   * Sends a feedback to the teacher based on the button pressed
   * @param {string} feedback
   * @param {string} roomId
   */
  const sendFeedback = (feedback, roomId) => {
    socket.emit('sendFeedback', feedback, roomId, ({ error }) => {
      Alert.alert('Error', error, [
        {
          text: 'Gotcha',
          onPress: () => redirectBack(),
        },
      ]);
    });
  };

  return (
  
    <View >
      <Text>session: {session}</Text>
      <Text style={styles.sectionTitle1}>Voices</Text>
      {voices['Too Slow'] === '' ||
      voices['Too Slow'] === undefined ||
      voices['Too Slow'].length === 0 ? null : (
        <Text>Too Slow</Text>
      )}
      {voices['Too Fast'] === '' ||
      voices['Too Fast'] === undefined ||
      voices['Too Fast'].length === 0 ? null : (
        <Text>Too Fast</Text>
      )}
      {voices['Repeat Last Phrase'] === '' ||
      voices['Repeat Last Phrase'] === undefined ||
      voices['Repeat Last Phrase'].length === 0 ? null : (
        <Text>Repeat Last Phrase</Text>
      )}
      {voices['Confused'] === '' ||
      voices['Confused'] === undefined ||
      voices['Confused'].length === 0 ? null : (
        <Text>Confused</Text>
      )}
      
      <View>
      <Text style={styles.sectionTitle2}>Options</Text>
      <Image source ={require('../img/Vector.png')} style={styles.logo}></Image>
      
      <TouchableOpacity style={styles.slowbutton}
      onPress={() => sendFeedback('Too Slow', roomId)} >
        <Image source ={require('../img/1.png')}style={styles.slowlogo}></Image>
        <Text>Too Slow</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => sendFeedback('Too Fast', roomId)} style={styles.fastbutton}>
      <Image source ={require('../img/3.png')}style={styles.fastlogo}></Image>
        <Text>Too Fast</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => sendFeedback('Repeat Last Phrase', roomId)} style={styles.repeatbutton}>
          <Image source ={require('../img/2.png')}style={styles.repeatlogo}></Image>
        <Text>Repeat</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => sendFeedback('Confused', roomId)} style={styles.confusedbutton}>
      <Image source ={require('../img/4.jpg')}style={styles.slowlogo}></Image>
        <Text>Confused</Text>
      </TouchableOpacity>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  sectionTitle1: {
    fontWeight: 'bold',
    
  },
  sectionTitle2: {
    left: 31,
    top: 350,
    fontWeight: 'bold',
  },
  slowbutton:{
    position: 'absolute', 
    width: 293,
    height: 73,
    left: 31,
    top: 509,
    

  },
  fastbutton:{
    position: 'absolute', 
    width: 293,
    height: 73,
    left: 121,
    top: 509,
  },
  repeatbutton:{
    position: 'absolute', 
    width: 293,
    height: 73,
    left: 221,
    top: 509,
  },
  confusedbutton:{
  position: 'absolute', 
  width: 293,
  height: 73,
  left: 301,
  top: 509,
},

  logo:{
    position: 'absolute', 
    top: 395,
    left: 338,
  },
  slowlogo:{
    position: 'absolute',
    height: 50,
    width: 50,
    top: -60,
    left: 7

  },
  fastlogo:{
    position: 'absolute',
    height: 60,
    width: 60,
    top: -63,
    left: -3

  },
  repeatlogo:{
    position: 'absolute',
    height: 48,
    width: 48,
    top: -57,
    left: -2

  },
  confuselogo:{
    position: 'absolute',
  }
});
