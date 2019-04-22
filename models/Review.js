const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  venue: {
    type: String,
    required: true
  },
  score: {
    type: Number
  }
});

module.exports = Review = mongoose.model('review', ReviewSchema);
