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
      <Text style={styles.sectionTitle}>Options</Text>

      <TouchableOpacity onPress={() => sendFeedback('too slow', roomId)}>
        <Text>Too Slow</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => sendFeedback('too fast', roomId)}>
        <Text>Too Fast</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => sendFeedback('repeat last phrase', roomId)}>
        <Text>Repeat Last Phrase</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => sendFeedback('confused', roomId)}>
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
