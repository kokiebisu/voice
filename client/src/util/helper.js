/**
 * @file Holds methods that can be shared between the screens
 */

/**
 * Generates a session id based on the given length
 * @param length
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
