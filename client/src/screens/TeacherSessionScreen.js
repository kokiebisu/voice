/**
 * @file Screen where teachers can monitor the feedbacks
 * being sent from the students
 */

/**
 * Dependencies
 */
import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import io from 'socket.io-client';

/**
 * Helper Method
 */
import { generateSessionId } from '../util/helper';

/**
 * Endpoint
 */
import endpoint from '../util/endpoint';

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
  const [feedbacks, setFeedbacks] = useState({});

  /**
   * Creates a room with a randomly generated session id
   */
  useEffect(() => {
    socket = io(endpoint);
    roomId = generateSessionId(5);
    setSessionId(roomId);
    socket.emit('createRoom', roomId);
    return () => {
      socket.emit('destroyRoom', roomId);
    };
  }, [endpoint]);

  /**
   * Listens to any feedbacks being sent from the student
   */
  useEffect(() => {
    socket.on('displayFeedbacks', (result) => {
      console.log('client feedbacks', result.feedbacks);
      setFeedbacks(result.feedbacks);
    });
  }, [feedbacks]);

  /**
   * Sends the feedback pressed by the user
   * @param {string} feedbackName
   */
  const respond = (feedbackName) => {
    socket.emit('respondFeedback', feedbackName, roomId);
    setFeedbacks({ ...feedbacks, [feedbackName]: undefined });
  };

  return (
    <View>
      <Text>SessionID: {sessionId}</Text>
      {feedbacks['Too Slow'] === '' ||
      feedbacks['Too Slow'] === undefined ||
      feedbacks['Too Slow'].length === 0 ? null : (
        <TouchableOpacity
          onPress={() => {
            respond('Too Slow');
          }}>
          <Text>Too Slow: {feedbacks['Too Slow'].length}</Text>
        </TouchableOpacity>
      )}
      {feedbacks['Too Fast'] === '' ||
      feedbacks['Too Fast'] === undefined ||
      feedbacks['Too Fast'].length === 0 ? null : (
        <TouchableOpacity
          onPress={() => {
            respond('Too Fast');
          }}>
          <Text>Too Fast: {feedbacks['Too Fast'].length}</Text>
        </TouchableOpacity>
      )}
      {feedbacks['Repeat Last Phrase'] === '' ||
      feedbacks['Repeat Last Phrase'] === undefined ||
      feedbacks['Repeat Last Phrase'].length === 0 ? null : (
        <TouchableOpacity
          onPress={() => {
            respond('Repeat Last Phrase');
          }}>
          <Text>
            Repeat Last Phrase: {feedbacks['Repeat Last Phrase'].length}
          </Text>
        </TouchableOpacity>
      )}
      {feedbacks['Confused'] === '' ||
      feedbacks['Confused'] === undefined ||
      feedbacks['Confused'].length === 0 ? null : (
        <TouchableOpacity
          onPress={() => {
            respond('Confused');
          }}>
          <Text>Confused: {feedbacks['Confused'].length}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
