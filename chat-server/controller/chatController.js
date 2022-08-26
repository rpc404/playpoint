// @desc  get all rooms
//@route  GET /chats/all-room
const Room = require('../model/Room')
const Message = require('../model/Message')



const asyncHandler = (fn) => (req, res, next) =>
	Promise.resolve(fn(req, res, next)).catch(next);

exports.getAllRoom = asyncHandler(async (req, res, next) => {
	 const rooms = await Room.find();
     return rooms;
});

// @desc  create new Room
//@route  POST /chats/create-new-room

exports.createRoom = asyncHandler(async (req, res, next) => {
	const room = await Room.create(req.body);
	res.status(201).json({
		status: true,
		data: room,
	});
});

exports.getRoomChat = asyncHandler(async (req,res,next)=>{
    const room = await Room.findOne({room_id: req.params.id})
    if(room){
        const chat = await Message.find({room_id:room._id})
        res.status(200).json({
            status: true,
            chat: chat,
        });
    }
    res.status(200).json({
        status: false,
        chat: "No message found",
    });
})

exports.addChat = asyncHandler(async (req,res,next)=>{
    const data = { message, sender, timestamp } = req.body;
    let room = await Room.findOne({room_id: req.params.id})
    if(!room){
	room = await Room.create({room_id: req.params.id});
    }
    data.room_id = room._id
    const chat = await Message.create(data)
    chat.room_id = req.params.id;
    res.status(201).json({
		status: true,
		chat: chat,
	});
})



exports.deleteRoom = asyncHandler(async (req,res,next)=>{
    const chat = await Message.deleteOne({room_id: req.params.id})
    res.status(201).json({
		status: true,
		chat: chat,
	});
})

// @desc  subscribe to a room
//@route  POST /chats/subscribe/room-id
exports.subscribe = asyncHandler(async (req,res,next)=>{
    const user = req.user;
    await Room.updateOne({room_id: req.params.id},{
        $push:{
            subscribers: user
        }
    })
    res.status(201).json({
		status: true,
	});
})