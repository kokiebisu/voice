import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default () => {
  const navigation = useNavigation();

  return (
    <>
      <View>
        <Button onPress={() => navigation.navigate('Student Authenticate')}>
          Student
        </Button>
        <Button onPress={() => navigation.navigate('Teacher Authenticate')}>
          Teacher
        </Button>
      </View>
    </>
  );
};
