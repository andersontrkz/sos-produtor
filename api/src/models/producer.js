const mongoose = require('mongoose');

const { Schema } = mongoose;

const producer = new Schema({
  name: String,
  image: String,
  email: String,
  cost: String,
  rate: Number,
  location: Object,
  resources: Object,
  seller_id: String,
  benefits: Object,
  password: String,
});

module.exports = mongoose.model('Producer', producer);
