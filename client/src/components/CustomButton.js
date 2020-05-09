import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const CustomButton = ({ name, screen, data }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.buttonWrapper}
      onPress={() => navigation.navigate(screen, { data })}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    width: 293,
    height: 73,
    backgroundColor: '#03a5fc',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000000',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
