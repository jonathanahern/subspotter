const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StopSchema = new Schema({
  stop_name: {
    type: String,
    required: true,
    index: true
  },
  lat: {
    type: String,
    required: true,
    index: true
  },
  lng: {
    type: String,
    required: true,
    index: true
  },
});

module.exports = Stop = mongoose.model('Stop', StopSchema);