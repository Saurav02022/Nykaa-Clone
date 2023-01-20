
const mongoose = require('mongoose')

const skinSchema = mongoose.Schema({
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

const SkinModel = mongoose.model('skin',skinSchema)

module.exports = {
    SkinModel
}