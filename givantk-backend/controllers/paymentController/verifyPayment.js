const mongoose = require('mongoose');

const keys = require('../../config/keys.ignore');

const stripe = require('stripe')(keys.stripeSecretKey);

// Models
const Profile = mongoose.model('profile');

module.exports = verifyPayment = (req, res) => {
  const errors = {};
  Profile.findOne({ user: req.user._id })

    .then((profile) => {
      if (!profile) {
        errors.noprofile = 'You have no profile';
        return res.status(404).json(errors);
      }

      (async () => {
        const charge = await stripe.charges.create({
          amount: req.body.amount,
          currency: req.body.currency,
          description: req.body.description,
          source: req.body.source,
        });
        return charge;
      })()
        .then((charge) => {
          if (charge.paid) {
            profile.money_points += req.body.amount / 100;
            profile.save().then(() => {
              return res.json({
                success: true,
              });
            });
          }
        })
        .catch((err) => {
          errors.error = 'Error!! Payment has failed, please try again';
          res.status(500).json({ ...errors, ...err });
        });
    })
    .catch((err) => {
      errors.error = 'Error!! Payment has failed, please try again';
      res.status(500).json({ ...errors, ...err });
    });
};
