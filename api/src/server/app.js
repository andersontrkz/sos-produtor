const express = require('express');
const cors = require('cors');

const routes = require('../routes');

require('../models/connection');

const app = express();

app.use(cors());
app.use(routes);

app.use(express.json());

module.exports = app;
