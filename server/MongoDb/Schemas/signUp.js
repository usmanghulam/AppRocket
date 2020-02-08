const mongoose = require('mongoose');

let addUsers = mongoose.Schema({
    email: { type:String, require:true, unique: true },
    password: { type: String, require: true },
    dateTime: { type: Number, default: Date.now() }
})

module.exports = mongoose.model("users",addUsers)