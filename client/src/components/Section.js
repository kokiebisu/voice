import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Section = ({ title, children }) => {
  return (
    <View style={styles.sectionTitleWrapper}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitleWrapper: {
    marginRight: 300,
    flex: 1,
    paddingBottom: 120,
    paddingTop: 30,
  },
  sectionTitle: { fontWeight: 'bold' },
});
