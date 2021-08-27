const express = require('express');
const router = express.Router();
const Comment = require('../controllers/Comment');

router
  .get('/', Comment.getComments)
  .post('/create', Comment.postComment)

module.exports = router;