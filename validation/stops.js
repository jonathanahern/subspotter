const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateStops(data) {
  let errors = {};

  data.stop_name = validText(data.stop_name) ? data.stop_name : '';

  if (Validator.isEmpty(data.stop_name)) {
    errors.stop_name = 'Stop name cannot be blank';
  }

  if (Validator.isEmpty(data.lat)) {
    errors.lat = 'Latitude field cannot be blank';
  }

  if (Validator.isEmpty(data.lng)) {
    errors.lng = 'Longitude field cannot be blank';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};