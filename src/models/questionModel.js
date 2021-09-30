var mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({}, { strict: false })
module.exports = mongoose.model('question', questionSchema);
