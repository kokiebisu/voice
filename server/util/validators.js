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
 * Validates whether if the login input is valid
 * @param data
 */
const validateLoginData = (data) => {
  let errors = {};
  if (isEmpty(data.email)) errors.email = 'Must not be empty';
  if (isEmpty(data.password)) errors.password = 'Must not be  empty';
  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

/**
 * Validates whether if the email is valid
 * @param email
 */
const isEmail = (email) => {
  const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(emailRegEx)) return true;
  else return false;
};

/**
 * Validates whether if the signup input is valid
 * @param data
 */
const validateSignUpData = (data) => {
  let errors = {};

  if (isEmpty(data.email)) {
    errors.email = 'Must not be empty';
  } else if (!isEmail(data.email)) {
    errors.email = 'Must be valid email address';
  }

  if (isEmpty(data.email)) errors.email = 'Must not be empty';
  if (isEmpty(data.password)) errors.password = 'Must not be empty';
  if (isEmpty(data.confirmPassword))
    errors.confirmPassword = 'Must not be empty';
  if (data.password !== data.confirmPassword)
    errors.confirmPassword = 'Passwords must be the same';

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

module.exports = {
  validateLoginData,
  validateSignUpData,
};
