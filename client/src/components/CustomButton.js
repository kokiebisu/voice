import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Text, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { useNavigation } from '@react-navigation/native';

export const CustomButton = ({ name, screen }) => {
  const navigation = useNavigation();
  return (
    <Button
      large
      style={styles.buttons}
      block
      onPress={() => navigation.navigate(screen)}>
      <Text style={styles.buttonText}>{name}</Text>
    </Button>
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
