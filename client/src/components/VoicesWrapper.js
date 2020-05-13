import React, { useEffect } from 'react';
import { Voice } from '../components/Voice';

import { Dimensions, FlatList, Text, View, StyleSheet } from 'react-native';
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
            // <View styles={}>
            //   <Text>{item}</Text>
            // </View>
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
      {/* {console.log(arrVoices)} */}
      {/* {voices['Too Slow'] === '' ||
      voices['Too Slow'] === undefined ||
      voices['Too Slow'].length === 0 ? null : (
        <Voice
          feedbackName='Too Slow'
          sendFeedback={sendFeedback}
          isPressed={isPressed}
          roomId={roomId}
          disableFeedbacks={disableFeedbacks}
          disableIAgree={disableIAgree}
        />
      )}
      {voices['Too Fast'] === '' ||
      voices['Too Fast'] === undefined ||
      voices['Too Fast'].length === 0 ? null : (
        <Voice
          feedbackName='Too Fast'
          sendFeedback={sendFeedback}
          isPressed={isPressed}
          roomId={roomId}
          disableFeedbacks={disableFeedbacks}
          disableIAgree={disableIAgree}
        />
      )}
      {voices['Repeat'] === '' ||
      voices['Repeat'] === undefined ||
      voices['Repeat'].length === 0 ? null : (
        <Voice
          feedbackName='Repeat'
          sendFeedback={sendFeedback}
          isPressed={isPressed}
          roomId={roomId}
          disableFeedbacks={disableFeedbacks}
          disableIAgree={disableIAgree}
        />
      )}
      {voices['Confused'] === '' ||
      voices['Confused'] === undefined ||
      voices['Confused'].length === 0 ? null : (
        <Voice
          feedbackName='Confused'
          sendFeedback={sendFeedback}
          isPressed={isPressed}
          roomId={roomId}
          disableFeedbacks={disableFeedbacks}
          disableIAgree={disableIAgree}
        />
      )} */}
    </>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    width: windowWidth,
  },
});
