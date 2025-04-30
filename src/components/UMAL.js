// MovieList.jsx
import React from "react";
import { Link } from "react-router-dom";
import movies from "../movieData";
import "../css/MovieList.css";

export default function MovieList() {
  const topFourMovies = movies.slice(0, 4); // Show only the first 4

  return (
    <div className="movie-list-container">
      {topFourMovies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <Link to={`/movies/${movie.slug}`}>
            <div
              className="movie-image"
              style={{
                backgroundImage: `url(${movie.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "170px",
              }}
            ></div>
          </Link>
          <div className="movie-title">{movie.title}</div>
          <div className="movie-date">📆 {movie.date}</div>
        </div>
      ))}
    </div>
  );
}
