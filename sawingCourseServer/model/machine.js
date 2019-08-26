const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MachineSchema = new Schema({
    id: Number,
    categoryId: Number,
    name: String, 
    picture: String,
    price: String,
    amount: Number
});

module.exports = mongoose.model('machines', MachineSchema);