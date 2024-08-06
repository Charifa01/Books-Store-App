const Users = require('../models/userModel');

module.exports.addComment = async(req,res,next)=>{
const {id , comment} = req.body;
    try{
        const user = await Users.findById(id);
        if(user){
           const updatedUser = await Users.findByIdAndUpdate(id,{$set : {theEvaluation : comment}});
           res.status(200).json(updatedUser);
        }else{
            res.status(404).json('comment not added');
        }
    }
    catch(err){
        next(err);
    }
 }

 module.exports.getUsers = async(req , res, next)=>{
    try{
        const users = await Users.find();
        res.status(200).json(users);
    }catch(err){
        next(err)
    }
 }