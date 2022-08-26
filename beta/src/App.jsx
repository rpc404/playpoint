import React from "react";
import { BrowserRouter } from "react-router-dom";
import Helpbar from "./components/Helpbar";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import PageRoutes from "./utils/Routers";
import { Auth0Provider } from "@auth0/auth0-react";

export default function App() {
  return (
    <Auth0Provider
      domain="playpoint.jp.auth0.com"
      clientId="qs9xU3pkFHRcjfv67cfqmKMN5P70AoQp"
      redirectUri="http://localhost:5173"
    >
      <BrowserRouter>
        <div className="fixedBars__container">
          <Topbar />
          <Navbar />
          <Helpbar />
        </div>
        <PageRoutes />
      </BrowserRouter>
    </Auth0Provider>
  );
}
