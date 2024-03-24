import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login"

import App from "./App.jsx";
import "./index.css";
import Signup from "./components/signup.jsx";
import DashboardHome from "./components/dashboard/Home.jsx";
import Conversation from "./components/dashboard/Conversation";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="/conversation" element={<Conversation />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
