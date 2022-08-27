import React from "react";
import { Button } from "@mui/material";
import "./ChatBox.css";
import axios from "axios";

export default ({ chats, room_id }) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      axios
        .put(`http://127.0.0.1:8000/chats/${room_id}`, {
          message: event.target.value,
          sender: 222,
          timestamp: Date.now(),
        })
        .then((res) => {
          if (res.status === 201) {
            event.target.value = "";
          }
        }).catch(err => console.error(err));
    }
  };
  return (
    <div className="chatbox">
      <div className="topbar">
        <div className="chathead__info">
          <div className="imgHolder">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Emblem_of_Qatar.svg/800px-Emblem_of_Qatar.svg.png"
              alt=""
              loading="lazy"
            />
            <img
              src="https://brandlogos.net/wp-content/uploads/2013/09/the-fa-england-vector-logo.png"
              alt=""
              loading="lazy"
            />
          </div>
          <h3>Qatar vs England</h3>
        </div>
        <div>
          <Button>
            <i className="ri-ancient-gate-line"></i> Subscribe
          </Button>
        </div>
      </div>
      <div className="chats">
        <div className="messageItems">
        {chats.map((chat, key) => {
          return (
              <div className="message" key={key}>
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  alt=""
                  loading="lazy"
                />
                <div className="messageContent">{chat.message}</div>
              </div>
          );
        })}
        </div>
      </div>
      <div className="inputField">
        <Button>
          <i className="ri-attachment-line"></i>
        </Button>
        <input
          type="text"
          placeholder="Aa"
          onKeyPress={(e) => handleKeyPress(e)}
        />
        <Button>
          <i className="ri-thumb-up-line"></i>
        </Button>
      </div>
    </div>
  );
};
