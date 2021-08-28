const express = require('express');
const router = express.Router();
const User = require('../controllers/User');
const auth = require('../middleware/auth');

router
  .post('/signin', User.signin)
  .post('/signup', auth, User.signup)

module.exports = router;