const mongoose = require('mongoose');

const URI = 'mongodb://localhost';
const DB = 'sos-produtor';

mongoose.set('debug', true);

mongoose.connect(`${URI}/${DB}`)
  .then(() => console.log(`API connected at ${DB} database`))
  .catch((err) => console.log(err));
