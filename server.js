const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()
const MongodbUrl = process.env.Url
mongoose.connect(MongodbUrl)
        .then(()=>{console.log('Database Connected Successfully')})
        .catch(()=>{console.log('Database DisConnected')})
const Port = process.env.port
app.listen((Port)=>{
    console.log(`listening on port ${Port}`)
})