const express = require('express');
const router = express.Router();
const User = require('../controllers/User');

router
  .post('/signin', User.signin)
  .post('/signup', User.signup)

module.exports = router;