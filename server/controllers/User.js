const User = require('../database/User');

const signin = (req, res) => {
  try {
    const { email, pass } = req.body;
    res.set(200).send("Recieved creds on req.body")
  }
  catch (error) {
    res.set(400).send(error)
  }
};

const signup = (req, res) => {

};

module.exports = {
  signin,
  signup
};