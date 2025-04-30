import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import movies from "../movieData";
import "../css/MovieDownload.css";

export default function RecommendedMovie() {
  const [recommendedMovie, setRecommendedMovie] = useState(null);
  const location = useLocation(); // 👈 get the current page URL

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    setRecommendedMovie(movies[randomIndex]);
  }, [location]); // 👈 whenever location changes, pick a new recommended movie

  if (!recommendedMovie) {
    return <div>No recommended movie found</div>;
  }

  return (
    <Link
      to={`/movies/${recommendedMovie.slug}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        className="R-video"
        style={{
          backgroundImage: `url(${recommendedMovie.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "red",
        }}
      ></div>
    </Link>
  );
}
