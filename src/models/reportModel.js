var mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({}, { strict: false })
module.exports = mongoose.model('report', reportSchema);