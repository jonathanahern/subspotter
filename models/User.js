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
  spots: [{
    type: Schema.Types.ObjectId, 
    ref: 'Spot'
  }]
})

// UserSchema.methods.createdSpots = function(cb) {
//   Spot.find({user_id: this.id}, cb);
// }

module.exports = User = mongoose.model('User', UserSchema);