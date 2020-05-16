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
        <View style={{backgroundColor:'#FF5C5C', height: 125, width:25,borderTopRightRadius:10, borderBottomRightRadius:10,marginLeft:146,marginTop:-117}}></View>
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
    backgroundColor: '#FFFFFF',
    marginBottom: 20
  },
  text:{
    fontSize:20, 
    fontWeight: 'bold',
  }
});
