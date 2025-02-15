import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./style.css";
import NavBar from "./components/NavBar";
import LandingPage from "./LandingPage.jsx";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="">
        <LandingPage />
      </div>
    </>
  );
}
