// SeriesList.jsx
import React from "react";
import { Link } from "react-router-dom";
import seriesData from "../SeriesData"; // ✅ Correct import name
import "../css/MovieList.css";

export default function SeriesList() {
  const topFourSeries = seriesData.slice(0, 4); // ✅ First 4 series

  return (
    <div className="movie-list-container">
      {topFourSeries.map((series) => (
        <div key={series.id} className="movie-card">
          <Link to={`/series/${series.slug}`}>
            <div
              className="movie-image"
              style={{
                backgroundImage: `url(${series.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "170px",
              }}
            ></div>
          </Link>
          <div className="movie-title">{series.title}</div>
          {/* <div className="movie-date">📆 {series.date}</di> */}
        </div>
      ))}
    </div>
  );
}
