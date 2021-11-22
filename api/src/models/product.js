const mongoose = require('mongoose');

const { Schema } = mongoose;

const product = new Schema({
  producer_id: {
    type: Schema.Types.ObjectId,
    ref: 'Producer',
  },
  name: String,
  image: String,
  price: Number,
  rate: Number,
  measurement: Object,
  benefits: Object,
});

module.exports = mongoose.model('Product', product);
