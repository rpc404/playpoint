import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import ChatBox from "./components/ChatBox";
import ChatList from "./components/ChatList";
import "./style.css";
import { useNavigate } from "react-router-dom"
import Pusher from 'pusher-js'
import axios from "axios"

const User = {
  uid:parseInt(Math.random()*1000),
  name: "demo"
}

export default function Chatroom() {
  let navigation = useNavigate();
  const {room_id} = useParams();
  const [activeRoom, setActiveRoom] = useState(0)
  const [Messages, setMessages] = useState([])

  useEffect(()=>{
    if(room_id){
        axios.get(`http://127.0.0.1:8000/chats/${room_id}`).then(res=>{
          if(res.data.status){
            setMessages(res.data.chat)
          }else{
            setMessages([])
          }
        })
    }
  },[room_id])

  useEffect(() => {

    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;
    const pusher = new Pusher('186e3ce0d881032f7ee9', {
        cluster: 'ap2',
        key: '186e3ce0d881032f7ee9',
        secret: '5585844b15388803f6e7',
        encrypted: true
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function (data) {
      console.log(data)
        if(data.room_id===room_id){
            if(data.sender!==User.uid){
                setMessages([...Messages, data]);
            }
        }
    });
    return () => {
        channel.unbind_all()
        channel.unsubscribe()
    }

}, [Messages, room_id])


  return (
    <div className="chatroom__container">
      <Helmet>
        <title>Chats | Playpoint</title>
      </Helmet>
      {/* chat list */}
      <ChatList setActive={setActiveRoom} />
      {/* chat box */}
      <ChatBox chats={Messages} room_id={room_id} />
      <div className="rightbar">
        <div className="leaderboards">
          <h3>
            <i className="ri-bar-chart-grouped-line"></i> Leaderboards
          </h3>

          <div className="leaderboardItems">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((data) => {
              return (
                <div className="item" key={data}>
                  <p>Football / Worldcup</p>
                  <div className="topbar">
                    <div>
                      <img
                        src="https://img.freepik.com/free-vector/australia-flag-round-badge_1308-73039.jpg?w=2000"
                        alt=""
                        loading="lazy"
                      />
                      <p>Australia</p>
                    </div>
                    <span>vs</span>
                    <div>
                      <img
                        src="https://img.freepik.com/free-vector/badge-design-china-flag_1308-73070.jpg?w=2000"
                        alt=""
                        loading="lazy"
                      />
                      <p>China</p>
                    </div>
                  </div>
                  <p className="location">
                    <i className="ri-football-line"></i> Al Thumama Stadium
                  </p>

                  <div className="feeds">
                    <p>Participants</p>
                    <p>1254</p>
                  </div>
                  <div className="feeds">
                    <p>Volume</p>
                    <p>$1.4K</p>
                  </div>

                  <div className="actions">
                    <Button><i className="ri-message-3-line"></i> Join Chat</Button>
                    <Button><i className="ri-chat-poll-line"></i> Predict Now</Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
