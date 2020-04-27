/**
 * @file Screen where teachers can create a session with the course name
 */

/**
 * Dependencies
 */
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default () => {
  /**
   * Used to navigate between the screens
   */
  const navigation = useNavigation();

  /**
   * States
   */
  const [course, setCourse] = useState('');

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
          onPress={() => navigation.navigate('Teacher Session', { course })}
        />
      </View>
    </>
  );
};
