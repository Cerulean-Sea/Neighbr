const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = global.Promise;

const postSchema = new mongoose.Schema({
  title: String,
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
  claimed: Boolean,
  commentId: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  photos: [],
  community: 'String'
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;