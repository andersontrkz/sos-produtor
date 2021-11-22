const router = require('express').Router();
const {
  getAll, getById, create, remove, update,
} = require('../services/producer');

router.get('/', async (_req, res) => {
  const producer = await getAll();

  return res.status(200).json(producer);
});

router.get('/:id', async (req, res) => {
  const producers = await getById(req.params);

  return res.status(200).json(producers);
});

router.post('/', async (req, res) => {
  const producer = await create(req.body);

  return res.status(200).json(producer);
});

router.delete('/:id', async (req, res) => {
  const producer = await remove(req.params);

  return res.status(200).json(producer);
});

router.patch('/:id', async (req, res) => {
  const producer = await update(req.params, req.body);

  return res.status(200).json(producer);
});

module.exports = router;
