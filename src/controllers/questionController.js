Question = require('./../models/questionModel');

exports.all = function(req,res) {
    Question.find({},function(err,questions){
        if(err){
            res.json({
                status:'err',
                message:'err'
            });
        }else{
            res.json({
                status: "Sucess",
                message: 'Questions retreived sucessfully',
                data: questions
            })
        }
    })
}