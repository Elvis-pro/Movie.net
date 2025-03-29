import { useState } from "react";
import Popular from "../PopularSData";

export default function MovieGrid() {
  const [visibleMovies, setVisibleMovies] = useState(5);

  return (
    <div className="movie-container">
      {/* <h2 className="title">New Movie Uploads</h2> */}
      <div
        className="movie-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "15px",
          justifyContent: "center",
        }}
      >
        {Popular.slice(0, visibleMovies).map((Popular, index) => (
          <div
            key={index}
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
                backgroundImage: `url(${Popular.image})`,
                height: "250px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "5px",
              }}
            ></div>
            <div className="movie-info">
              <h3 style={{ fontSize: "12px", margin: "10px 0" }}>
                {Popular.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
      {/* <a href="/" className="load-more">
        Load More Movies
      </a> */}
    </div>
  );
}
