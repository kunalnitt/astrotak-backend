var mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({}, { strict: false })
var Question = module.exports = mongoose.model('question', questionSchema);
module.exports.get = function (callback, limit) {
    Question.find(callback).limit(limit);
}
