const server = require('./app');

require('dotenv').config();

const { PORT } = process.env;

server.listen(PORT, () => console.log(`API running at port ${PORT}`));
