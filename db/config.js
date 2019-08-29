var mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost:27017/ecommerce',
    { useNewUrlParser: true, useCreateIndex: true }
);

module.exports = { mongoose };