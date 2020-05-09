import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

export const ScreenWrapper = ({ children }) => {
  return (
    <ImageBackground
      source={require('../img/images.jpg')}
      style={styles.container}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
