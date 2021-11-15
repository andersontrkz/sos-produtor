const Producer = require('../../models/producer');
const Product = require('../../models/product');
const producers = require('../data.json');

require('../../models/connection');

const addProducersAndProducts = async () => {
  try {
    // eslint-disable-next-line no-restricted-syntax
    for (const producer of producers) {
      // eslint-disable-next-line no-await-in-loop
      const newProducer = await new Producer(producer).save();
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
