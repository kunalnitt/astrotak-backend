var mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({}, { strict: false })
module.exports = mongoose.model('customer', customerSchema);