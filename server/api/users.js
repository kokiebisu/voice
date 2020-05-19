/**
 * @file Includes methods used for the authentication
 */

/**
 * Dependencies
 */
const { admin, db } = require('../util/admin');
const { config } = require('../config/firebase.js');
const { validateLoginData, validateSignUpData } = require('../util/validators');
const firebase = require('firebase');

/**
 * Initializes Firebase
 */
firebase.initializeApp(config);

/**
 * Logs in the teacher
 * @param req
 * @param res
 */
const login = (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };
  const { valid, errors } = validateLoginData(user);
  if (!valid) return res.status(400).json(errors);

  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then((data) => {
      const token = data.user.getIdToken();
      return token;
    })
    .then((token) => {
      const jsonToken = res.json({ token });
      console.log('successfully logged in');
      return jsonToken;
    })
    .catch((error) => {
      console.error(error);
      return res.status(403).json({ message: 'Oops! Something is not right!' });
    });
};

/**
 * Signs up the teacher
 * @param req
 * @param res
 */
const signup = async (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  };

  const { valid, errors } = validateSignUpData(newUser);

  if (!valid) return res.status(400).json(errors);

  let token, userId;
  db.doc(`/users/${newUser.email}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return res.status(400).json({ message: 'Username is already taken' });
      } else {
        return firebase
          .auth()
          .createUserWithEmailAndPassword(newUser.email, newUser.password);
      }
    })
    .then((data) => {
      userId = data.user.uid;
      const token = data.user.getIdToken();
      return data.user.getIdToken();
    })
    .then((idtoken) => {
      token = idtoken;
      const userCredentials = {
        email: newUser.email,
        createdAt: new Date().toISOString(),
        userId,
      };
      return db.doc(`/users/${newUser.username}`).set(userCredentials);
    })
    .then(() => {
      return res.status(201).json({ token });
    })
    .catch((err) => {
      console.error(err);
      if (err.code === 'auth/email-already-in-use') {
        return res.status(400).json({ message: 'Email already in use' });
      } else {
        return res
          .status(400)
          .json({ message: 'Something went wrong, please try again' });
      }
    });
};

module.exports = { login, signup };
