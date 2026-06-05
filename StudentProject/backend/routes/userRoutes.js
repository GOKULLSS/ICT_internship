const express=require('express');
const router=express.Router();
const userModel=require('../models/userModel');

//API for fetching or reading a data from the DB
router.get('/',async(req,res) => {
    const users = await userModel.find();
    res.json(users);
});

//API for posting the new document in the collection
router.post('/newstudent',async(req,res)=>{
    var item=req.body ;//extract the data from the request object
    const datasave=new userModel(item);
    const savedata=await datasave.save();//save data to collection
    res.send('Post successful');

});

module.exports =router;


