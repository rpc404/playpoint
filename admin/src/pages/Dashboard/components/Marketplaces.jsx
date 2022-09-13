import React from "react";
import { Button } from "@mui/material";
import MarketplaceItems from "../utils/Marketplaces.json";

export default function Marketplaces() {
  const [focusedMarketplace, setFocusedMarketplace] = React.useState({
    isFocused: false,
    marketplaceId: "",
  });

  const handleFocusedMarketplace = (marketplaceId) => {
    setFocusedMarketplace({
      isFocused: true,
      marketplaceId,
    });
  };
  return (
    <div className="marketplaces__container">
      <div className="title">
        <h2>Marketplaces - 10 Active Marketplaces</h2>
        <div className="rightTitleBar">
          <div className="searchInputs">
            <i className="ri-search-2-line"></i>
            <input type="text" placeholder="Search Marketplace..." />
          </div>
          <Button>
            <i className="ri-menu-add-line"></i> Add Item
          </Button>
        </div>
      </div>

      {!focusedMarketplace.isFocused && (
        <div className="marketplace__items">
          {MarketplaceItems.map((data, index) => {
            const { coverImage, slug, name, summary } = data;
            const {
              fixturesCount,
              questionsCount,
              resultsCount,
              predictionCount,
            } = summary;
            return (
              <div key={index} className="marketplaceItem">
                <img
                  className="marketplaceCoverImage"
                  src={coverImage}
                  alt={slug}
                  loading="lazy"
                />
                <div className="details">
                  <div className="marketplaceItem__title">
                    <h4 onClick={() => handleFocusedMarketplace(slug)}>
                      {name}
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
                      {questionsCount} <br />
                      Questions
                    </p>
                    <p>
                      {resultsCount} <br />
                      Results
                    </p>
                    <p>
                      {predictionCount} <br />
                      Predictions
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {focusedMarketplace.isFocused && (
        <div className="focusedMarketplace__container">
          <p>Marketplaces / {focusedMarketplace.marketplaceId}</p>
          {MarketplaceItems.map(
            (data, index) =>
              data.slug === focusedMarketplace.marketplaceId && (
                <img
                  className="coverImage"
                  key={index}
                  src={data.coverImage}
                  alt={data.slug}
                  loading="lazy"
                />
              )
          )}
        </div>
      )}
    </div>
  );
}
