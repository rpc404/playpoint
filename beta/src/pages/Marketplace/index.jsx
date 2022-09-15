import { Button, Skeleton, Stack } from "@mui/material";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/style.css";

export default function Marketplace() {
    const navigate = useNavigate();
  const [marketplaceItems, setMarketplaceItems] = React.useState([]);

  const getMarketplaces = () => {
    axios
      .get("http://localhost:4000/api/marketplace/get-marketplaces")
      .then((res) => {
        setMarketplaceItems(res?.data?.data);
      })
      .catch((err) => console.error(err));
  };

  React.useEffect(() => {
    getMarketplaces();
  }, []);

  return (
    <div className="marketplace__container">
      <h1>Marketplaces</h1>
      <div className="marketplace__items">
          {marketplaceItems.length > 1 ? (
            marketplaceItems.map((data, index) => {
              const {
                marketplaceCoverImage,
                marketplaceSlug,
                marketplaceName,
                marketSummary,
              } = data;
              const {
                fixturesCount,
                questionairesCount,
                resultsCount,
                predictionsCount,
              } = marketSummary;
              return (
                <div key={index} className="marketplaceItem">
                  <img
                  onClick={(e) =>
                    {e.stopPropagation();
                    navigate("/showcases");}
                }
                    className="marketplaceCoverImage"
                    src={
                      import.meta.env.VITE_SERVER_URI + marketplaceCoverImage
                    }
                    alt={marketplaceSlug}
                    loading="lazy"
                  />
                  <div className="details">
                    <div className="marketplaceItem__title">
                      <h4
                        onClick={(e) =>
                            {e.stopPropagation();
                            navigate("/showcases");}
                        }
                      >
                        {marketplaceName}
                      </h4>
                    </div>
                    <div className="info">
                      <p>
                        {fixturesCount} <br />
                        Fixtures
                      </p>
                      <p>
                        {questionairesCount} <br />
                        Questions
                      </p>
                      <p>
                        {resultsCount} <br />
                        Results
                      </p>
                      <p>
                        {predictionsCount} <br />
                        Predictions
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((data) => {
                return (
                  <Stack key={data}>
                    <Skeleton
                      animation="wave"
                      variant="rectangular"
                      width={"20vw"}
                      height={"20vh"}
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Skeleton width={200} height={40} />
                      <Skeleton width={70} />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {[0, 1, 2, 3].map((data) => {
                        return <Skeleton width={70} height={40} key={data} />;
                      })}
                    </div>
                  </Stack>
                );
              })}
            </>
          )}
        </div>
    </div>
  );
}
