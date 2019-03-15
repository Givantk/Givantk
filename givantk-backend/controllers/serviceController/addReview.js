const mongoose = require('mongoose');

// Models
const Profile = mongoose.model('profile');
const Service = mongoose.model('service');

module.exports = addReview = (req, res) => {
  console.log(req.body);

  const errors = {};

  const serviceId = req.params.service_id;

  Service.findById(serviceId)
    .then((service) => {
      const userId =
        req.body.userToBeRated === service.asker
          ? service.asker.toString()
          : service.helper.toString();

      Profile.findOne({ user: userId }).then((Profile) => {
        //Calculating average rating

        Profile.sum_of_ratings += req.body.chosenRating;

        Profile.average_services_rating =
        Profile.sum_of_ratings / (Profile.number_of_ratings + 1);

        Profile.number_of_ratings++;
        Profile.save();
      });

      // Updating service
      if (req.body.userToBeRated.toString() === service.asker.toString()) {
        service.asker_is_rated = {
          chosen_rating: req.body.chosenRating,
          written_review: req.body.writtenReview,
        };

        service.rated_by_helper = true;
      } else {
        service.helper_is_rated = {
          chosen_rating: req.body.chosenRating,
          written_review: req.body.writtenReview,
        };

        service.rated_by_asker = true;
      }
      service.save().then(() => {
        return res.json({ success: true });
      });
    })
    .catch((err) => {
      errors.error = 'Error fetching service from database';
      return res.status(500).json({ ...errors, ...err });
    });
};
