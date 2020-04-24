// Dependencies
import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default () => {
  // Used to navigate between screens
  const navigation = useNavigation();

  return (
    <>
      <View>
        <Button
          title='Student'
          onPress={() => navigation.navigate('Student Authentication')}
        />
        <Button
          title='Teacher'
          onPress={() => navigation.navigate('Teacher Authentication')}
        />
      </View>
    </>
  );
};
