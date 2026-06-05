const express =require('express');
const app=express();
const port=3000;
const userRoutes = require('./routes/userRoutes');
const userModel=require('./models/userModel');
const db=require('./db');
const connectDB = require('./db');
require('dotenv').config();

app.use(express.json());
connectDB();
app.use('/',userRoutes);


app.listen(port,()=>{
    console.log("connected to port:",port)
})

