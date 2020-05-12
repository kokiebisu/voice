import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';

export const MenuButton = ({ title, imgsrc, screen }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(screen)}>
        <Image source={imgsrc}></Image>
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};