import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';

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
      <View style={styles.card}>
    
        <Text style={styles.text}>{feedbackName}</Text>
        {isPressed ? null : (
          <TouchableOpacity
            onPress={() => {
              sendFeedback(feedbackName, roomId);
              disableFeedbacks();
              disableIAgree();
            }}>
              <View style={styles.button2}>
            <Text style={styles.button1}>I agree</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  card:{
    width: 100,
    height: 120,
    borderRadius: 12,
    backgroundColor: '#C4C4C4',
    marginTop: 40,
    marginLeft:20
    
  },
  text:{
    fontSize:15, 
    fontWeight: 'bold',
    paddingTop: 50,
    paddingLeft: 15,
   
    
  },
  button1:{
      paddingLeft:13,
      color: 'white',
  },
  button2:{
    width: 72,
    height:21,
    backgroundColor:'#00263B',
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 15
    
}


});
