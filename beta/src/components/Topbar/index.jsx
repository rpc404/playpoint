import React from "react";
import "./style.css";
import CountryFlags from "../../helpers/CountryFlags.json";
import WorldCupFixtures from "../../helpers/WorldCupFixtures.json";

export default function Topbar() {
  return (
    <div className="topbar__container">
      <div>
        Club Sites <i className="ri-attachment-line"></i>
      </div>
      <div className="image__container">
        {WorldCupFixtures.map((data) => {
          return CountryFlags.map((country, i) => {
            return (
              country.name === data.HomeTeam && (
                <img
                  src={country.image}
                  alt={country.name}
                  loading="lazy"
                  key={i}
                  style={{width:"2.1vw",borderRadius:"50%"}}
                />
              )
            );
          });
        })}
      </div>
    </div>
  );
}
