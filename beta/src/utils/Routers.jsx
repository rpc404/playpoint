import React from "react";
import { Routes, Route } from "react-router-dom";
// import Chatroom from "../pages/Chatroom";
import Leaderboards from "../pages/Leaderboards";
import Profile from "../pages/Profile";
import Showcases from "../pages/Showcases";
import Prediction from "../pages/Prediction";
import Marketplace from "../pages/Marketplace";

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Marketplace />} />
      <Route path="/showcases" element={<Showcases />} />
      {/* <Route path="/chats">
        <Route path=":room_id" element={<Chatroom />} />
        <Route path="" element={<Chatroom />} />
      </Route> */}
      <Route path="/profile" element={<Profile />} />
      <Route path="/predict" element={<Prediction />} />
      <Route path="/leaderboards" element={<Leaderboards />} />
      {/**
       * @dev 404 Page
       */}
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
}
