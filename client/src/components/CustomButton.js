import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button } from 'native-base';

export const CustomButton = ({ name, press, data }) => {
  return (
    <>
      <Button large style={styles.buttons} block onPress={press}>
        <Text style={styles.buttonText}>{name}</Text>
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  buttons: {
    marginVertical: 10,
    backgroundColor: '#DD6B4D',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
