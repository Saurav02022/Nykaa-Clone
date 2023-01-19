const express = require('express');
const { FaceModel } = require('../../Admin/Models/face.model');

const skinRouter = express.Router();

skinRouter.use(express.json())

skinRouter.get('/',async(req,res)=>{
    const query = req.query
    try{
        const skins = await FaceModel.find(query)
        res.send(skins)
    }catch(err){
        res.send(err)
    }
})
skinRouter.get('/:id',async(req,res)=>{
    const Id = req.params.id
    try{
        const skins = await FaceModel.find({"_id":Id})
        res.send(skins)
    }catch(err){
        res.send(err)
    }
})
skinRouter.post('/add',async(req,res)=>{
    const payload = req.body
    try{
        const skin = new FaceModel(payload)
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
            await FaceModel.findByIdAndUpdate({"_id":ID},payload)
            res.send("updated the skin !")  
    }catch(err){
        res.send("Somthing went wrong while updating !")
    }
})
skinRouter.delete('/delete/:id',async(req,res)=>{
    const ID = req.params.id
    try{
            await FaceModel.findByIdAndDelete({"_id":ID})
            res.send("Deleted the skin !")
        
    }catch(err){
        res.send("Somthing went wrong while Deleting !")
    }
})


module.exports = {
    skinRouter
}