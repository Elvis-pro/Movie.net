import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage.jsx";
import Home from "./components/Home.js";
import Moviemenu from "./components/MovieMenu.js";
import Navbar from "./components/NavBar.js";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Moviemenu" element={<Moviemenu />} />
      </Routes>
    </div>
  );
}
