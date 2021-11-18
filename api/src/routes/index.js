const router = require('express').Router();

const producer = require('../controllers/producer');
const transaction = require('../controllers/transaction');

router.use('/producer', producer);
router.use('/transaction', transaction);

module.exports = router;
