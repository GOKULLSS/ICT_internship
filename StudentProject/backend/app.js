const express =require('express');
const app=express();
const port=3000;
const cors = require('cors')
const userRoutes = require('./routes/userRoutes');
const userModel=require('./models/userModel');
const connectDB = require('./db');
require('dotenv').config();

app.use(express.json());
app.use(cors())
connectDB();
app.use('/',userRoutes);


app.listen(port,()=>{
    console.log("connected to port:",port)
})

