const express = require('express')
const router=express.Router()
var admin = require("firebase-admin");
let db=admin.firestore();

router.get('/get', async (req, res) => {
  let usr=[]
   const users = await db.collection('user').get()
  if (users.docs.length > 0) {
    for (const user of users.docs) {
     usr.push(user.data())
     
  }}
  res.json(usr)
})

router.post('/get', async (req, res) => {
  let usr=[]
  console.log(req.body.user.email)
   const users = await db.collection('user').where('email', '==', req.body.user.email).get()
  if (users.docs.length > 0) {
    for (const user of users.docs) {
     usr.push(user.data())
     console.log(user.data())
     
  }}
  res.json(usr)
})

module.exports = router;