const JWT = require('jsonwebtoken');

require('dotenv');

const Producer = require('../models/producer');
const Product = require('../models/product');

const { JWT_SECRET } = process.env;

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
  name, image, cost, rate, location, resources, seller_id, benefits, password, email,
}) => {
  const encrypt = JWT.sign(
    {
      password,
    },
    JWT_SECRET,
  );
  try {
    const newProducer = new Producer({
      name, image, cost, rate, location, resources, seller_id, benefits, password: encrypt, email,
    });

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
  name, image, cost, rate, location, resources, seller_id, benefits, password, email,
}) => {
  try {
    const producer = await Producer.findById(id);
    if (!producer) return { code: 404, message: 'Not found. Try again.' };

    const updatedProducer = await Producer.findOneAndUpdate({ _id: id }, {
      name, image, cost, rate, location, resources, seller_id, benefits, password, email,
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
