Astro = require('./../models/astroModel');

exports.all = function(req,res) {
    Astro.find({},function(err,astros){
        if(err){
            res.json({
                status:'err',
                message:'err'
            });
        }else{
            res.json({
                status: "Sucess",
                message: 'Astros retreived sucessfully',
                data: astros
            })
        }
    })
}