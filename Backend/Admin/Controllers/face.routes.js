const express = require('express');
const { FaceModel } = require('../Models/face.model');

const faceRouter = express.Router();

faceRouter.use(express.json())

faceRouter.get('/',async(req,res)=>{
    const query = req.query
    try{
        const faces = await FaceModel.find(query)
        res.send(faces)
    }catch(err){
        res.send(err)
    }
})
faceRouter.post('/add',async(req,res)=>{
    const payload = req.body
    try{
        const face = new FaceModel(payload)
        await face.save()
        res.send("face added !")
    }catch(err){
        res.send(err)
    }
})
faceRouter.post('/addjson',async(req,res)=>{
    const payload = req.body
    // res.send(payload)
    // console.log(payload)
    try{
        await FaceModel.insertMany(payload)
        res.send("json added !")
    }catch(err){
        res.send(err)
    }
})
faceRouter.patch('/update/:id',async(req,res)=>{
    const ID = req.params.id
    const payload = req.body
   
    try{
            await FaceModel.findByIdAndUpdate({"_id":ID},payload)
            res.send("updated the face !")  
    }catch(err){
        res.send("Somthing went wrong while updating !")
    }
})
faceRouter.delete('/delete/:id',async(req,res)=>{
    const ID = req.params.id
    try{
            await FaceModel.findByIdAndDelete({"_id":ID})
            res.send("Deleted the face !")
        
    }catch(err){
        res.send("Somthing went wrong while Deleting !")
    }
})


module.exports = {
    faceRouter
}