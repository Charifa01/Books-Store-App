const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username :{
            type :String,
            required :true,
            unique : true
        },
        email:{
            type : String,
            required : true,
            unique : true
        },
        password :{
            type : String,
            required : true,
        },
        theEvaluation :{
            type : String,
        }
    }
)
module.exports = mongoose.model('Users' , userSchema )