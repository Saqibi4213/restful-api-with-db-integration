const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (token) {
    jwt.verify(token, 'your_jwt_secret', (err, user) => {
      if (err) {
        return res.sendStatus(403); // Forbidden
      }
      req.user = user;
      return next(); // Proceed to the next middleware
    });
  } else {
    return res.sendStatus(401); // Unauthorized
  }

  return null; // Explicitly return null if no conditions are met
};

module.exports = authenticateJWT;
