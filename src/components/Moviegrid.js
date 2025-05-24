import { useState } from "react";
import { Link } from "react-router-dom";
import movies from "../movieData";
import "../css/HomePage.css";

export default function MovieGrid() {
  const [visibleMovies, setVisibleMovies] = useState(10);

  const loadMoreMovies = () => {
    setVisibleMovies((prev) => prev + 6);
  };

  return (
    <div className="movie-container">
      <h2 className="title">New Movie Uploads</h2>
      <div className="movie-grid">
        {movies.slice(0, visibleMovies).map((movie, index) => (
          <Link
            key={index}
            to={`/movies/${movie.slug}`}
            className="movie-link"
          >
            <div className="movie-card">
              <div
                className="movie-image"
                style={{ backgroundImage: `url(${movie.image})` }}
              ></div>
              <div className="movie-info">
                <h3>{movie.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <a href="/movies" className="load-more">
        Load More Movies
      </a>
    </div>
  );
}
