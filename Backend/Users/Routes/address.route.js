const express = require('express');
const { UserModel } = require('../Models/user.model');
const addressRouter = express.Router();

addressRouter.use(express.json())

addressRouter.get('/:id',async(req,res)=>{
    const id=req.params.id
    try{
       const person =  await UserModel.findById({"_id":id})
        res.send({"msg":"Showing address Successfuly!","address":person.address})

    }catch(err){
        res.send(err)
    }
})

addressRouter.post('/:id',async(req,res)=>{
    const id=req.params.id
    const payload = req.body
    try{
       const person =  await UserModel.findById({"_id":id})
       person.address.push(payload)
       person.save()
        res.send({"msg":"added the address Successfuly!","address":person.address})

    }catch(err){
        res.send(err)
    }
})
addressRouter.delete('/:id/:num',async(req,res)=>{
    const id=req.params.id
    const num=req.params.num
    try{
       const person =  await UserModel.findById({"_id":id})
       const newCart = person.address.splice(num,1)
       person.save()
        res.send("Address deleted")
    }catch(err){
        res.send(err)
    }
})


module.exports={
    addressRouter
}