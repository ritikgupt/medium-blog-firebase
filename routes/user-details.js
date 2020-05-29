const express = require('express')
const router=express.Router()
var admin = require("firebase-admin");

router.post('/users/details',async(req,res)=>{
    try{const user = await admin.auth().getUserByEmail(req.body.user.email)
     res.json(user)
   }catch(e){
      res.json({message:'cannot fetch user data'})
    }
    })
    
   module.exports = router;