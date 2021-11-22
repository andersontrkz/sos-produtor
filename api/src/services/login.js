const JWT = require('jsonwebtoken');
const Producer = require('../models/producer');
const Product = require('../models/product');

require('dotenv');

const loginByEmail = async ({ email, password }) => {
  try {
    const producer = await Producer.findOne({ email });
    const { password: token, _id } = producer;

    const decrypt = JWT.verify(token, process.env.JWT_SECRET);

    if (decrypt !== password) return { code: 404, message: 'Not found. Try again.' };

    const products = await Product.find({ producer_id: _id }).populate('producer_id', 'seller_id');

    return { ...producer._doc, products };
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = {
  loginByEmail,
};
