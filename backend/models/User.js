const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username : {
        type : String
    },
    password:{
        type : String
    },
    contact:{
        type : Number
    },
    email:{
        type: String
    },
   
    doj:{
        type: Date
    }

}, {timestamps: true})

const User = mongoose.model('User', userSchema)
module.exports = User