import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default () => {
  // State
  const [course, setCourse] = useState('');

  // Navigator
  const navigation = useNavigation();

  return (
    <>
      <View>
        <Text>Course</Text>
        <TextInput
          placeholder='Enter the Course Name'
          value={course}
          onChangeText={(text) => setCourse(text)}
        />
        <Button
          title='Create Session'
          onPress={() => navigation.navigate('Teacher Session')}
        />
      </View>
    </>
  );
};
