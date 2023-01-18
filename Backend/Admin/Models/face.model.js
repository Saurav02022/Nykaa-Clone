
const mongoose = require('mongoose')

const faceSchema = mongoose.Schema({
    imgsrc:String,
    title:String,
    price:String,
    discountedprice:String,
    discount:String,
    spanned:String,
    rating:String,
    shades:String,
    preview:String
})

const FaceModel = mongoose.model('face',faceSchema)

module.exports = {
    FaceModel
}