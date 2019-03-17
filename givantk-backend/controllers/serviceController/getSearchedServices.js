const mongoose = require('mongoose');

// Models
const Service = mongoose.model('service');

module.exports = getSearchedServices = (req, res) => {
  const errors = {};
  /* if the given search word is e.g.(wake) it will search for
    - wake (case INSENSITIVE)
    - wake + any number of words, wake can be in any place in the sentence
    - wake + any continuation of the word, like wakes..etc
    
  */

  let query = ''+req.params.searchedKeyword+'';

  Service.find({ name: { $regex: query, $options: 'i' } })
    .populate('asker')
    .populate('applications.user')
    .sort({ date: -1 })
    .then((services) => {
      if (services.length === 0) {
        errors.noservices = 'No services found';
        return res.status(404).json(errors);
      }
      return res.json(services);
    })
    .catch((err) => {
      errors.error = 'Error fetching services from database';
      res.status(500).json({ ...errors, ...err });
    });
};
