const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:String,
    age:Number,
    department:String,
    mark:Number
});
module.exports=mongoose.model('users',userSchema);
