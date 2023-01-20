const { application } = require('express')
const express = require('express')
const { connection } = require('./Admin/Config/db')
const { adminRouter } = require('./Admin/Controllers/admin.routes')
const { faceRouter } = require('./Admin/Controllers/face.routes')
const { skinRouter } = require('./Users/Controllers/skin.routes')
const { userRouter } = require('./Users/Controllers/users.routes')
const app=express()


app.use(express.json())
app.use('/users',userRouter)
app.use("/admins",adminRouter)
app.use("/face",faceRouter)
app.use("/skin",skinRouter)

app.listen('5000',async(req,res)=>{
    try{
        await connection
        console.log("Connected to db")
    }catch(err){
        console.log(err)
    }
    console.log("Running on port 5000")
})