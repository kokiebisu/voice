import React from 'react';
import { TouchableOpacity, Text, View,Image, StyleSheet,backgroundColor} from 'react-native';

export const TeacherCard = ({ respond, feedbackName, length, imgSrc}) => {
  return (
    <>
    <View style={{backgroundColor: '#FF5C5C',
         width: 256,
         height: 125,
         borderRadius: 10,}}>
      <TouchableOpacity style={{position:"absolute", top:10,left:85}}
        onPress={() => {
          respond(feedbackName);
        }}>
          <Image source={imgSrc} style={styles.logo}></Image>
        <Text style={{fontSize:20, fontWeight: 'bold',}}>
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
});
