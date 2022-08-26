import React from "react";
import "./style.css";
import CountryFlags from "../../helpers/CountryFlags.json";
import WorldCupFixtures from "../../helpers/WorldCupFixtures.json";

export default function Topbar() {
  return (
    <div className="topbar__container">
      <div style={{display:"flex"}}>
        Club Sites <i className="ri-attachment-line"></i>
      </div>
      <div>
        {WorldCupFixtures.map((data) => {
          return CountryFlags.map((country, i) => {
            return (
              country.name === data.HomeTeam && (
                <img
                  src={country.image}
                  alt={country.name}
                  loading="lazy"
                  key={i}
                  style = {{width:"2vw"}}
                />
              )
            );
          });
        })}
      </div>
    </div>
  );
}
