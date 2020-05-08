import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

export const Option = ({
  feedbackName,
  roomId,
  imgSrc,
  sendFeedback,
  disableFeedbacks,
  isDisabled,
}) => {
  return (
    <View>
      <TouchableOpacity
        disabled={isDisabled}
        onPress={() => {
          sendFeedback(feedbackName, roomId);
          disableFeedbacks();
        }}>
        <View>
          {/* <Image source={require(imgSrc)} style={styles.logo}></Image> */}
          <Text>{feedbackName}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 50,
  },
});
