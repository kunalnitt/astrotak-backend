Report = require('./../models/reportModel');

exports.all = function(req,res) {
    Report.find({},function(err,reports){
        if(err){
            res.json({
                status:'err',
                message:'err'
            });
        }else{
            res.json({
                status: "Sucess",
                message: 'Reports retreived sucessfully',
                data: reports
            })
        }
    })
}