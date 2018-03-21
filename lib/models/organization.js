const mongoose = require('mongoose');

const orgSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: Number,
    required: true
  }
});

// this is not documented well in the mongodb docs
// but the name of the collection is going to be the plural version
// of what you write here
// ie Students
const organization = mongoose.model('Organization', orgSchema);

module.exports = organization;