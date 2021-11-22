const JWT = require('jsonwebtoken');

require('dotenv');

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
    const producer = (await Producer.findById(id))._doc;
    const products = await Product.find({ producer_id: id }).populate('producer_id', 'seller_id');

    return { ...producer, products };
  } catch (error) {
    console.log(error);
    return error;
  }
};

const create = async ({
  name, password, email, phone, image, seller_id, location, start_date,
}) => {
  const encrypt = JWT.sign(password, process.env.JWT_SECRET);

  try {
    const newProducer = new Producer({
      name, email, phone, image, seller_id, password: encrypt, location, start_date,
    });

    const producerExists = await Producer.findOne({ email });

    if (producerExists) return { message: 'Producer exists' };

    const producer = await newProducer.save();

    return producer;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const remove = async ({ id }) => {
  try {
    const producer = await Producer.findById(id);
    if (!producer) return { code: 404, message: 'Not found. Try again.' };

    const removedProducer = await Producer.remove({ _id: id });

    return removedProducer;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const update = async ({ id }, {
  name, image, seller_id, location, phone,
}) => {
  try {
    // eslint-disable-next-line no-param-reassign
    if (location) delete location.password;

    const producer = await Producer.findById(id);
    if (!producer) return { code: 404, message: 'Not found. Try again.' };

    const updatedProducer = await Producer.findOneAndUpdate({ _id: id }, {
      name, image, phone, location, seller_id,
    }, { new: true });

    return updatedProducer;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = {
  getAll,
  getById,
  create,
  remove,
  update,
};
