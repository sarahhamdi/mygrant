const mongoose = require('mongoose');

const grantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  issuer: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  // use moments.jƒs to normalize
  due: {
    type: String,
    required: true 
  },
  grantLink: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    required: true
  }, // linked to many, mongoose.Schema.Types.ObjectId
  status: {
    type: Number,
    // required: true
  }, // linked to 4, define a hashmap/object in the fontend to correspond with these
  granted: {
    type: Number,
    required: true
  },
  notes: {
    type: String,
  }
  // attachment: 
});

// this is not documented well in the mongodb docs
// but the name of the collection is going to be the plural version
// of what you write here
// ie Students
const Grant = mongoose.model('Grant', grantSchema);

module.exports = Grant;