const express = require('express');
const router = express.Router();
const User = require('../controllers/User');
const auth = require('../middleware/auth');

router
  .post('/signin', User.signin)
  .post('/signin/google', User.googleSignIn)
  .post('/signup', User.signup)
  .get('/community/:userId', User.community)

module.exports = router;