var mongoose = require('mongoose');

const horoscopeSchema = new mongoose.Schema({}, { strict: false })
module.exports = mongoose.model('horoscope', horoscopeSchema);
