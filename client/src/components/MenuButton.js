import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';

export const MenuButton = ({ title, imgSrc, screen }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(screen)}>
        <Image source={require(imgSrc)}></Image>
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
