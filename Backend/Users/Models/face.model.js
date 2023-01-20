
const mongoose = require('mongoose')

const faceSchema = mongoose.Schema({
    imgsrc:String,
    title:String,
    price:Number,
    discountedprice:Number,
    discount:String,
    spanned:String,
    rating:Number,
    shades:String,
    preview:String
})

const FaceModel = mongoose.model('face',faceSchema)

module.exports = {
    FaceModel
}