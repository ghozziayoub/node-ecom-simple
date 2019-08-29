const mongoose = require('mongoose');

//creation d'un Schema
const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

//creation d'un model
const Category = mongoose.model('category', CategorySchema);

module.exports = { Category };