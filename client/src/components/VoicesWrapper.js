import React from 'react';
import { Voice } from '../components/Voice';

import { Dimensions, FlatList, Text, View, StyleSheet } from 'react-native';

/**
 * Retrieving the width, height of the device
 */
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const VoicesWrapper = ({
  voices,
  sendFeedback,
  isPressed,
  roomId,
  disableFeedbacks,
  disableIAgree,
}) => {
  let arrVoices = [];
  for (let property in voices) {
    if (voices[property].length > 0) {
      arrVoices.push(property);
    }
  }

  return (
    <>
      <View style={styles.Wrapper}>
        <FlatList
          horizontal={true}
          data={arrVoices}
          renderItem={({ item, index }) => (
            <Voice
              feedbackName={item}
              sendFeedback={sendFeedback}
              isPressed={isPressed}
              roomId={roomId}
              disableFeedbacks={disableFeedbacks}
              disableIAgree={disableIAgree}
            />
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    width: windowWidth,
  },
});
