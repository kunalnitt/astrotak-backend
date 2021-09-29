var mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({}, { strict: false })
var Banner = module.exports = mongoose.model('banner', bannerSchema);
module.exports.get = function (callback, limit) {
    Banner.find(callback).limit(limit);
}
