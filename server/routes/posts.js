const express = require('express');
const router = express.Router();
const Post = require('../controllers/Post');

router
  .get('/', Post.getPosts)
  .get('/:postId', Post.getPostById)
  .get('/users/:userId', Post.getPostsByUserId)
  .post('/create', Post.postPost)
  .patch('/:postId', Post.updatePost)
  .delete('/:postId', Post.deletePost)

module.exports = router;