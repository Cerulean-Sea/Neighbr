const mongoose = require('mongoose');
const config = require('./config');

const db = mongoose.connect(config.mongoUri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Connected to database!'))
  .catch(err => console.log(err));

module.exports = db;