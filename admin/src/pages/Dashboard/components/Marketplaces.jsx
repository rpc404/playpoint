import React from "react";
import { Button } from "@mui/material";

export default function Marketplaces() {
  return (
    <div className="marketplaces__container">
      <div className="title">
        <h2>Marketplaces - 10 Active Marketplaces</h2>
        <Button>
          <i className="ri-menu-add-line"></i> Add Item
        </Button>
      </div>

      <div className="marketplace__items">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((data) => {
          return (
            <div key={data} className="marketplaceItem">
              <img
                className="marketplaceCoverImage"
                src="https://i.ytimg.com/vi/hgq2g4EPI2Y/maxresdefault.jpg"
                alt=""
                loading="lazy"
              />
              <div className="details">
                <div className="marketplaceItem__title">
                  <h3>World Cup 2022 - Qatar</h3>
                  <Button>
                    <i className="ri-edit-line"></i> Edit
                  </Button>
                </div>
                <div className="info">
                  <p>
                    13 <br />
                    Fixtures
                  </p>
                  <p>
                    19 <br />
                    Questions
                  </p>
                  <p>
                    19 <br />
                    Results
                  </p>
                  <p>
                    1325 <br />
                    Predictions
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
