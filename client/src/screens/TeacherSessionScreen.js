import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import io from 'socket.io-client';

// Helper
import { generateSessionId } from '../../util/helper';

let socket;

export default () => {
  // This is Ken's Endpoint
  // Make sure you find your
  const ENDPOINT = 'http://192.168.0.43:5000';
  const [sessionId, setSessionId] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket = io(ENDPOINT);
    const roomId = generateSessionId(5);
    setSessionId(roomId);
    socket.emit('createRoom', roomId);
  }, [ENDPOINT]);

  return (
    <View>
      <Text>SessionID: {sessionId}</Text>
    </View>
  );
};
