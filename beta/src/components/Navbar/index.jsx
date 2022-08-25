import { Button } from "@mui/material";
import React from "react";
import "./style.css";

export default function Navbar() {
  return (
    <div className="navbar__container">
      <div className="logo__container">
        <img src="https://ik.imagekit.io/lexworld/Logo.png" alt="" />
        <h3>Playpoint</h3>
      </div>
      <div className="navbar__authentication">
        <Button><i className="ri-fingerprint-line"></i> Login / Register</Button>
        <Button className="search-button">
          <i className="ri-search-line"></i>Search
        </Button>
      </div>
    </div>
  );
}
