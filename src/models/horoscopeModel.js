var mongoose = require('mongoose');

const horoscopeSchema = new mongoose.Schema({}, { strict: false })
var Horoscope = module.exports = mongoose.model('horoscope', horoscopeSchema);
module.exports.get = function (callback, limit) {
    Horoscope.find(callback).limit(limit);
}
