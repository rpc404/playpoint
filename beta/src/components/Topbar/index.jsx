import React from "react";
import WorldCupFixtures from "../../helpers/WorldCupFixtures.json";
import CountryFlags from "../../helpers/CountryFlags.json";
import "./style.css";

export default function Topbar() {
  return (
    <div className="topbar__container">
      <div className="details">
        Participating Country Sites <i className="ri-attachment-line"></i>
      </div>
      <div className="imgContainers">
        {WorldCupFixtures.map((data) => {
          return CountryFlags.map((country, i) => {
            return (
              country.name === data.HomeTeam && (
                <img
                  src={country.image}
                  alt={country.name}
                  loading="lazy"
                  key={i}
                  style={{ width: "2vw" }}
                />
              )
            );
          });
        })}
      </div>
    </div>
  );
}
