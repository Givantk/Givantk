const isEmpty = require('./assets/is-empty');
const Validator = require('validator');

module.exports = function validateProfile(data) {
  let errors = {};

  // skills
  if (!data.skills || data.skills.length === 0) {
    errors.skills = 'Skills are required';
  }

  // description
  if (!isEmpty(data.description))
    if (!Validator.isLength(data.description, { min: 20, max: 600 })) {
      errors.description = 'Description must be between 20 and 600 characters';
    }

  //date_of_birth
  if (data.date_of_birth)
    if (
      !(data.date_of_birth instanceof Date) &&
      (typeof data.date_of_birth == 'string' &&
        !(Validator.toDate(data.date_of_birth) instanceof Date))
    ) {
      errors.date_of_birth = 'Birth of date must be a date';
    }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
