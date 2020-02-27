const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  created_spots: [{
    type: Schema.Types.ObjectId, 
    ref: 'Spots'
  }]
})

module.exports = User = mongoose.model('User', UserSchema);