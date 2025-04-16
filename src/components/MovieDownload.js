import { useParams } from "react-router-dom";
import movies from "../movieData";

export default function MovieDetail() {
  const { slug } = useParams();
  const movie = movies.find((m) => m.slug === slug);

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div className="movie-detail">
      <h1>{movie.title}</h1>
      <img src={movie.image} alt={movie.title} style={{ width: "300px" }} />
      <p>Released: {movie.date}</p>
      <a
        href={movie.downloadLink}
        className="download-btn"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          padding: "10px 20px",
          background: "#007bff",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px",
          marginTop: "20px",
          display: "inline-block",
        }}
      >
        👉 Download Movie
      </a>
    </div>
  );
}
