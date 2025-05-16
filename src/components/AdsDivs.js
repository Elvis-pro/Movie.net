import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/HomePage.css";
import Alert from "../components/alert";
import Moviegrid from "./Moviegrid";
import SeriesGrid from "./SeriesGrid";

// Import data files
import movies from "../movieData";
import popularMovies from "../PopularMData";
import newSeries from "../NewSeriesList";
import popularSeries from "../PopularSData";
import seriesData from "../SeriesData";

export default function AdsDivs() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // Combine movies and series, adding type and label
  const allMovies = [...movies, ...popularMovies].map((item) => ({
    ...item,
    type: "movie",
    label: "Download Hollywood Movie",
  }));

  const allSeries = [...newSeries, ...popularSeries, ...seriesData].map((item) => ({
    ...item,
    type: "series",
    label: "TV Series",
  }));

  const combined = [...allMovies, ...allSeries];

  // Filter based on query
  const filtered = combined.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  // Handle navigation based on item type and slug
  const handleClick = (item) => {
    if (item.type === "movie") {
      navigate(`/movies/${item.slug}`);
    } else {
      navigate(`/series/${item.slug}`);
    }
    setQuery(""); // Clear query after clicking
  };

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
        <div className="serach-bar" style={{ position: "relative" }}>
          <p style={{ fontSize: "15px", fontWeight: "600", color: "black" }}>
            Search for what to download
          </p>
          <input
            className="search-input"
            placeholder="Search Here"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <div
              style={{
                position: "absolute",
                top: "70px", // Adjusted for the <p> tag above
                left: 0,
                right: 0,
                zIndex: 1000,
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                maxHeight: "400px",
                overflowY: "auto",
                borderRadius: "4px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              }}
            >
              {filtered.slice(0, 4).map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleClick(item)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                    borderBottom: "1px solid #eee",
                    cursor: "pointer",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f5f5f5")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "40px",
                      height: "55px",
                      objectFit: "cover",
                      marginRight: "10px",
                      borderRadius: "2px",
                    }}
                  />
                  <div>
                    <div style={{ fontWeight: "bold", fontSize: "14px", color: "#333" }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: "12px", color: "#888" }}>
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
              {filtered.length > 4 && (
                <div
                  style={{
                    padding: "10px",
                    textAlign: "center",
                    backgroundColor: "#f1f1f1",
                    cursor: "pointer",
                    fontSize: "13px",
                    color: "#555",
                  }}
                  onClick={() => navigate(`/search?q=${encodeURIComponent(query)}`)}
                >
                  More Results ({filtered.length})
                </div>
              )}
            </div>
          )}
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