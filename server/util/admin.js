const admin = require('firebase-admin');
var serviceAccount = require('../config/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://voice-3cf58.firebaseio.com',
});

const db = admin.firestore();

module.exports = { admin, db };
