import React from "react";
import { Routes, Route } from "react-router-dom";
import Chatroom from "../pages/Chatroom";

import Showcases from "../pages/Showcases";

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Showcases />}/>
      <Route path="/chats" element={<Chatroom />}/>
    </Routes>
  );
}