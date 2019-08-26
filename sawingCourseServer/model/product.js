const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ColorSchema = new Schema({
    colorId: Number,
    colorName: String,
    colorHex: String
})

const ProductSchema = new Schema({
    id: Number,
    categoryId: Number,
    name: String, 
    picture: String,
    price: String,
    colors:  [{
        type: ColorSchema
    }],
    amount: [{
        type: Number
    }]
});

module.exports = mongoose.model('products', ProductSchema);