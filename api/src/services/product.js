const Product = require('../models/product');

const getAll = async () => {
  try {
    const products = await Product.find();

    return products;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getById = async ({ id }) => {
  try {
    const product = await Product.findById(id);

    return product;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const create = async ({
  name, image, price, amount, unit, producer_id, free_delivery,
}) => {
  try {
    // eslint-disable-next-line no-param-reassign
    if (image === '') image = 'https://www.inovegas.com.br/site/wp-content/uploads/2017/08/sem-foto.jpg';
    const newProduct = new Product({
      name, image, price, producer_id, free_delivery, measurement: { amount, unit },
    });

    const product = await newProduct.save();

    return product;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const remove = async ({ id }) => {
  try {
    const product = await Product.findById(id);
    if (!product) return { code: 404, message: 'Not found. Try again.' };

    const removedProduct = await Product.remove({ _id: id });

    return removedProduct;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const update = async ({ id }, {
  name, image, price, amount, unit, producer_id, free_delivery,
}) => {
  try {
    const producer = await Product.findById(id);
    if (!producer) return { code: 404, message: 'Not found. Try again.' };

    const updatedProducer = await Product.findOneAndUpdate({ _id: id }, {
      name, image, price, producer_id, free_delivery, measurement: { amount, unit },
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
