import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import io from 'socket.io-client';

export default () => {
  // This is Ken's Endpoint
  // Make sure you find your
  const ENDPOINT = 'http://192.168.0.62:5000';

  useEffect(() => {
    const socket = io(ENDPOINT);
    socket.emit('join', (message, error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT]);

  return (
    <View>
      <Text>Teacher session screen</Text>
    </View>
  );
};
