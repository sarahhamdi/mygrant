const mongoose = require('mongoose');

const orgInfoSchema = new mongoose.Schema({
  title: String, // eg. org name
  text: String  // eg. OCASI
});

const orginfo = mongoose.model('OrgInfo', orgInfoSchema);

module.exports = orginfo;