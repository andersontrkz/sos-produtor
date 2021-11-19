import axios from 'axios';

const URL = 'http://localhost:3001/transaction';

export const createTransaction = async () => {
  const transaction = await axios.post(
    `${URL}`,
    {
      items: [
        {
          title: 'Meu produto',
          quantity: 1,
          unit_price: 75.76,
        },
      ],
      marketplace_fee: 2.56,
      payer: {
        name: 'João',
        surname: 'Silva',
        email: 'user@email.com',
        phone: {
          area_code: '11',
          number: '4444-4444',
        },
        identification: {
          type: 'CPF',
          number: '19119119100',
        },
        address: {
          street_name: '',
          street_number: 0,
          neighborhood: '',
          city: '',
          uf: '',
          zip_code: '',
        },
      },
      back_urls: {
        success: 'https://www.success.com',
        failure: 'http://www.failure.com',
        pending: 'http://www.pending.com',
      },
      auto_return: 'approved',
      payment_methods: {
        excluded_payment_methods: [
          {
            id: 'master',
          },
        ],
        excluded_payment_types: [
          {
            id: 'ticket',
          },
        ],
        installments: 12,
      },
      notification_url: 'https://www.your-site.com/ipn',
      statement_descriptor: 'MEUNEGOCIO',
      external_reference: 'Reference_1234',
      expires: true,
      expiration_date_from: '2016-02-01T12:00:00.000-04:00',
      expiration_date_to: '2016-02-28T12:00:00.000-04:00',
    },
  );

  return transaction.data.id;
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

getTransaction();
