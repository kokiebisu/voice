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
      <Text>SessionID: {sessionId}</Text>
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
