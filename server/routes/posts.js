const express = require('express');
const router = express.Router();
const Post = require('../controllers/Post');
const auth = require('../middleware/auth');

router
  .get('/', Post.getPosts)
  .get('/filter/:filters', Post.getPostWithTagFilter)
  .get('/id/:postId', Post.getPostById)
  .get('/users/:userId', Post.getPostsByUserId)
  .get('/community/:community', Post.getPostsByCommunity)
  .post('/create', auth, Post.postPost)
  .patch('/:postId', auth, Post.updatePost)
  .delete('/:postId', auth, Post.deletePost)

module.exports = router;