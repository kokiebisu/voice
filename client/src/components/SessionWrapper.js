import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

export const SessionWrapper = ({ children }) => {
  return <ImageBackground style={styles.container}>{children}</ImageBackground>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4195a7',
  },
});
