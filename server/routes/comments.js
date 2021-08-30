const express = require('express');
const router = express.Router();
const Comment = require('../controllers/Comment');
const auth = require('../middleware/auth');

router
  .get('/', Comment.getComments)
  .get('/:commentId', Comment.getCommentById)
  .get('/users/:userId', Comment.getCommentsByUserId)
  .get('/posts/:postId', Comment.getCommentsByPostId)
  .post('/create', auth, Comment.postComment)
  .patch('/:commentId', auth, Comment.updateComment)
  .delete('/:commentId', auth, Comment.deleteComment)

module.exports = router;