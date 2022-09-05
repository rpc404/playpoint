import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import Helpbar from "./components/Helpbar";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import RPCDataLayer from "./contexts/RPCDataLayer";
import PageRoutes from "./utils/Routers";

export default function App() {
  return (
    <RPCDataLayer>
      <BrowserRouter>
        <div className="fixedBars__container">
          <Topbar />
          <Navbar />
          <Helpbar />
        </div>
        <PageRoutes />
      </BrowserRouter>
    </RPCDataLayer>
  );
}
