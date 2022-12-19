const mongoose = require('mongoose')

const userSchema= new mongoose.Schema({
name : String,
age : Number,
email :{type:String,required:true,unique:true}
})

module.exports = mongoose.model('Profils',userSchema) // users collection dans mongodb