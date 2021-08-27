const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = global.Promise;

const postSchema = new mongoose.Schema({
  text: String,
  location: Object,
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  },
  username: String,
  userId: String,
  tags: [String],
  claimed: {
    type: Boolean,
    default: false
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;