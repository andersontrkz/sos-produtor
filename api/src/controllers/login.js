const router = require('express').Router();

const { loginByEmail } = require('../services/login');

router.post('/', async (req, res) => {
  const login = await loginByEmail(req.body);

  return res.status(200).json(login);
});

module.exports = router;
