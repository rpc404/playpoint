const mongoose = require('mongoose')

const RoomSchema = mongoose.Schema({
    room_id: {
        type:String,
        required:true,
        },
    subscribers:Array,
})

module.exports = mongoose.model("rooms",RoomSchema);