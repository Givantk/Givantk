const mongoose = require('mongoose');

// Models
const Service = mongoose.model('service');

module.exports = getSearchedServices = (req, res) => {
  const errors = {};
  /* if the given search word is e.g.(wake) it will search for
    - wake (case INSENSITIVE)
    - wake + any number of words, like wake up call
    - wake + any continuation of the word, like wakes..etc
    
    it will not search for a word in the middle e.g.(buy potato for me)
    if you type "buy" it will find it but if you type "potato" it won't find it
  */

  let query = '' + req.params.searchedKeyword + '';

  Service.find({
    $or: [
      { name: { $regex: query, $options: 'i' } },
      { description: { $regex: query, $options: 'i' } }
    ]
  })
    .populate('asker')
    .populate('applications.user')
    .sort({ date: -1 })
    .then((services) => {
      return res.json(services);
    })
    .catch((err) => {
      errors.error = 'Error fetching services from database';
      res.status(500).json({ ...errors, ...err });
    });
};
