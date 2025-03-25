import React from "react";
import "../css/HomePage.css";
import Alert from "../components/alert";
import Moviegrid from "./Moviegrid";
import SeriesGrid from "./SeriesGrid";

export default function AdsDivs() {
  return (
    <div className="adsdivs">
      <div style={{ display: "flex" }}>
        <div className="b1"></div>
        <div className="b2">
          <div className="inner-adsdiv"></div>
        </div>
      </div>
      <div className="AdsDivs2">
        <div className="s-b1">
          <Alert />
        </div>
        <div className="s-b2">
          <div className="ads-img"></div>
        </div>
      </div>
      <div className="AdsDivs3">
        <div className="s-b3"></div>
        <div className="serach-bar">
          <p style={{ fontSize: "15px", fontWeight: "600", color: "black" }}>
            Search for what to download
          </p>
          <input className="search-input" placeholder="Search Here" />
        </div>
        <div className="movies-grid">
          <div className="inner-grid">
            <Moviegrid />
            <div className="ads-img"></div>
            <SeriesGrid />
          </div>
        </div>
      </div>
    </div>
  );
}
