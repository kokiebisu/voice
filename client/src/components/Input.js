import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export const Input = ({
  placeholder,
  type,
  course,
  autoCapitalize,
  autoCorrect,
  trim,
}) => {
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        autoCorrect={autoCorrect}
        autoCapitalize={autoCapitalize}
        placeholder={placeholder}
        value={course}
        onChangeText={(text) => {
          if (!!trim) {
            text = text.trim();
          }
          type(text);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    width: 293,
    height: 73,
    paddingTop: 25,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'grey',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 180,
  },
});
