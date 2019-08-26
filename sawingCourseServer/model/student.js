const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Payment = new Schema({
    date: String,
    amount: Number,
    way: String
})

const StudentSchema = new Schema({
    id: Number, 
    fullName: String,
    phone: String,
    mobile: String,
    school: String,
    class: String,
    group: Number,
    startDate: String,
    payments: [{
        type: Payment
    }]
});

module.exports = mongoose.model('students', StudentSchema);