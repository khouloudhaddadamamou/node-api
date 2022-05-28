require('dotenv').config()
const express = require ('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())

//configuring routes
const allRoutes = require('./routes/routes.js')
app.use(allRoutes)

//db Connection
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error'));
db.once('open',function(){
console.log('DB connected')
});
app.listen(process.env.PORT,()=>{
    console.log('listening on port '+process.env.PORT)
})