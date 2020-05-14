/**
 * @file The initial screen where the user picks their role
 */

// Dependencies
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

// Components
import { ScreenWrapper } from '../components/ScreenWrapper';
import { CustomButton } from '../components/CustomButton';

export default () => {
  return (
    <ScreenWrapper>
      <View style={styles.logoWrapper}>
        <Image source={require('../img/Voice.png')} style={styles.logo} />
      </View>
      <View style={styles.descriptionWrapper}>
        <Image source={require('../img/role.png')} style={styles.role} />
      </View>
      <View style={styles.buttonWrapper}>
        <CustomButton name='Student' screen='Student Authentication' />
      </View>
      <View style={styles.buttonWrapper}>
        <CustomButton name='Teacher' screen='Teacher Authentication' />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  logoWrapper: {
    marginBottom: 30,
  },
  descriptionWrapper: {
    marginBottom: 20,
  },
  buttonWrapper: {
    marginVertical: 20,
  },
});
