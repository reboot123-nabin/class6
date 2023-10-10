const User=require('../model/user_model');//user model define
const express=require('express');

// const router=require('router');
const router=express.Router();///router feature taken from express


///register code
router.post('/register',function(req,res){
    const username1=req.body.username;
    const email1=req.body.email
    const password1=req.body.password;
    const userType1=req.body.userType;
    //req data
    //object creation
    const user=new User({username:username1,email:email1,password:password1,userType:userType1});
    user.save();//save data
    res.status(200).json({message:"successful"});

})

module.exports=router;