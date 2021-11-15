const mongoose = require('mongoose');

const { Schema } = mongoose;

const producer = new Schema({
  name: String,
  image: String,
  cost: String,
  rate: String,
  location: Object,
  resources: Object,
  seller_id: String,
});

module.exports = mongoose.model('Producer', producer);
