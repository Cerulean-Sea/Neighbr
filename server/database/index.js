const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost:27017/neighbr';

const db = mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Connected to database!'))
  .catch(err => console.log(err));

module.exports = db;