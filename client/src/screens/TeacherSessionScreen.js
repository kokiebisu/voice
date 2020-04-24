/**
 * @file Screen where teachers can monitor the feedbacks
 * being sent from the students
 */

/**
 * Dependencies
 */
import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
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

export default () => {
  /**
   * States
   */
  const [sessionId, setSessionId] = useState('');

  useEffect(() => {
    socket = io(endpoint);
    const roomId = generateSessionId(5);
    setSessionId(roomId);
    socket.emit('createRoom', roomId);
  }, [endpoint]);

  return (
    <View>
      <Text>SessionID: {sessionId}</Text>
    </View>
  );
};
