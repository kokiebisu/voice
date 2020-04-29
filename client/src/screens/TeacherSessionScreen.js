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
  const [feedbacks, setFeedbacks] = useState({
    tooslow: '',
    toofast: '',
  });

  // Destructuring all the available feedbacks
  const { tooslow, toofast } = feedbacks;

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
      setFeedbacks({
        ...feedbacks,
        tooslow: result.feedbacks['too slow'].length,
      });
    });
  }, [tooslow]);

  /**
   * Sends the feedback pressed by the user
   * @param {string} feedbackName
   */
  const respond = (feedbackName) => {
    socket.emit('respondFeedback', feedbackName, roomId);
    setFeedbacks({ ...feedbacks, tooslow: '' });
  };

  return (
    <View>
      <Text>SessionID: {sessionId}</Text>
      {tooslow === '' || tooslow === undefined ? null : (
        <TouchableOpacity
          onPress={() => {
            respond('too slow');
          }}>
          <Text>Too Slow: {tooslow}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
