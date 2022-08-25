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
        {
          gameData && <div className="item">
          <div className="topBar">
            <div className="homeTeam">{gameData?.HomeTeam}</div>
            <div className="gameTime">
              {gameData?.DateUtc.split(" ")[1].split(":")[0] +
                ":" +
                gameData?.DateUtc.split(" ")[1].split(":")[1]}
            </div>
            <div className="awayTeam">{gameData?.AwayTeam}</div>
          </div>
        </div>
        }
      </div>
    </div>
  );
}
