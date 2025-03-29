import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import series from "../SeriesData";

export default function MovieGrid() {
  const navigate = useNavigate();
  const { page } = useParams(); // Get the page number from the URL
  const currentPage = parseInt(page) || 1; // Default to page 1
  const moviesPerPage = 50;
  const visibleMovies = currentPage * moviesPerPage;

  const loadMoreMovies = () => {
    navigate(`/TVSERIESLIST/${currentPage + 1}`); // Update URL dynamically
  };

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
        {series.slice(0, visibleMovies).map((show, index) => (
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
                backgroundImage: `url(${show.image})`,
                height: "250px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "5px",
              }}
            ></div>
            <div className="movie-info">
              <h3 style={{ fontSize: "12px", margin: "10px 0" }}>
                {show.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
      {visibleMovies < series.length && (
        <button onClick={loadMoreMovies} className="load-more">
          Load More Series
        </button>
      )}
    </div>
  );
}
