import React from "react";
import { Routes, Route } from "react-router-dom";
import Chatroom from "../pages/Chatroom";
import Showcases from "../pages/Showcases";

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Showcases />}/>
      {/* @dev
          issue in react-router-dom v6 https://github.com/remix-run/react-router/issues/7285
      */}
      <Route path="/chats">
        <Route path=":room_id" element={<Chatroom />}/>
        <Route path="" element={<Chatroom />}/>
      </Route>
    </Routes>
  );
}