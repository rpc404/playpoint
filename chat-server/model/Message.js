const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
    room_id:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true,
    },
    sender:{
        type:String,String,
        required:true,
    },
    timestamp:String,
})

module.exports = mongoose.model("messages",messageSchema);