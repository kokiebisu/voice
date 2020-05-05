/**
 * @file Contains all the methods to validate the authentication
 */

/**
 * Validates whether if the given string is empty
 * @param string
 */

import React, { useState } from 'react';

const isEmpty = (string) => {
  if (string.trim() === '') return true;
  else return false;
};

// const __doCreateUser = async (email, password) => {
//   try {
//     let response = await auth().createUserWithEmailAndPassword(
//         email,
//         password
//     )
//     if (response && response.user) {
//       Alert.alert("Success ✅", "Account created successfully")
//     }
//   } catch (e) {
//     console.error(e.message)
//   }
// }
//
// const validateSignIn = () => {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [fetching, setFetching] = useState(false)
//   const [error, setError] = useState("")
//   const [isValid, setValid] = useState(true)
//   const pattern = {[ "^.{8,}$" + "?=.*\\d" + "?=.*[A-Z]"]}
//
//   const __doSignUp = () => {
//     if (!email) {
//       setError("Email required *")
//       setValid(false)
//       return
//     } else if (!password && password.trim() && password.length > 9) {
//       setError("Weak password, minimum 8 chars")
//       setValid(false)
//       return
//     } else if (!__isValidEmail(email)) {
//       setError("Invalid Email")
//       setValid(false)
//       return
//     }
//
//     __doCreateUser(email, password)
//   }
//

/**
 * Validates whether if the login input is valid
 * @param data
 */
const validateLoginData = (data) => {
  validateSignIn()
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
