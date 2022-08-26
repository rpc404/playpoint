<<<<<<< HEAD
import React from 'react'
import './style.css'
import WorldCupFixtures from '../../helpers/WorldCupFixtures.json'
import CountryFlags from '../../helpers/CountryFlags.json'
=======
import React from "react";
import "./style.css";
import WorldCupFixtures from "../../helpers/WorldCupFixtures.json";
import CountryFlags from "../../helpers/CountryFlags.json";
>>>>>>> 6bdf6ce1fbc4d0b40d3f0d58e925424bb5d54c41

export default function Topbar() {
  return (
    <div className="topbar__container">
<<<<<<< HEAD

        <div className="details">
            Club Sites <i className="ri-attachment-line"></i>
        </div>
        <div className='imgContainers'>
=======
      <div className="details">
        Participating Country Sites <i className="ri-attachment-line"></i>
      </div>
      <div className="imgContainers">
>>>>>>> 6bdf6ce1fbc4d0b40d3f0d58e925424bb5d54c41
        {WorldCupFixtures.map((data) => {
          return CountryFlags.map((country, i) => {
            return (
              country.name === data.HomeTeam && (
                <img
                  src={country.image}
                  alt={country.name}
                  loading="lazy"
                  key={i}
<<<<<<< HEAD
                  style = {{width:"2vw"}}
=======
>>>>>>> 6bdf6ce1fbc4d0b40d3f0d58e925424bb5d54c41
                />
              )
            );
          });
        })}
<<<<<<< HEAD
        </div>
=======
      </div>
>>>>>>> 6bdf6ce1fbc4d0b40d3f0d58e925424bb5d54c41
    </div>
  );
}
