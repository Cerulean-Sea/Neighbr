const express = require('express');
const router = express.Router();
const Post = require('../controllers/Post');

router
  .get('/', Post.getPosts)
  .get('/:postId', Post.getPostById)
  .post('/create', Post.postPost)

module.exports = router;