Banner = require('./../models/bannerModel');

exports.all = function(req,res) {
    Banner.get(function(err,banners){
        if(err){
            res.json({
                status:'err',
                message:'err'
            });
        }else{
            res.json({
                status: "Sucess",
                message: 'Banners retreived sucessfully',
                data: banners
            })
        }
    })
}