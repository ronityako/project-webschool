const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductsCategorySchema = new Schema({
    id: Number, 
    name: String, 
    picture: String
});

module.exports = mongoose.model('productsCategories', ProductsCategorySchema);