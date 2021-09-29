var mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({}, { strict: false })
var Report = module.exports = mongoose.model('report', reportSchema);
module.exports.get = function (callback, limit) {
    Report.find(callback).limit(limit);
}
