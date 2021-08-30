const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = global.Promise;

const commentSchema = new mongoose.Schema({
  text: String,
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
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  },
  photos: [String]
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;