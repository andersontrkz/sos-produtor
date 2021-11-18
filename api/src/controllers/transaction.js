const router = require('express').Router();
const mercadopago = require('../apis/mercadopago');

router.post('/', (_req, res) => {
  const preference = {
    items: [
      {
        title: 'req.body.description',
        unit_price: Number(2000),
        quantity: Number(1),
      }, {
        title: 'req.body.description2',
        unit_price: Number(20000),
        quantity: Number(2),
      },
    ],
    back_urls: {
      success: 'http://localhost:3001/transaction/feedback',
      failure: 'http://localhost:3001/transaction/feedback',
      pending: 'http://localhost:3001/transaction/feedback',
    },
    auto_return: 'approved',
  };

  mercadopago.preferences.create(preference)
    .then((response) => {
      res.json({
        id: response.body.id,
      });
    }).catch((error) => {
      console.log(error);
    });
});

router.get('/feedback', (req, res) => {
  res.json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id,
  });
});

module.exports = router;
