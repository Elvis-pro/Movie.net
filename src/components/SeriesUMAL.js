import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import seriesData from "../SeriesData";
import Newseries from "../NewSeriesList";
import popularsdata from "../PopularSData";
import "../css/MovieList.css";

// Helper function to shuffle an array (for random selection)
const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

// Helper function to sort by rating (assumes a `rating` field exists)
const sortByRating = (array) => {
  return [...array].sort((a, b) => (b.rating || 0) - (a.rating || 0));
};

// Helper function to sort by release date (assumes a `releaseDate` field exists)
const sortByReleaseDate = (array) => {
  return [...array].sort(
    (a, b) => new Date(b.releaseDate || 0) - new Date(a.releaseDate || 0)
  );
};

export default function SeriesList() {
  // Define the selection strategy (options: 'rating', 'releaseDate', 'random')
  const selectionStrategy = "random"; // Change to 'rating' or 'releaseDate' as needed

  // Combine and select top 4 series based on the strategy
  const topFourSeries = useMemo(() => {
    const combinedSeries = [...seriesData, ...Newseries, ...popularsdata];

    let selectedSeries = combinedSeries;

    // Apply the selection strategy
    switch (selectionStrategy) {
      case "rating":
        selectedSeries = sortByRating(combinedSeries);
        break;
      case "releaseDate":
        selectedSeries = sortByReleaseDate(combinedSeries);
        break;
      case "random":
        selectedSeries = shuffleArray(combinedSeries);
        break;
      default:
        selectedSeries = combinedSeries; // Default: no sorting
    }

    return selectedSeries.slice(0, 4); // Return top 4
  }, [selectionStrategy]); // Recompute if strategy changes

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
