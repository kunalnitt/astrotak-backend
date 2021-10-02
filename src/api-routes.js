const router = require('express').Router();

// Import controllers
var astroController = require('./controllers/astroController');
var bannerController = require('./controllers/bannerController');
var horoscopeController = require('./controllers/horoscopeController');
var questionController = require('./controllers/questionController');
var reportController = require('./controllers/reportController');
var customerController = require('./controllers/customerController');

router.get('/',(req,res) => {
    res.json({
        status: 'Api is Working',
        message:'Welcome to Astrotak APIs',
    });
});

router.route('/astro')
    .get(astroController.all)

router.route('/banner')
    .get(bannerController.all)

router.route('/horoscope')
    .get(horoscopeController.all)

router.route('/question')
    .get(questionController.all)

router.route('/report')
    .get(reportController.all)

router.route('/customer')
    .get(customerController.all)

module.exports = router;