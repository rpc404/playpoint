import React from "react";
import { Routes, Route } from "react-router-dom";
import Chatroom from "../pages/Chatroom";
import Leaderboards from "../pages/Leaderboards";
import Profile from "../pages/Profile";
import Showcases from "../pages/Showcases";
import Prediction from "../pages/Prediction";

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Showcases />} />
      <Route path="/chats">
        <Route path=":room_id" element={<Chatroom />} />
        <Route path="" element={<Chatroom />} />
      </Route>
      <Route path="/profile" element={<Profile />} />
      <Route path="/predict">
        <Route path=":prediction_id" element={<Prediction />} />
        <Route path="" element={<Prediction />} />
      </Route>
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
