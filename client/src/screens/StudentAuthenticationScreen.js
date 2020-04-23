import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

// Navigation
import { useNavigation } from '@react-navigation/native';

export default () => {
  // State
  const [session, setSession] = useState('');

  // Navigator
  const navigation = useNavigation();

  return (
    <>
      <View>
        <TextInput
          placeholder='Enter the session id'
          value={session}
          onChangeText={(text) => setSession(text)}
        />
        <Button
          title='Join Session'
          onPress={() =>
            navigation.navigate('Student Session', { sessionId: session })
          }
        />
      </View>
    </>
  );
};
