/**
 * @file Contains all the methods to validate the authentication
 */

/**
 * Validates whether if the given string is empty
 * @param string
 */

const isEmpty = (string) => {
  if (string.trim() === '') return true;
  else return false;
};

/**
 * Validates whether if the bcit school email is valid
 * @param email
 */
const isSchool = (email) => {
  // const bcitEmailRegEx = /@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // const bcitEmailRegEx1 = /bcit.ca&/
  const schoolRegEx = new RegExp(/bcit.ca$/);
  return email.match(schoolRegEx);
};

/**
 * Validates whether if the password is valid
 * @param password
 */
const isValid = (password) => {
  // const pattern = /^.{8,}$ ?=.*\\d  ?=.*[A-Z]
  const msg = 'Weak password, minimum 8 chars';
  const pattern = /^(?=.{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/;
  // if (!password || ( password.trim() && !pattern && password.length < 8))
  return password.match(pattern);
  // if (pattern) { return" Password proper length and pattern"}
  // else { return msg }
};

/**
 * Validates whether if the email is valid
 * @param email
 */
const isEmail = (email) => {
  const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // const emailRegEx = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

  return email.match(emailRegEx);
};
/**
 * Validates whether if the login input is valid
 * @param data
 */

const validateLoginData = (data) => {
  let errors = {};
  if (isEmpty(data.email)) errors.email = 'Please an email';
  if (isEmpty(data.password)) errors.password = 'Please fill in a password';
  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

/**
 * Validates whether if the signup input is valid
 * @param data
 */
const validateSignUpData = (data) => {
  let errors = {};
  if (isEmpty(data.email)) {
    errors.email = 'Please enter your school email';
  } else if (!isEmail(data.email) && !isSchool(data.email)) {
    errors.email = 'Must be valid school email address';
  } else errors.email = 'Valid email';

  if (isEmpty(data.password)) errors.password = 'Please enter an email';
  if (isValid(data.password))
    errors.confirmPassword = 'Please confirm your password';
  if (isEmpty(data.confirmPassword))
    errors.confirmPassword = 'Confirm your password';
  if (data.password !== data.confirmPassword)
    errors.confirmPassword = 'Passwords must be the same';
  if (isValid(data.confirmPassword)) errors.confirmPassword = 'OK';

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

module.exports = {
  validateLoginData,
  validateSignUpData,
};
