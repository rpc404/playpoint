import React from "react";
import { Button, Skeleton } from "@mui/material";
import axios from "axios";
import NewMarketplace from "./NewMarketplace";

export default function Marketplaces() {
  /**
   * @dev for marketplace focus handler
   */
  const [focusedMarketplace, setFocusedMarketplace] = React.useState({
    isFocused: false,
    marketplaceSlug: "",
  });

  const handleFocusedMarketplace = (marketplaceSlug) => {
    setFocusedMarketplace({
      isFocused: true,
      marketplaceSlug,
    });
  };

  const resetMarketplaceFocused = () => {
    setFocusedMarketplace({
      isFocused: false,
      marketplaceSlug: "marketplaces",
    });
  };
  const styles = {
    equal: {
      flex: "1 1 0",
    },
    maximize: {
      flex: 1,
    },
  };

  const [marketplaceItems, setMarketplaceItems] = React.useState([
    {
      marketplaceName: "",
      marketplaceSlug: "",
      marketplaceCoverImage: "",
      marketSummary: {
        fixturesCount: 0,
        resultsCount: 0,
        questionairesCount: 0,
        predictionsCount: 0,
      },
    },
  ]);

  // first check if stored on localstorage else request
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
    <div className="marketplaces__container" id="marketplaces__container">
      <div className="title">
        <h2>Marketplaces - 10 Active Marketplaces</h2>
        <div className="rightTitleBar">
          <div className="searchInputs">
            <i className="ri-search-2-line"></i>
            <input type="text" placeholder="Search Marketplace..." />
          </div>
          <Button onClick={() => handleFocusedMarketplace("new-item")}>
            <i className="ri-menu-add-line"></i> Add Item
          </Button>
        </div>
      </div>

      {!focusedMarketplace.isFocused && (
        <div className="marketplace__items">
          {marketplaceItems.length > 0 ? (
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
                        onClick={() =>
                          handleFocusedMarketplace(marketplaceSlug)
                        }
                      >
                        {marketplaceName}
                      </h4>
                      <Button>
                        <i className="ri-edit-line"></i> Edit
                      </Button>
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
            <Skeleton animation="wave" variant = "rectangular" width={"23vw"} height= {"20vh"} />
          )}
        </div>
      )}

      {focusedMarketplace.isFocused &&
        focusedMarketplace.marketplaceSlug !== "new-item" && (
          <div className="focusedMarketplace__container">
            <p>Marketplaces / {focusedMarketplace.marketplaceSlug}</p>
            {marketplaceItems.map(
              (data, index) =>
                data.marketplaceSlug === focusedMarketplace.marketplaceSlug && (
                  <div key={index}>
                    <img
                      className="coverImage"
                      key={index}
                      src={
                        import.meta.env.VITE_SERVER_URI +
                        data.marketplaceCoverImage
                      }
                      alt={data.marketplaceSlug}
                      loading="lazy"
                    />

                    <div className="titleContainer">
                      <h2>{data.marketplaceName}</h2>
                      <Button>
                        <i className="ri-edit-line"></i> Edit Marketplace
                      </Button>
                    </div>

                    <div className="summaryDetails">
                      <p>
                        <i className="ri-gamepad-line"></i>{" "}
                        {data.marketSummary.fixturesCount} Fixtures
                      </p>
                      <p>
                        <i className="ri-question-answer-line"></i>{" "}
                        {data.marketSummary.questionairesCount} Questionaires
                      </p>
                      <p>
                        <i className="ri-cup-line"></i>{" "}
                        {data.marketSummary.resultsCount} Results
                      </p>
                      <p>
                        <i className="ri-magic-line"></i>{" "}
                        {data.marketSummary.predictionsCount} Predictions
                      </p>
                    </div>

                    <div className="summaryDetailed__container">
                      <div className="fixturesContainer" style={styles.equal}>
                        <div className="title">
                          <h3>Fixtures</h3>
                          <Button>
                            <i className="ri-fullscreen-line"></i>
                          </Button>
                        </div>
                      </div>
                      <div
                        className="questionaireContainer"
                        style={styles.equal}
                      >
                        <div className="title">
                          <h3>Questionaires</h3>
                          <Button>
                            <i className="ri-fullscreen-line"></i>
                          </Button>
                        </div>
                      </div>
                      <div className="resultsContainer" style={styles.equal}>
                        <div className="title">
                          <h3>Results</h3>
                          <Button>
                            <i className="ri-fullscreen-line"></i>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        )}

      {focusedMarketplace.isFocused &&
        focusedMarketplace.marketplaceSlug === "new-item" && (
          <NewMarketplace
            resetMarketplaceFocused={resetMarketplaceFocused}
            getMarketplaces={getMarketplaces}
            setFocusedMarketplace={setFocusedMarketplace}
          />
        )}
    </div>
  );
}
