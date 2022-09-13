import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Fixtures from "../../../helpers/WorldCupFixtures.json";
import CountryFlags from "../../../helpers/CountryFlags.json";

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
                {CountryFlags.map((country, i) => {
                  return (
                    (country.name === fixture.HomeTeam ||
                      (country.name === "United States" &&
                        fixture.HomeTeam === "USA") ||
                      (country.name === "South Korea" &&
                        fixture.HomeTeam === "Korea Republic")) && (
                      <img
                        src={country.image}
                        alt={country.name}
                        key={i}
                        loading="lazy"
                      />
                    )
                  );
                })}
                {CountryFlags.map((country, i) => {
                  return (
                    (country.name === fixture.AwayTeam ||
                      (country.name === "United States" &&
                        fixture.HomeTeam === "USA") ||
                      (country.name === "South Korea" &&
                        fixture.HomeTeam === "Korea Republic")) && (
                      <img
                        src={country.image}
                        alt={country.name}
                        key={i}
                        loading="lazy"
                      />
                    )
                  );
                })}
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
