const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MachinesCategorySchema = new Schema({
    id: Number, 
    name: String, 
    picture: String
});

module.exports = mongoose.model('machinesCategories', MachinesCategorySchema);