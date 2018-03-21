const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  organization: { type: Schema.Types.ObjectId, ref: 'Organization' } //mongoose.Schema.Types.ObjectId linked to orgInfo
});

const user = mongoose.model('User', userSchema);

module.exports = user;