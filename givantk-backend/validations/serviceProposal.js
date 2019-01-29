const isEmpty = require('./assets/is-empty');
const Validator = require('validator');

module.exports = function validateServiceProposal(data) {
  let errors = {};

  // For required fields
  data.proposal = !isEmpty(data.proposal) ? data.proposal : '';

  if (!Validator.isLength(data.proposal, { min: 2, max: 500 })) {
    errors.proposal = 'Proposal must be between 10 and 500 characters';
  }

  if (Validator.isEmpty(data.proposal)) {
    errors.proposal = 'Proposal is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
