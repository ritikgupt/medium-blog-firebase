const express = require('express')
const router=express.Router()
var admin = require("firebase-admin")
const saltedMd5=require('salted-md5')
const path=require('path')
const multer=require('multer')
const upload=multer({storage: multer.memoryStorage()})
let bucket = admin.storage().bucket()




router.post('/upload',upload.single('file'),async(req,res)=>{
    const name = saltedMd5(req.file.originalname, 'SUPER-S@LT!')
    const fileName = name + path.extname(req.file.originalname)
    await bucket.file(fileName).createWriteStream().end(req.file.buffer)
    res.send('done');
  })
module.exports=router;
  