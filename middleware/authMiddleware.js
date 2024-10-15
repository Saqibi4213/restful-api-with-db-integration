const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (token) {
    jwt.verify(token, 'your_jwt_secret', (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      return next();
    });
  } else {
    return res.sendStatus(401);
  }
};

module.exports = authenticateJWT;
