
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


 let linkSchema = new Schema({
    link: { type:String, required:true},
    state: { type:Boolean, required:true},
 });
 

 let linkModel=mongoose.model('linkModel',linkSchema);
 module.exports=linkModel;
