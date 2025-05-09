import React from "react";
import { Link } from "react-router-dom";
import seriesData from "../SeriesData";
import Newseries from "../NewSeriesList";
import popularsdata from "../PopularSData";
import "../css/MovieList.css";

export default function SeriesList() {
  // Combine all series data
  const combinedSeries = [...seriesData, ...Newseries, ...popularsdata];

  // Pick first 4 (or random 4 if you prefer)
  const topFourSeries = combinedSeries.slice(0, 4); // or use a shuffle function

  return (
    <div className="movie-list-container">
      {topFourSeries.map((series, index) => (
        <div key={series.id || index} className="movie-card">
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
        </div>
      ))}
    </div>
  );
}
