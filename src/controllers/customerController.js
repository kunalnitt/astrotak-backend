Customer = require('./../models/customerModel');

exports.all = function(req,res) {
    Customer.find({},function(err,customers){
        if(err){
            res.json({
                status:'err',
                message:'err'
            });
        }else{
            res.json({
                status: "Sucess",
                message: 'Customers retreived sucessfully',
                data: customers
            })
        }
    })
}