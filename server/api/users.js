const { admin, db } = require('../util/admin');
const config = require('../config/firebase');
const firebase = require('firebase');

firebase.initializeApp(config);

const { validateLoginData, validateSignUpData } = require('../util/validators');

// Login for Teacher
const login = async (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  const { valid, errors } = validateLoginData(user);
  if (!valid) return res.status(400).json(errors);

  try {
    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then((data) => {
        const token = data.user.getIdToken();
        return token;
      })
      .then((token) => {
        const jsonToken = res.json({ token });
        return jsonToken;
      })
      .catch((error) => {
        console.error(error);
        return response
          .status(403)
          .json({ general: 'wrong credentials, please try again' });
      });
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { login };
