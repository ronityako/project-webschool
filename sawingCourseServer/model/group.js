const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    id: Number, 
    name: String, 
    day: String,
    maxStudents: Number
});

module.exports = mongoose.model('groups', GroupSchema);