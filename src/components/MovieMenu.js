import React from "react";
import "../css/MovieMenu.css";
import "../css/HomePage.css";
import PMovieCard from "./PopularDownload";
import NewUpload from "./NewUpload";
import Scrollto from "../scrollto";

export default function MovieMenu() {
  return (
    <div className="movie-menu-page">
      <div className="movie-menu-innerpage">
        <div className="ads-div">
          <div className="s-b2">
            <div className="ads-img"></div>
          </div>
          <div className="ab2">
            <div className="inner-adsdiv1"></div>
            <div className="serach-bar">
              <p
                style={{ fontSize: "15px", fontWeight: "600", color: "black" }}
              >
                Search for what to download
              </p>
              <input className="search-input" placeholder="Search Here" />
            </div>
          </div>
        </div>
        <div className="popular-m">
          <div className="p-tittles">
            <h3 className="popular-movie" style={{ fontWeight: "600" }}>
              {" "}
              Popular Movie Download
            </h3>
            <PMovieCard />
          </div>
          <div className="s-b2">
            <div className="ads-img"></div>
          </div>
          <div className="p-tittles">
            <h3 className="popular-movie" style={{ fontWeight: "600" }}>
              {" "}
              New Movie Download
            </h3>
            <NewUpload />
          </div>
        </div>
      </div>
      <Scrollto />
    </div>
  );
}
