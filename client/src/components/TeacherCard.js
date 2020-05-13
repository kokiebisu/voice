import React from 'react';
import { TouchableOpacity, Text, View,Image, StyleSheet,backgroundColor} from 'react-native';

export const TeacherCard = ({ respond, feedbackName, length }) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          respond(feedbackName);
        }}>
          <Image source={imgSrc} style={styles.logo}></Image>
        <Text>
          {feedbackName}: {length}
        </Text>
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 50,
  },
});
