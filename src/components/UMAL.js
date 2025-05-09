import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import movies from "../movieData";
import popularmdata from "../PopularMData";
import "../css/MovieList.css";

// Helper function to shuffle an array (for random selection)
const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

// Helper function to sort by rating (assumes a `rating` field exists)
const sortByRating = (array) => {
  return [...array].sort((a, b) => (b.rating || 0) - (a.rating || 0));
};

// Helper function to sort by release date (assumes a `date` field exists)
const sortByReleaseDate = (array) => {
  return [...array].sort(
    (a, b) => new Date(b.date || 0) - new Date(a.date || 0)
  );
};

export default function MovieList() {
  // Define the selection strategy (options: 'rating', 'releaseDate', 'random')
  const selectionStrategy = "random"; // Change to 'rating' or 'releaseDate' as needed

  // Combine and select top 4 movies based on the strategy
  const topFourMovies = useMemo(() => {
    const combinedMovies = [...movies, ...popularmdata];

    let selectedMovies = combinedMovies;

    // Apply the selection strategy
    switch (selectionStrategy) {
      case "rating":
        selectedMovies = sortByRating(combinedMovies);
        break;
      case "releaseDate":
        selectedMovies = sortByReleaseDate(combinedMovies);
        break;
      case "random":
        selectedMovies = shuffleArray(combinedMovies);
        break;
      default:
        selectedMovies = combinedMovies; // Default: no sorting
    }

    return selectedMovies.slice(0, 4); // Return top 4
  }, [selectionStrategy]); // Recompute if strategy changes

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
