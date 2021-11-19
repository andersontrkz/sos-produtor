const router = require('express').Router();
const mercadopago = require('../apis/mercadopago');

router.post('/', (req, res) => {
  const { transaction } = req.body;
  mercadopago.preferences.create(transaction)
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
