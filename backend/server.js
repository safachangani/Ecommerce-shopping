require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error',(error)=>console.error(error))
db.once('open',()=>console.log("Connected to database"))

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
const shoppingRouter = require('./routes/shopping')
app.use('/shopping',shoppingRouter)

app.listen(9000,()=> console.log('server started'))