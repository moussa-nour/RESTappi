const mongoose = require("mongoose")
const userSchema=mongoose.Schema({
    name:String,
    email:{type:String,required:true},
    number:Number,
    address:String,
})

const User=mongoose.model("user",userSchema)
module.exports=User