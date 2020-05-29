const express = require('express')
const router=express.Router()
var admin = require("firebase-admin")
const bcrypt=require('bcrypt')
const saltRounds = 10;

router.post('/user',async(req,res) => {
    await bcrypt.hash(req.body.user.password,saltRounds,(err,hash)=>{
        console.log(hash)
   try {  admin.auth().createUser({
      email: req.body.user.email,
    emailVerified: false,
    phoneNumber:req.body.user.phone,
    password:hash,
    displayName:req.body.user.name,
    disabled: false
    })
    res.json({message:'User Created'})
   } catch(e){
     console.log(e)
     res.json({message:'Error creating user'})
   }
  })
  })
  module.exports = router;