const firebase = require('firebase-admin');
const serviceAccount = require('./neighbr-55334-firebase-adminsdk-nmr3j-8bacccde1f.json');

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount)
});

module.exports = firebase;