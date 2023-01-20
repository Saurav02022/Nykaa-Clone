const mongoose = require("mongoose")

const adminSchema=mongoose.Schema({
    name:String,
    phone:Number,
    email:String,
    password:String,
    blockeduser:Array
})

const AdminModel = mongoose.model('admin',adminSchema)

module.exports={
    AdminModel
}