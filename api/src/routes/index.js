const router = require('express').Router();

const producer = require('../controllers/producer');
const product = require('../controllers/product');
const transaction = require('../controllers/transaction');
const login = require('../controllers/login');

router.use('/producer', producer);
router.use('/product', product);
router.use('/transaction', transaction);
router.use('/login', login);

module.exports = router;
