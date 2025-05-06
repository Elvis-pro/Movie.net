import { useState } from "react";
import { Link } from "react-router-dom";
import Popular from "../PopularSData";

export default function SeriesGrid() {
  const [visibleSeries, setVisibleSeries] = useState(5);

  return (
    <div className="movie-container">
      <div
        className="movie-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "15px",
          justifyContent: "center",
        }}
      >
        {Popular.slice(0, visibleSeries).map((series, index) => (
          <Link
            to={`/series/${series.slug}`}
            key={index}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              className="movie-card"
              style={{
                border: "1px solid #cccccc",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              <div
                className="movie-image"
                style={{
                  backgroundImage: `url(${series.image})`,
                  height: "250px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "5px",
                }}
              ></div>
              <div className="movie-info">
                <h3 style={{ fontSize: "12px", margin: "10px 0" }}>
                  {series.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
