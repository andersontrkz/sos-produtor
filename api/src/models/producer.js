const mongoose = require('mongoose');

const { Schema } = mongoose;

const producer = new Schema({
  name: String,
  rate: String,
  image: String,
  location: Object,
  category: String,
  seller_id: String,
});

module.exports = mongoose.model('Producer', producer);
