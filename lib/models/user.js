const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  organization: {
    type: String,
  } //mongoose.Schema.Types.ObjectId linked to orgInfo
});

userSchema.pre('save', function (next) {
  const user = this
  if (user.isModified('password') || user.isNew) {
    bcrypt.hash(user.password, 10, (err, hash) => {
      if (err) {
        return next(err)
      }
      user.password = hash
      next()
    })
  } else {
    return next()
  }
})

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password)
}

const User = mongoose.model('User', userSchema);

module.exports = User;