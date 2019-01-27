const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

// Models
const User = mongoose.model('user');

// login
exports.login = (req, res) => {
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        // if no email matched the emails in our database
        return res.status(401).json({ message: 'Auth Failed' });
      }

      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({ message: 'Auth Failed' });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user[0].email,
              id: user[0]._id
            },
            'secret',
            { expiresIn: '1h' }
          );

          return res
            .status(200)
            .json({ message: 'Auth Successful', token: token });
        } else {
          return res.status(401).json({ message: 'Auth Failed' });
        }
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

// get one user using GET request
exports.getUser = (req, res) => {
  const id = req.params.id;
  User.findById(id)
    .populate('Service')
    .then((result) => res.json(result));
};

// update user using PATCH request
exports.UpdateUser = (req, res) => {
  const id = req.params.id;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  User.updateOne({ _id: id }, { $set: updateOps })
    .exec()
    .then((result) => res.json(result));
};

// delete user using DELETE request
exports.deleteUser = (req, res) => {
  const id = req.params.id;
  User.deleteOne({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json({ message: 'User Deleted Successfully' });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

// you must send the values in patch req in postman as array not object
/**
 
    [
	    {"propName": "location", "value": "Cairo"},
	    {"propName": "email", "value": "test@osama.com"},
	    {"propName": "givantk_points", "value": "0"},
	    {"propName": "money_points", "value": "47749"}
    ]
 
 */
