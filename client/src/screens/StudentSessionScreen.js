/**
 * @file Screen where users can send feedbacks to the teacher instantaneously
 */

/**
 * Dependencies
 */
import React, { useState, useEffect } from 'react';
import { Text, View, Alert, Button, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import io from 'socket.io-client';

/**
 * Endpoint for the WebSocket
 */
import ENDPOINT from '../util/endpoint';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
   * Creates a socket when it is successful
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

  useEffect(() => {
    socket.on('displayFeedbacks', (result) => {
      let newVoices = Object.getOwnPropertyNames(result.feedbacks);
      setVoices(newVoices);
    });
  }, [voices]);

  useEffect(() => {
    socket.on('updateVoice', (result) => {
      setVoices(Object.getOwnPropertyNames(result.feedbacks));
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
    <View>
      <Text>session: {session}</Text>
      <Text style={styles.sectionTitle}>Voices</Text>
      {voices &&
        voices.length > 0 &&
        voices.map((voice) => {
          return <Text>{voice}</Text>;
        })}
      <Text style={styles.sectionTitle}>Options</Text>
      <TouchableOpacity onPress={() => sendFeedback('Too Slow', roomId)}>
        <Text>Too Slow</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => sendFeedback('Too Fast', roomId)}>
        <Text>Too Fast</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => sendFeedback('Repeat Last Phrase', roomId)}>
        <Text>Repeat Last Phrase</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => sendFeedback('Confused', roomId)}>
        <Text>Confused</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontWeight: 'bold',
  },
});
