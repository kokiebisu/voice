import React from 'react';
import { TouchableOpacity, Text, View,Image, StyleSheet,} from 'react-native';

export const TeacherCard = ({ respond, feedbackName, length, imgSrc,}) => {
  return (
    <>
    <View style={styles.card}>
      <TouchableOpacity style={{position:"absolute", top:10,left:85}}
        onPress={() => {
          respond(feedbackName);
        }}>
          <Image source={imgSrc} style={styles.logo}></Image>
        <Text style={styles.text}>
          {feedbackName}: {length}
        </Text>
      </TouchableOpacity>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  logo: {
    height: 80,
    width: 80,
  },
  card:{
    width: 256,
    height: 125,
    borderRadius: 10,
    backgroundColor: '#FF5C5C',
    marginBottom: 20
  },
  text:{
    fontSize:20, 
    fontWeight: 'bold',
  }
});
