const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  organization: {
    type: String,
    required: true
  } //mongoose.Schema.Types.ObjectId linked to orgInfo
});

const user = mongoose.model('User', userSchema);

module.exports = user;