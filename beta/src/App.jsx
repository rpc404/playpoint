import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import PageRoutes from "./utils/Routers";

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <PageRoutes />
    </BrowserRouter>
  );
}
