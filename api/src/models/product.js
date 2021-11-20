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
  measurement: Object,
  free_delivery: Boolean,
});

module.exports = mongoose.model('Product', product);
