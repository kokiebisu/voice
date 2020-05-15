import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

export const ScreenWrapper = ({ children }) => {
  return <ImageBackground style={styles.container}>{children}</ImageBackground>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C365D',
    paddingTop: 30,
    paddingHorizontal: 30,
  },
});
