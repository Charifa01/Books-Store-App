const Users = require('../models/userModel');
const bcrypt = require('bcrypt');

module.exports.Register = async(req,res,next)=>{
    try{
        const {username , email, password} = req.body;

    //check the usernamr 
    const usernameCheck = await Users.findOne({username})
    if(usernameCheck){
        res.json({msj :'the username is already used',status : false })
    }
    //check the email 
    const emailCheck = await Users.findOne({email})
    if(emailCheck){
        res.json({msj :'the email is already used',status : false })
    }
    const hashedPassword = await bcrypt.hash(password,10)

    // add a new user
    const user = new Users({
        username ,
        email,
        password : hashedPassword
    })
    await user.save();
    return res.json({ status: true, user });
    }catch(err){
        next(err);
    }
}
module.exports.Login = async(req,res,next)=>{
    try {
        const {username , password} = req.body;
        const user = await Users.findOne({username});
        if(!user) res.json({status : false ,msj :'Incorrect password or username '})

        const isPasswordValid = await bcrypt.compare(password ,user.password)
        if(!isPasswordValid) res.json({status : false ,msj :'Incorrect password or username '})

        delete user.password;
        return res.json({ status: true, user});

    } catch (err) {
        next(err);
    }
}

