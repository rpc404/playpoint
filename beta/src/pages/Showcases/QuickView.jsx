import { Button } from "@mui/material";
import React from "react";

export default function QuickView({ handleModalClose }) {
  const [gameData, setGameData] = React.useState(null);

  // eslint-disable-next-line
  const handleModal = () => {
    handleModalClose(false);
  };

  React.useEffect(() => {
    const tempGame = JSON.parse(localStorage.getItem("quickViewItem"));
    setGameData(tempGame);
  }, []);

  return (
    <div className="quickViewModal__container">
      <div className="container">
        {gameData && (
          <div className="item">
            <div className="info__container">
              <div>Football/Worldcup</div>
            <Button onClick={handleModal} className="closeBtn"><i className="ri-close-line"></i> Close</Button>
            </div>
            <div className="topBar">
              <div className="homeTeam">{gameData?.HomeTeam}</div>
              <div className="gameTime">
                {gameData?.DateUtc.split(" ")[1].split(":")[0] +
                  ":" +
                  gameData?.DateUtc.split(" ")[1].split(":")[1]}
              </div>
              <div className="awayTeam">{gameData?.AwayTeam}</div>
            </div>

            <div className="stadiumInformation">
            <i className="ri-map-pin-2-line"></i> {gameData?.Location}
            </div>
            <div className="actions">
              <Button>
                Predict Now
              </Button>
              <Button>
                Join Chat
              </Button>
              <Button>
                Leaderboards
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
