import React from 'react';
import { StyleSheet } from 'react-native';
import { Label, Form, Item, Input } from 'native-base';
export const CustomInput = ({
  placeholder,
  type,
  value,
  autoCapitalize,
  autoCorrect,
  trim,
}) => {
  return (
    <Form style={styles.wrapper}>
      <Item floatingLabel>
        <Label style={styles.placeholder}>{placeholder}</Label>
        <Input
          value={value}
          onChangeText={(text) => {
            if (!!trim) {
              text = text.trim();
            }
            type(text);
          }}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          style={styles.input}
        />
      </Item>
    </Form>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    right: 10,
  },
  placeholder: {
    color: 'white',
    fontSize: 24,
  },
  input: {
    marginTop: 20,
    fontSize: 36,
    color: 'white',
    marginBottom: 10,
  },
});
