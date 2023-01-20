const express = require('express')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const { AdminModel } = require('../Models/admin.model');
const { UserModel } = require('../../Users/Models/user.model');
const adminRouter = express.Router();

adminRouter.use(express.json())

adminRouter.post('/register',async(req,res)=>{
    const {name,email,phone,password} = req.body;

    try{
        let admin=await AdminModel.find({email})
        if(admin.length===0){
            bcrypt.hash(password, 5, async(err, hash)=> {
                if(err){
                    console.log(err)
                }else{
                    const admin = new AdminModel({name,email,password:hash,phone})
                    await admin.save()
                    res.send("Successfully Registered ! Please Login !!")
                }
            });
        }else{
            res.send("Already Registerd ! Please Login !")
        }
        
    }catch(err){
        res.send(err)
    }
})
adminRouter.post('/login',async(req,res)=>{
    const {email,password} = req.body;

    try{
        const admin = await AdminModel.find({email:email})
        if(admin.length>0){
            bcrypt.compare(password, admin[0].password, async(err, result) => {
                if(result){
                    var token = jwt.sign({ adminID:admin[0]._id }, 'newadmin');
                    res.send({"msg":"Logged in !","admintoken":token})
                }else{
                    res.send("Wrong Credentials !")
                }
            });
        }else{
            res.send("Authentication Failed !")
        }
    }catch(err){
        res.send(err)
    }
})

adminRouter.delete('/:id',async(req,res)=>{
    const id=req.params.id
    try{
       const person =  await UserModel.findByIdAndDelete({"_id":id})
       const blockperson = await AdminModel.findById({"_id":"63ca91895a0eb8269540a17d"})
       blockperson.blockeduser.push(person)
       blockperson.save()
        res.send(blockperson)
    }catch(err){
        res.send(err)
    }
})

module.exports = {
    adminRouter
}