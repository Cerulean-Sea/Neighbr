const User = require('../database/User');

const signin = (req, res) => {
  try {
    const { email, pass } = req.body;
    res.set(200).send("Recieved SignIn creds on req.body")
  }
  catch (error) {
    res.set(400).send(error)
  }
};

const signup = (req, res) => {
  try {
    const { first, last, email, pass, zip } = req.body;
    res.set(200).send("Recieved SignUp info on req.body")
  }
  catch (error) {
    res.set(400).send(error)
  }
};

module.exports = {
  signin,
  signup
};