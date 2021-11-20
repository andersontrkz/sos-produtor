const JWT = require('jsonwebtoken');
const Producer = require('../models/producer');

require('dotenv');

const { JWT_SECRET } = process.env;

const loginByEmail = async ({ email, password }) => {
  try {
    const producer = await Producer.findOne({ email });
    const { password: token } = producer;

    const decrypt = JWT.verify(token, JWT_SECRET);

    if (decrypt.password !== password) return { code: 404, message: 'Not found. Try again.' };

    return producer;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = {
  loginByEmail,
};
