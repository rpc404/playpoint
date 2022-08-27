const Pusher = require('pusher');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')
const chatController = require('./controller/chatController');
const Room = require('./model/Room');
const Pushsubscription = require('./model/Pushsubscription')
const subscriptionHandler = require('./controller/pushController')
const webpush = require("web-push");

// deepcode ignore DisablePoweredBy: <please specify a reason of ignoring this>
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const pusher = new Pusher({
  appId: '1467435',
  key: '186e3ce0d881032f7ee9',
  secret: '5585844b15388803f6e7',
  cluster: 'ap2',
  encrypted: true
});
app.set('PORT', process.env.PORT || 8000)
app.get('/',(req,res)=> res.status(200).send("Hello from backend"));
app
	.route('/chats/create-new-room')
	.post(chatController.createRoom);
app
	.route('/chats/:id')
	.get(chatController.getRoomChat)
	.put(chatController.addChat)
	.delete(chatController.deleteRoom);
app.post(
    "/subscription",
    // protect,
    subscriptionHandler.handlePushNotificationSubscription
  );
  app.post("/subscriptionpost", subscriptionHandler.sendPushNotification);

app.listen(app.get('PORT'), () => 
  console.log('Listening at ' + app.get('PORT')))

const uri = "mongodb+srv://mongouser:BjvVA3yzZJndHXQm@cluster0.apxkyqf.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri,{
      // useCreateIndex:true,
      useNewUrlParser:true,
      useUnifiedTopology:true
  })
const db = mongoose.connection
db.once('open',()=>{
      console.log('db is connected');
      const messages = db.collection('messages')
      const changeStream = messages.watch()
      changeStream.on('change',async (change)=>{
          // console.log(change);
          if(change.operationType==='insert'){
              const details = change.fullDocument;
              const room = await Room.findById(details.room_id)
              const users = await Pushsubscription.find().all();

              pusher.trigger('messages','inserted',{
                  sender:details.sender,
                  message:details.message,
                  timestamp:details.timestamp,
                  room_id: room.room_id
              });
              users.map(function(user) {
                webpush
                    .sendNotification(
                        user,
                        JSON.stringify({
                          title: `${String(room.room_id).split('-').join(" ").toLocaleUpperCase()}`,
                          image: "",
                          tag: "new message",
                          url: "/chats/" + room.room_id,
                        }),
                    )
                    .catch(err => {
                        console.log(err);
                    });
             });
          }else{
              console.log('error on pusher');
          }
      })
})
