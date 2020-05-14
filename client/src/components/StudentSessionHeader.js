import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const StudentSessionHeader = ({ session }) => {
  return (
    <View style={styles.sessionWrapper}>
      <Text style={styles.sessionHeader}>Welcome to session: {session}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sessionWrapper: {
    width: 300,
    height: 87,
    backgroundColor: '#00263B',
    borderRadius: 10,
  },
  sessionHeader: {
    position: 'absolute',
    top: 35,
    left: 60,
    fontWeight: 'bold',
  },
});
