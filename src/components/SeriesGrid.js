import { useState } from "react";
import { Link } from "react-router-dom";
import series from "../SeriesData";
import "../css/HomePage.css"

export default function SeriesGrid() {
  const [visibleSeries, setVisibleSeries] = useState(10);

  return (
    <div className="series-container">
      <h2 className="title">New Series Uploads</h2>
      <div
        className="series-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "15px",
          justifyContent: "center",
        }}
      >
        {series.slice(0, visibleSeries).map((seriesItem, index) => (
          <Link
            to={`/series/${seriesItem.slug}`}
            key={index}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="movie-card">
              <div
                className="movie-image"
                style={{
                  backgroundImage: `url(${seriesItem.image})`,
                }}
              ></div>
              <div className="movie-info">
                <h3>
                  {seriesItem.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Navigation Link to Load More */}
      <a href="/tv-series" className="load-more">
        Load More Series
      </a>
    </div>
  );
}
