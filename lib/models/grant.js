const mongoose = require('mongoose');

const grantSchema = new mongoose.Schema({
  name: String,
  issuer: String,
  amount: Number,
  due: Date,
  applicationLink: String,
  tags: Array, // linked to many, mongoose.Schema.Types.ObjectId
  status: Number, // linked to 4, define a hashmap/object in the fontend to correspond with these
  granted: Number,
  notes: String,
  // attachment: 
});

// this is not documented well in the mongodb docs
// but the name of the collection is going to be the plural version
// of what you write here
// ie Students
const grant = mongoose.model('Grant', grantSchema);

module.exports = grant;