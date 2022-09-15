import { Button } from "@mui/material";
import React from "react";

export default function Fixtures() {
  return (
    <div className="fixtures__container">
      <div className="title">
        <h2>Fixtures - 10 Fixtures</h2>
        <div className="rightTitleBar">
          <div className="searchInputs">
            <i className="ri-search-2-line"></i>
            <input type="text" placeholder="Search Fixtures..." />
          </div>
          <Button onClick={() => handleFocusedMarketplace("new-item")}>
            <i className="ri-menu-add-line"></i> Add Item
          </Button>
        </div>
      </div>
    </div>
  );
}
