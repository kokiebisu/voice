import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Section1 = ({ title, children }) => {
  return (
    <View style={styles.sectionTitleWrapper1}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitleWrapper1: {
    flex: 1,   
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: -90,
  },
  
});
