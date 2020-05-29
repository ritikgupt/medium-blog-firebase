const express = require('express')
const router=express.Router()
var admin = require("firebase-admin");


router.post('/:id/update',async(req,res) => {
    try {const user = await admin.auth().updateUser(req.params.id,{
      email: req.body.user.email,
      emailVerified: false,
      phoneNumber:req.body.user.phone,
      password:req.body.user.password,
      displayName:req.body.user.name,
      disabled:false
      })
      res.json(user)
    } catch(e){
      res.json({message:e})
    }
     })
    
     module.exports = router