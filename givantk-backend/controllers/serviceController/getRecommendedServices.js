const mongoose = require('mongoose')

//Get Model
const serviceModel = mongoose.model('service')

const profileModel = mongoose.model('profile')

const errors = {}

//Method to calculate score to each service

const CalculateScore = (service, profile) => {
  console.log('asker id', service.asker._id)
  console.log('user id', profile.user._id)

  if (
    service.state === 'progressing' ||
    service.state === 'done' ||
    service.state === 'archived' ||
    service.asker._id.toString() === profile.user._id.toString()
  ) {
    service.score = 0
    return
  }
  let {
    skills: recommendedSkills,
    job: recommendedJobs,
    location: recommendedLocations,
  } = service.recommenderInfo
  let {
    skills: profileSkills,
    job: profileJob,
    location: profileLocation,
  } = profile.recommenderInfo

  //Match common skills and assign score
  matchedSkills = recommendedSkills.filter(skill => profileSkills.includes(skill))

  service.score = matchedSkills.length

  //Match common job and assign score

  for (job of recommendedJobs) {
    if (job === profileJob) {
      service.score += 1
      break
    }
  }

  //Match common location and assign score
  for (location of recommendedLocations) {
    if (location === profileLocation) {
      service.score += 1
      break
    }
  }
}

module.exports = getRecommendedServices = (req, res) => {
  profileModel.findOne({ user: req.user._id }).then(profile => {
    serviceModel
      .find()
      .populate('asker')
      .populate('applications.user')
      .populate('comments.user')
      .sort({ date: -1 })
      .then(services => {
        services.forEach(service => CalculateScore(service, profile))
        services.sort((a, b) => {
          return b.score - a.score || b.date - a.date
        })
        res.json(services)
      })
      .catch(err => {
        serviceModel
          .find()
          .populate('asker')
          .populate('applications.user')
          .populate('comments.user')
          .sort({ date: -1 })
          .then(services => {
            res.json(services)
          })
          .catch(err => {
            errors.error = 'Error getting recommended services'
            res.status(500).json({ ...errors, ...err })
          })
      })
  })
}
