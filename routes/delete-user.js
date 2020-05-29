const express = require('express')
const router=express.Router()
var admin = require("firebase-admin");

router.post('/:id/delete', async(req,res) =>{
    console.log(req.params.id)
    admin.auth().deleteUser(req.params.id)
    res.json({message:'done'})
    })

module.exports = router;