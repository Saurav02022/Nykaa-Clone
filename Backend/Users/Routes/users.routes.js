const express = require('express')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const { UserModel } = require('../Models/user.model');
const { AdminModel } = require('../../Admin/Models/admin.model');
const userRouter = express.Router();

userRouter.use(express.json())


userRouter.get('/',async(req,res)=>{
    try{
       const users = await UserModel.find()
        res.send(users)
    }catch(err){
        res.send(err.message)
    }
})

userRouter.post('/register',async(req,res)=>{
    const {name,email,phone,password} = req.body;

    try{
        let user=await UserModel.find({email})
        const admin = await AdminModel.findById({"_id":"63ca91895a0eb8269540a17d"})
        const blockperson=admin.blockeduser
        
       const filtper = blockperson.filter((el)=>{
            return el.email===email
        })
        if(filtper.length===0){
            if(user.length===0){
                bcrypt.hash(password, 5, async(err, hash)=> {
                    if(err){
                        console.log(err)
                    }else{
                        const user = new UserModel({name,email,password:hash,phone})
                        await user.save()
                        res.send("Successfully Registered ! Please Login !!")
                    }
                });
            }else{
                res.send("Already Registerd ! Please Login !")
            }
        }else{
            res.send("You are blocked by admin !!!")
        }
        
        
    }catch(err){
        res.send(err)
    }
})
userRouter.post('/login',async(req,res)=>{
    const {email,password} = req.body;

    try{
        const user = await UserModel.find({email:email})
        if(user.length>0){
            bcrypt.compare(password, user[0].password, async(err, result) => {
                if(result){
                    var token = jwt.sign({ userID:user[0]._id }, 'newuser');
                    res.send({"msg":"Logged in !","usertoken":token,"id":user[0]._id})
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

module.exports = {
    userRouter
}