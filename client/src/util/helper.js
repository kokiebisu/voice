/**
 * @file Holds helper methods
 */

/**
 * Dependencies
 */
import { Alert } from 'react-native';

/**
 * Generates a session id based on the given length
 * @param {number} length
 */
export const generateSessionId = (length) => {
  var result = '';
  var characters = 'abcdefghjkmnpqrstuvwxyz23456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

/**
 * Prompts the teacher if they are certain to leave the session
 * @param {object} navigation
 */
export const leaveTeacherRoom = (navigation) => {
  Alert.alert(
    'Are you sure?',
    'You will be finishing the session',
    [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      { text: 'Leave', onPress: () => navigation.goBack() },
    ],
    { cancelable: true }
  );
};
