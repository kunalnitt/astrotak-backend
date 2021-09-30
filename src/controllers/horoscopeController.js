Horoscope = require('./../models/horoscopeModel');

exports.all = function(req,res) {
    Horoscope.find({},function(err,horoscopes){
        if(err){
            res.json({
                status:'err',
                message:'err'
            });
        }else{
            res.json({
                status: "Sucess",
                message: 'Horoscopes retreived sucessfully',
                data: horoscopes
            })
        }
    })
}