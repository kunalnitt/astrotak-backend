var mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({}, { strict: false })
module.exports = mongoose.model('banner', bannerSchema);