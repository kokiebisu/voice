import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default () => {
  const route = useRoute();
  const [session, setSession] = useState('');

  useEffect(() => {
    const id = route.params.sessionId;
    setSession(id);
  });

  return (
    <View>
      <Text>session: {session}</Text>
    </View>
  );
};
