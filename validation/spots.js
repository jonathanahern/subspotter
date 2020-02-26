const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateSpotInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : '';
  data.body = validText(data.body) ? data.body : '';

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field cannot be empty';
  }

  if (Validator.isEmpty(data.body)) {
    errors.body = 'Body field cannot be empty';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};