import React from "react";
import { Routes, Route } from 'react-router-dom';
import "./style.css";
import LandingPage from "./LandingPage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home.js";


export default function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </div>  
    </>
  );
}
