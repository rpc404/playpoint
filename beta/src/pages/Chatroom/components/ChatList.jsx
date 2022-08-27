import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Fixtures from "../../../helpers/WorldCupFixtures.json";

const ChatList = ({ setActive }) => {
  let navigation = useNavigate();
  const generateId = (fixture) => {
    return `${String(fixture.HomeTeam).toLowerCase()}-${String(
      fixture.AwayTeam
    ).toLowerCase()}-${String(fixture.MatchNumber)}`;
  };
  return (
    <div className="rooms">
      <div className="topbar">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
          alt=""
          loading="lazy"
        />
        <b>Chats</b>
        <Button>
          <i className="ri-surgical-mask-line"></i>
        </Button>
      </div>

      <div className="roomsItems">
        {Fixtures.map((fixture, key) => {
          let id = generateId(fixture);
          return (
            <Button
              className="chathead"
              onClick={() => navigation(`/chats/${id}`)}
              key={key}
            >
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
              <div className="username">
                {fixture?.HomeTeam} Vs {fixture?.AwayTeam}
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default ChatList;
