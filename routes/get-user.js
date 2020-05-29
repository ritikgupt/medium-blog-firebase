const express = require('express')
const router=express.Router()
var admin = require("firebase-admin");

router.get('/user',async(req,res)=>{
    const usersResult =   await admin.auth().listUsers(1000)
    res.json(usersResult.users)
    })

module.exports=router;