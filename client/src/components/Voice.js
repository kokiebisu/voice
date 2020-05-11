import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export const Voice = ({
  feedbackName,
  sendFeedback,
  isPressed,
  roomId,
  disableFeedbacks,
  disableIAgree,
}) => {
  return (
    <>
      <View>
        <Text>{feedbackName}</Text>
        {isPressed ? null : (
          <TouchableOpacity
            onPress={() => {
              sendFeedback(feedbackName, roomId);
              disableFeedbacks();
              disableIAgree();
            }}>
            <Text>I agree</Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};
