import axios from 'axios';

const URL = 'http://localhost:3001/transaction';

export const createTransaction = async (transaction) => {
  if (transaction) {
    const request = await axios.post(URL, { transaction });
    return request.data.id;
  }
  return false;
};

export const getTransaction = async () => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer TEST-0cea4c24-eee4-4f4d-a6cd-1bf68d25f9d0',
  };

  const dataString = '{"site_id":"MLB"}';

  const options = {
    url: 'https://api.mercadopago.com/users/test_user',
    method: 'POST',
    headers,
    body: dataString,
  };
  console.log(options);

  // console.log(await axios.post(URL, options, headers));
};
