import React from "react";
import axios from "axios";
import Pusher from "pusher-js";
import "./style.css";
import ChatList from "./components/ChatList";
import ChatBox from "./components/ChatBox";

export default function Chatroom() {
  // const [text, setText] = React.useState("");
  // const [username, setUsername] = React.useState("");
  // const [chats, setChats] = React.useState([]);

  // const handleTextChange = (e) => {
  //   if (e.keyCode === 13) {
  //     const payload = {
  //       username: username,
  //       message: text,
  //     };
  //     axios.post("http://localhost:8000/message", payload);
  //   } else {
  //     setText(e.target.value);
  //   }
  // };

  // React.useEffect(() => {
  //   const username = window.prompt("Username: ", "Anonymous");
  //   setUsername(username);
  //   const pusher = new Pusher("186e3ce0d881032f7ee9", {
  //     cluster: "ap2",
  //     encrypted: true,
  //   });
  //   const channel = pusher.subscribe("chat");
  //   channel.bind("message", (data) => {
  //     setChats([...chats, data]);
  //   });
  // }, []);

  return (
    <div className="chatroom__container">
      {/* <ChatList chats={chats} />
      <ChatBox
        text={text}
        username={username}
        handleTextChange={handleTextChange}
      /> */}
      <div className="rooms"></div>
      <div className="chatbox"></div>
      <div className="rightbar">
        <div className="leaderboards"></div>
        <div className="onlineUsers"></div>
      </div>
    </div>
  );
}
