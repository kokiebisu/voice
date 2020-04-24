/**
 * @file Screen where students authenticate based on the session id
 */

/**
 * Dependencies
 */
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default () => {
  /**
   * Used to navigate between the screens
   */
  const navigation = useNavigation();

  /**
   * States
   */
  const [session, setSession] = useState('');

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
