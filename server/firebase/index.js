const firebase = require('firebase-admin');
const firebaseConfig = require('./config');

firebase.initializeApp(firebaseConfig);

module.exports = firebase;