const mongoose = require('mongoose');

let chatSchema = mongoose.Schema({
    sender : { type: String, require: true },
    receiver : { type: String, require: true },
    msg: { type: String, require: true }
})

module.exports = mongoose.model('chat',chatSchema);