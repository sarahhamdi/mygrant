const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
  name: String,
  grants: Array //mongoose.Schema.Types.ObjectId
});

const tag = mongoose.model('Tag', tagSchema);

module.exports = tag;