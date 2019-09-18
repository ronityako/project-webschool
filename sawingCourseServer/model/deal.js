const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    id: Number,
    categoryId: Number,
    name: String,
    price: String,
    colorId:Number,
    amount:Number
})

const DealSchema = new Schema({
    fullName: String,
    phone: String,
    date: String,
    paymentMethod: String,
    products: [{
        type: Product
    }],
    subTotal: Number
});

module.exports = mongoose.model('deals', DealSchema);