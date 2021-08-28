const express = require('express');
const router = express.Router();
const Comment = require('../controllers/Comment');
const auth = require('../middleware/auth');

router
  .get('/', Comment.getComments)
  .get('/:commentId', Comment.getCommentById)
  .get('/users/:userId', Comment.getCommentsByUserId)
  .post('/create', Comment.postComment)
  .patch('/:commentId', Comment.updateComment)
  .delete('/:commentId', Comment.deleteComment)

module.exports = router;