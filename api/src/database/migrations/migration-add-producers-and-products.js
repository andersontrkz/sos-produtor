const Producer = require('../../models/producer');
const Product = require('../../models/product');
const producers = require('../data.json');

require('../../models/connection');

const generateSellerId = (seller) => seller.split('')
  .reduce((a, b) => {
    // eslint-disable-next-line no-param-reassign
    a = (
      // eslint-disable-next-line no-bitwise
      (a << 5) - a) + b.charCodeAt(0); return a & a;
  }, 0);

const addProducersAndProducts = async () => {
  try {
    // eslint-disable-next-line no-restricted-syntax
    for (const producer of producers) {
      const sellerId = generateSellerId(producer.name);
      // eslint-disable-next-line no-await-in-loop
      const newProducer = await new Producer({
        ...producer,
        seller_id: sellerId,
      }).save();
      const { _id } = newProducer;

      // eslint-disable-next-line no-await-in-loop
      await Product.insertMany(
        producer.products.map((p) => ({ ...p, producer_id: _id })),
      );
    }

    console.log('Migration successful');
  } catch (err) {
    console.log(err.message);
  }
};

addProducersAndProducts();
