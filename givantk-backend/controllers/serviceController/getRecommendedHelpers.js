const mongoose = require('mongoose');

//Get Model

const serviceModel = mongoose.model('service');

const profileModel = mongoose.model('profile');

const CalculateScore = (profile, service) => {
  let { skills:recommendedSkills, jobs:recommendedJobs, locations:recommendedLocations } = service.recommenderInfo;

  //Match common skills and assign score
  matchedSkills = recommendedSkills.filter((skill) =>
    profile.skills.includes(skill)
  );

  profile.matchedSkills = matchedSkills;
  profile.score = matchedSkills.length;

  //Match common job and assign score

  for (job of recommendedJobs) {
    if (job === profile.job) {
      profile.score += 1;
      break;
    }
  }

  //Match common location and assign score
  for (location of recommendedLocations) {
    if (location === profile.location) {
      profile.score += 1;
      break;
    }
  }
};

module.exports = getRecommendedHelpers = (req, res) => {
  const errors = {};
  const serviceId = req.params.service_id;
  serviceModel.findById(serviceId).then((service) => {
    profileModel
      .find()
      .then((profiles) => {
        if (profiles.length === 0) {
          errors.noProfiles = 'No profiles Found';
        }
        profiles.forEach((profile) => CalculateScore(profile, service));
        profiles.sort((a, b) => b.score - a.score);
        //send the response containing profiles sorted by recommendation scores for this service
        res.json(profiles);
      })
      .catch((err) => {
        errors.error = 'Error getting recommended users';
        res.status(500).json({ ...errors, ...err });
      });
  });
};
