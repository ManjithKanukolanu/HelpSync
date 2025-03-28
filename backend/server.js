const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const app = express()
require('dotenv').config()
const MongodbUrl = process.env.Url
mongoose.connect(MongodbUrl)
        .then(()=>{console.log('Database Connected Successfully')})
        .catch(()=>{console.log('Database DisConnected')})
const Port = process.env.port
app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'));
app.use('/css', express.static(path.join(__dirname, 'assests/css')));
app.use('/img', express.static(path.join(__dirname, 'assests/img')));
app.listen((Port)=>{
    console.log(`listening on port ${Port}`)
})