const express = require('express')
const { connection } = require('./Admin/Config/db')
const { adminRouter } = require('./Admin/Routes/admin.routes')
const { addressRouter } = require('./Users/Routes/address.route')
const { cartRouter } = require('./Users/Routes/cart.route')
const { faceRouter } = require('./Users/Routes/face.routes')
const { skinRouter } = require('./Users/Routes/skin.routes')
const { userRouter } = require('./Users/Routes/users.routes')
require('dotenv').config()
const app=express()

app.use(express.json())
app.use('/users',userRouter)
app.use("/admins",adminRouter)
app.use("/face",faceRouter)
app.use("/skin",skinRouter)
app.use("/cart",cartRouter)
app.use("/address",addressRouter)

app.listen(process.env.port,async(req,res)=>{
    try{
        await connection
        console.log("Connected to db")
    }catch(err){
        console.log(err)
    }
    console.log(`Running on port ${process.env.port}`)
})