const mongoose = require('mongoose');

// Models
const Service = mongoose.model('service');

module.exports = getSearchedServices = (req, res) => {
  const errors = {};
  /* if the given search word is e.g.(wake) it will search for
    - wake (case INSENSITIVE)
<<<<<<< HEAD:givantk-backend/controllers/serviceController/search.js
    - wake + any number of words, like wake up call
    - wake + any continuation of the word, like wakes..etc
    
    it will not search for a word in the middle e.g.(buy potato for me)
    if you type "buy" it will find it but if you type "potato" it won't find it
  */
  Service.find({ name: { $regex: new RegExp("^" + req.params.name, "i") } })
=======
    - wake + any number of words, wake can be in any place in the sentence
    - wake + any continuation of the word, like wakes..etc
    
  */

  let query = ''+req.params.searchedKeyword+'';

  Service.find({ name: { $regex: query, $options: 'i' } })
    .populate('asker')
    .populate('applications.user')
>>>>>>> c1752eab45595bb80d4b8fe1291d3f084d0e4247:givantk-backend/controllers/serviceController/getSearchedServices.js
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
