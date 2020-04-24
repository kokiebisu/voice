import React, { useState, useEffect } from 'react';
import { Text, View, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import io from 'socket.io-client';

import { useNavigation } from '@react-navigation/native';

// Endpoint
import ENDPOINT from '../../util/endpoint';

let socket;

export default () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [session, setSession] = useState('');

  const redirectBack = () => {
    navigation.navigate('Student Authentication');
  };

  useEffect(() => {
    socket = io(ENDPOINT);
    const roomId = route.params.sessionId;
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

  return (
    <View>
      <Text>session: {session}</Text>
    </View>
  );
};
