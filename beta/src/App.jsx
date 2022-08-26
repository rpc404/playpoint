import React from "react";
import { BrowserRouter } from "react-router-dom";
import Helpbar from "./components/Helpbar";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import PageRoutes from "./utils/Routers";

export default function App() {
  return (
    <BrowserRouter>
    <div className="fixedBars__container">
    <Topbar/>
    <Navbar/>
    <Helpbar/>
    </div>
      <PageRoutes />
    </BrowserRouter>
  );
}
