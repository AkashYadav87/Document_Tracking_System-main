const mongoose = require('mongoose')
const Schema = mongoose.Schema

const adminSchema = new Schema({
    username: {
        type: String,
        match: /^[a-zA-Z]+$/
    },
    adminname : {
        type : String,
        match: /^[a-zA-Z]+$/
    },
    password:{
        type : String
    },
    email: {
        type : String,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    }
}, {timestamps: true})

const Admin = mongoose.model('Admin', adminSchema)
module.exports = Admin
