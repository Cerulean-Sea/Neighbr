const User = require('../database/User');

const signin = (req, res) => {

};

const signup = async (req, res) => {
  const { name, email, userId, community } = req.body;
  try {
    const user = await User.find({email});
    if (!user.length) {
      const user = await User.create({ name, email, userId, community });
      return res.status(201).send({message: 'New user created.'});
    }
    return res.sendStatus(200);
  } catch (error) {
    res.status(400).send(error);
  }
};

const googleSignIn = async (req, res) => {
  const { displayName, email, uid } = req.body;
  try {
    const user = await User.find({email});
    if (!user.length) {
      const newUser = await User.create({ name: displayName, email, userId: uid });
      return res.status(201).send({message: 'New user created.'});
    }
    return res.sendStatus(200);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  signin,
  signup,
  googleSignIn
};