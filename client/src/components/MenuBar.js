import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MenuButton } from './MenuButton';

export const MenuBar = () => {
  return (
    <View style={styles.containerbottom}>
      <MenuButton title='Home' imgSrc='../img/home.png' screen='Role Select' />
      <MenuButton
        title='Student'
        imgSrc='../img/s.png'
        screen='Student Authentication'
      />
      <MenuButton
        title='Teacher'
        imgSrc='../img/t.png'
        screen='Teacher Create Session'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerbottom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // backgroundColor: 'yellow',
    // marginRight: ,
    padding: 25,
    width: '100%',
    // flex: 1,
  },
});
