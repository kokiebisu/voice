import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export const TeacherCard = ({ respond, feedbackName, length }) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          respond(feedbackName);
        }}>
        <Text>
          {feedbackName}: {length}
        </Text>
      </TouchableOpacity>
    </>
  );
};
