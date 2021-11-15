const Producer = require('../models/producer');
const Product = require('../models/product');

const getAll = async () => {
  try {
    const producers = await Producer.find();

    return producers;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getById = async ({ id }) => {
  try {
    const producer = await Producer.findById(id);
    const products = await Product.find({ producer_id: id });

    // eslint-disable-next-line no-underscore-dangle
    return { ...producer._doc, products };
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = {
  getAll,
  getById,
};
