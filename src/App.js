import React, { useState } from "react";
import MovieDivs from "./blogPost"; // Your movie component
import Pagination from "@mui/material/Pagination";
import movies from "./movieData"; // Import the static movie data
import Search from "./Search_section";
import ScrollToTop from "./scrollto";
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
