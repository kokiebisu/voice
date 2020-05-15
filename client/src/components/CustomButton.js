import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';

export const CustomButton = ({ name, screen, data }) => {
  const navigation = useNavigation();
  return (
    <>
      {data ? (
        <Button
          large
          style={styles.buttons}
          block
          onPress={() => navigation.navigate(screen, data)}>
          <Text style={styles.buttonText}>{name}</Text>
        </Button>
      ) : (
        <Button
          large
          style={styles.buttons}
          block
          onPress={() => navigation.navigate(screen)}>
          <Text style={styles.buttonText}>{name}</Text>
        </Button>
      )}
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
