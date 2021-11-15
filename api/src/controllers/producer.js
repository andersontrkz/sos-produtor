const router = require('express').Router();
const { getAll, getById } = require('../services/producer');

router.get('/', async (_req, res) => {
  const producers = await getAll();

  return res.status(200).json(producers);
});

router.get('/:id', async (req, res) => {
  const producers = await getById(req.params);

  return res.status(200).json(producers);
});

module.exports = router;
