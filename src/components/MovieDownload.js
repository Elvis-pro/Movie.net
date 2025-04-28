import { useParams } from "react-router-dom";
import movies from "../movieData";
import Search from "../Search_section";
import ScrollToTop from "../scrollto";
import "../css/MovieDownload.css";
import "../style.css";

export default function MovieDetail() {
  const { slug } = useParams();
  const movie = movies.find((m) => m.slug === slug);

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div className="movie-detail App">
      <div className="grid-1 grid-d">
        <div>
          <iframe
            className="YT-Trailer"
            src="https://www.youtube.com/embed/Rq5LyXG8m2U?si=vkYSNvrI6e0FaAKo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div classname=""></div>
        <div className="download-size">
          <h1
            style={{
              fontSize: "15px",
              marginLeft: "20px",
              fontWeight: "bolder",
              color: "#62788f",
            }}
          >
            Download Size
          </h1>
          <p
            style={{
              fontSize: "12px",
              marginLeft: "20px",
              fontWeight: "lighter",
              color: "#51728f",
            }}
          >
            This Video is {movie.size}
          </p>
        </div>
        <h3 style={{ fontSize: "20px", textAlign: "center" }}>
          Download Link For {movie.title}
        </h3>
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
      <div className="grid-2">
        <Search />
      </div>
      <ScrollToTop />
    </div>
  );
}
