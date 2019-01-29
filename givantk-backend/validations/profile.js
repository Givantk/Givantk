const isEmpty = require('./assets/is-empty');
const Validator = require('validator');

module.exports = function validateProfile(data) {
  let errors = {};

  // skills
  if (data.skills.length === 0) {
    errors.skills = 'Skills are required';
  }

  // description
  if (!Validator.isLength(data.description, { min: 20, max: 600 })) {
    errors.description = 'Description must be between 20 and 600 characters';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
