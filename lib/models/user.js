const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
  // organization: {
  //   type: String,
  //   required: true
  // } //mongoose.Schema.Types.ObjectId linked to orgInfo
});

const user = mongoose.model('User', userSchema);

module.exports = user;