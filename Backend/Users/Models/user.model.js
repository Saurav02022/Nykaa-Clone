const mongoose = require("mongoose")

const userSchema=mongoose.Schema({
    name:String,
    phone:Number,
    email:String,
    password:String,
    address:Array,
    cart:Array
})

const UserModel = mongoose.model('user',userSchema)

module.exports={
    UserModel
}