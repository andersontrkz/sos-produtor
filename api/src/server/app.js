const express = require('express');
const cors = require('cors');

require('../models/connection');

const app = express();

app.use(cors());

app.use(express.json());

module.exports = app;
