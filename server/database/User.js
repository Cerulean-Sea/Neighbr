const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  userId: String,
  community: String,
  picture: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;