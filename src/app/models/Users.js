const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Users= new Schema({
    name: {type:String, maxlength:50,required:true},
    email: {type:String, required:true},
dateOfBirth: {type:Date, required :true},
password:{type:String,required:true},
phoneNumber:{type:Number, maxlength:10,required:true},

},{timestamps:true});
module.exports = mongoose.model('Users',Users);