const mongoose = require('mongoose');

const orgInfoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  }, // eg. org name
  text: {
    type: String,
    required: true
  } // eg. OCASI
});

const orginfo = mongoose.model('OrgInfo', orgInfoSchema);

module.exports = orginfo;