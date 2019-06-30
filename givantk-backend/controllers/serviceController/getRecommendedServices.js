const mongoose = require('mongoose');

//Get Model
const serviceModel = mongoose.model('service');

const profileModel = mongoose.model('profile');

const errors = {};

//Method to calculate score to each service

const CalculateScore = (service, profile) => {
  let { recommendedSkills, recommendedJobs, recommendedLocations } = service;

  //Match common skills and assign score
  matchedSkills = recommendedSkills.filter((skill) =>
    profile.skills.includes(skill)
  );

  service.score = matchedSkills.length;

  //Match common job and assign score

  for (job of recommendedJobs) {
    if (job === profile.job) {
      service.score += 1;
      break;
    }
  }

  //Match common location and assign score
  for (location of recommendedLocations) {
    if (location === profile.location) {
      service.score += 1;
      break;
    }
  }
};

module.exports = getRecommendedServices = (req, res) => {
  profileModel.findOne({ user: req.user._id }).then((profile) => {
    serviceModel
      .find()
      .then((services) => {
        services.forEach((service) => CalculateScore(service, profile));
        services.sort((a, b) => b.score - a.score);
        res.json(services);
      })
      .catch((err) => {
        errors.error = 'Error getting recommended services';
        res.status(500).json({ ...errors, ...err });
      });
  });
};