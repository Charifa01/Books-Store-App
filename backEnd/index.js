const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const auth = require('./routes/auth')
const addComment = require('./routes/userRoute');

const app = express();
const port = process.env.PORT || 5001 ;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// routes

app.use('/api/auth',auth)
app.use('/api/user', addComment);

// connection with the database
mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log('Database connecting successful')
})
.catch((err)=>{
    console.log(err);
})
app.listen(port , ()=>{
    console.log(`Your Server Is Runing on ${port}`);
})