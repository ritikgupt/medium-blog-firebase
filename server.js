const express=require('express')
const port = process.env.PORT || 3000
const compression=require('compression')
const path=require('path')
const app = express()
require('dotenv').config()
app.use(express.urlencoded({extended:true}))
app.use(express.json());
// view engine setup
app.set('views', path.join(__dirname, 'static', 'views'))
app.set('view engine', 'ejs')
app.use(compression())
app.use('/public', express.static(path.join(__dirname, 'static', 'public')))

//firebase configuration
var admin = require("firebase-admin");
const firebase = require('firebase')

var serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-project-1-58a04.firebaseio.com",
  storageBucket: process.env.BUCKET_URL
});
app.locals.bucket = admin.storage().bucket()
//routes

const uploadRoutes=require('./routes/upload')
const getRoutes=require('./routes/get-route')
const setRoutes=require('./routes/set-route')
const addRoutes=require('./routes/add-route')
const updateRoutes=require('./routes/update-route')
const deleteRoutes=require('./routes/delete-route')
const userdetailsRoutes=require('./routes/user-details')
const usersignRoutes=require('./routes/user-sign')
const userupdateRoutes=require('./routes/update-user')
const userdeleteRoutes=require('./routes/delete-user')
const usercreateRoutes=require('./routes/create-user')
const usergetRoutes=require('./routes/get-user')
app.use(uploadRoutes)
app.use(getRoutes)
app.use(setRoutes)
app.use(addRoutes)
app.use(updateRoutes)
app.use(deleteRoutes)
app.use(userdetailsRoutes)
app.use(usersignRoutes)
app.use(userupdateRoutes)
app.use(userdeleteRoutes)
app.use(usercreateRoutes)
app.use(usergetRoutes)

app.listen(port, (req,res)=>{
  console.info(`Running on ${port}`)
})