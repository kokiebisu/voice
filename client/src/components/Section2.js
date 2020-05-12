import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Section2 = ({ title, children }) => {
  return (
    <View style={styles.sectionTitleWrapper2}>
      <Text style={styles.sectionTitle1}>{title}</Text>
     
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitleWrapper2: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginRight: 300,
  },
  sectionTitle1: { fontWeight: 'bold' },
});
