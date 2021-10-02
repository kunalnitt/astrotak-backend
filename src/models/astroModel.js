var mongoose = require('mongoose');

const astroSchema = new mongoose.Schema({}, { strict: false })
module.exports = mongoose.model('astro', astroSchema);