const express = require('express');
const router = express.Router();
const Comment = require('../controllers/Comment');
const auth = require('../middleware/auth');

router
  .get('/', Comment.getComments)
  .get('/:commentId', Comment.getCommentById)
  .post('/create', Comment.postComment)

module.exports = router;