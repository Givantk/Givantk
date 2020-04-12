const jwt = require('jsonwebtoken');

const keys = require('../../config/keys.ignore');

module.exports = loginAdmin = (req, res) => {
  const errors = {};

  const email = req.body.email;
  const password = req.body.password;

  if (email !== keys.adminEmail || password !== keys.adminPassword) {
    errors.incorrectinfo = 'Incorrect email or password';
    return res.status(400).json(errors);
  }

  const TokenPayload = {
    name: 'admin'
  };

  jwt.sign(
    TokenPayload,
    keys.secretOrKey,
    { expiresIn: 604800 },
    (err, token) => {
      return res.json({
        success: true,
        token: 'Bearer ' + token
      });
    }
  );
};
