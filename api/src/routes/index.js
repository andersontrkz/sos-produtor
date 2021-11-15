const router = require('express').Router();

const producer = require('../controllers/producer');

router.use('/producer', producer);

module.exports = router;
