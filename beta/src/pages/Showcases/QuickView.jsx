import { Button } from "@mui/material";
import React from "react";
import CountryFlags from "../../helpers/CountryFlags.json";
import { useNavigate } from "react-router-dom";

export default function QuickView({ handleModalClose }) {
  const [gameData, setGameData] = React.useState(null);
  // const naviagtion = useNavigate();

  // eslint-disable-next-line
  const handleModal = () => {
    handleModalClose(false);
    document.body.style = "";
  };

  const generateId = (fixture)=>{
    return `${String(fixture.HomeTeam).toLowerCase()}-${String(fixture.AwayTeam).toLowerCase()}-${String(fixture.MatchNumber)}`
  }

  React.useEffect(() => {
    const tempGame = JSON.parse(localStorage.getItem("quickViewItem"));
    setGameData(tempGame);
  }, []);
  console.log(gameData)

  return (
    <div className="quickViewModal__container">
      <div className="container">
        {gameData && (
          <div className="item">
            <div className="info__container">
              <div>Football / <span>Worldcup</span></div>
              <Button onClick={handleModal} className="closeBtn">
                <i className="ri-close-line"></i> Close
              </Button>
            </div>
            <div className="topBar">
              <div className="homeTeam">{gameData?.HomeTeam}</div>
              {CountryFlags.map((country, index) => {
                return (
                  country.name === gameData.HomeTeam && (
                    <img
                      src={country.image}
                      alt={country.image}
                      key={index}
                    />
                  )
                );
              })}
              <div className="gameTime">
                {gameData?.DateUtc.split(" ")[1].split(":")[0] +
                  ":" +
                  gameData?.DateUtc.split(" ")[1].split(":")[1]}
              </div>
              {CountryFlags.map((country, index) => {
                return (
                  country.name === gameData.AwayTeam && (
                    <img
                      src={country.image}
                      alt={country.image}
                      key={index}
                    />
                  )
                );
              })}
              <div className="awayTeam">{gameData?.AwayTeam}</div>
            </div>

            <div className="stadiumInformation">
              <i className="ri-map-pin-2-line"></i> {gameData?.Location}
            </div>
            <div className="actions">
              <Button><i className="ri-boxing-line"></i>Predict Now</Button>
              <Button><i className="ri-message-3-line"></i> Join Chat</Button>
              <Button><i className="ri-bar-chart-grouped-line"></i> Leaderboards</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}