const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ModelSchema = new Schema({
    id: Number,
    picture: String
});

module.exports = mongoose.model('models', ModelSchema);