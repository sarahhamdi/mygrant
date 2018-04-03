const mongoose = require('mongoose');

const orgDetailSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  }, // eg. org name
  text: {
    type: String,
    required: true
  }, // eg. OCASI
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" }
});

const orgdetail = mongoose.model('OrgDetail', orgDetailSchema);

module.exports = orgdetail;