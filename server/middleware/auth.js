const admin = require('../firebase')

const auth = async (req, res, next) => {
  const headerToken = req.headers.authorization;

  if (!headerToken) {
    return res.status(401).json({message: 'No token provided.'});
  }

  if (headerToken && headerToken.split(' ')[0] !== 'Bearer') {
    return res.status(401).json({ message: 'Invalid token' });
  }

  const token = headerToken.split('Bearer ')[1];

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    const uid = decodedToken.uid;

    const user = await admin.auth().getUser(uid);

    if (!user.verified) {
      return res.status(401).json({message: 'Email not verified'});
    }

    req.currentUser = decodedToken;
    next();

  } catch (error) {
    res.status(403).json({message: 'Unauthorized'});
  }

}

module.exports = auth;