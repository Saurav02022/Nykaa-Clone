const express = require('express');
const { SkinModel } = require('../Models/skin.model');

const skinRouter = express.Router();

skinRouter.use(express.json())

skinRouter.get('/',async(req,res)=>{
    try{
        const skins = await SkinModel.find()
        res.send(skins)
    }catch(err){
        res.send(err)
    }
})

skinRouter.get('/priceasc',async(req,res)=>{
    try{
        const faces = await SkinModel.find().sort({price:1})
        res.send(faces)
    }catch(err){
        res.send(err)
    }
})
skinRouter.get('/pricedesc',async(req,res)=>{
    try{
        const faces = await SkinModel.find().sort({price:-1})
        res.send(faces)
    }catch(err){
        res.send(err)
    }
})
skinRouter.get('/ratingasc',async(req,res)=>{
    try{
        const faces = await SkinModel.find().sort({rating:1})
        res.send(faces)
    }catch(err){
        res.send(err)
    }
})
skinRouter.get('/ratingdesc',async(req,res)=>{
    try{
        const faces = await SkinModel.find().sort({rating:-1})
        res.send(faces)
    }catch(err){
        res.send(err)
    }
})
// ADMIN CRUD
skinRouter.get('/:id',async(req,res)=>{
    const Id = req.params.id
    try{
        const skins = await SkinModel.find({"_id":Id})
        res.send(skins)
    }catch(err){
        res.send(err)
    }
})
skinRouter.post('/addjson',async(req,res)=>{
    const payload = req.body
    try{
        await SkinModel.insertMany(payload)
        res.send("json added !")
    }catch(err){
        res.send(err)
    }
})
skinRouter.post('/add',async(req,res)=>{
    const payload = req.body
    try{
        const skin = new SkinModel(payload)
        await skin.save()
        res.send("skin added !")
    }catch(err){
        res.send(err)
    }
})
skinRouter.patch('/update/:id',async(req,res)=>{
    const ID = req.params.id
    const payload = req.body
    try{
            await SkinModel.findByIdAndUpdate({"_id":ID},payload)
            res.send("updated the skin !")  
    }catch(err){
        res.send("Somthing went wrong while updating !")
    }
})
skinRouter.delete('/delete/:id',async(req,res)=>{
    const ID = req.params.id
    try{
            await SkinModel.findByIdAndDelete({"_id":ID})
            res.send("Deleted the skin !")
        
    }catch(err){
        res.send("Somthing went wrong while Deleting !")
    }
})


module.exports = {
    skinRouter
}