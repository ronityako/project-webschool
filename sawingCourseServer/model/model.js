const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ModelSchema = new Schema({
    picture: String
});

module.exports = mongoose.model('models', ModelSchema);