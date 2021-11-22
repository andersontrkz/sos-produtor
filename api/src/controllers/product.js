const router = require('express').Router();
const {
  getAll, getById, create, remove, update,
} = require('../services/product');

router.get('/', async (_req, res) => {
  const product = await getAll();

  return res.status(200).json(product);
});

router.get('/:id', async (req, res) => {
  const products = await getById(req.params);

  return res.status(200).json(products);
});

router.post('/', async (req, res) => {
  const product = await create(req.body);

  return res.status(200).json(product);
});

router.delete('/:id', async (req, res) => {
  const product = await remove(req.params);

  return res.status(200).json(product);
});

router.put('/:id', async (req, res) => {
  const product = await update(req.params, req.body);

  return res.status(200).json(product);
});

module.exports = router;
