const express = require('express')
const router=express.Router()
var admin = require("firebase-admin");
let db=admin.firestore();



router.post('/delete',async (req,res) => {
    await db.collection('user').doc(req.body.user.name).delete()
    res.json({message:'done'});
  })
  
module.exports=router;