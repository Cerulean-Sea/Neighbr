const User = require('../database/User');

const signin = (req, res) => {

};

const signup = async (req, res) => {
  const { name, email, userId, community } = req.body;
  try {
    const user = await User.create({ name, email, userId, community });
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  signin,
  signup
};