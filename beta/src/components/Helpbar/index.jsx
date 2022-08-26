import React from "react";
import "./style.css";

export default function Helpbar() {
  return (
    <div className="helpbar__container">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRoI1jUI6TmNhKEDpDBzwkh2dtMJrxxzcZxw&usqp=CAU"
        alt=""
      />
      <img
        src="https://www.premierleague.com/resources/prod/v6.101.2-4400/i/elements/premier-league-logo-header-mob.svg"
        alt=""
      />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Easports_fifa_logo.svg/1200px-Easports_fifa_logo.svg.png"
          alt=""
        />
      <div>
        <i className="ri-information-line"></i> All times are shown in UTC time
      </div>
    </div>
  );
}
