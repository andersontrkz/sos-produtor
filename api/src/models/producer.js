const mongoose = require('mongoose');

const { Schema } = mongoose;

const producer = new Schema({
  name: String,
  image: String,
  email: String,
  location: Object,
  seller_id: String,
  phone: Object,
  password: String,
  start_date: String,
});

module.exports = mongoose.model('Producer', producer);
