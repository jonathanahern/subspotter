const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SpotSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true,
    index: true
  },
  stop_id: {
    type: String,
    required: true,
    index: true
  },
});

module.exports = Spot = mongoose.model('Spot', SpotSchema);