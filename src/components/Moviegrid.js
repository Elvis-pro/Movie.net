import { useState } from "react";
import { Link } from "react-router-dom";
import movies from "../movieData";

export default function MovieGrid() {
  const [visibleMovies, setVisibleMovies] = useState(10);

  const loadMoreMovies = () => {
    setVisibleMovies((prev) => prev + 6);
  };

  return (
    <div className="movie-container">
      <h2 className="title">New Movie Uploads</h2>
      <div
        className="movie-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "15px",
          justifyContent: "center",
        }}
      >
        {movies.slice(0, visibleMovies).map((movie, index) => (
          <Link
            key={index}
            to={`/movies/${movie.slug}`}
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
                  backgroundImage: `url(${movie.image})`,
                  height: "250px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "5px",
                }}
              ></div>
              <div className="movie-info">
                <h3 style={{ fontSize: "12px", margin: "10px 0" }}>
                  {movie.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <a href="/Moviemenu" className="load-more">
        Load More Movies
      </a>
    </div>
  );
}

// import { useState } from "react";
// import movies from "../movieData";

// export default function MovieGrid() {
//   const [visibleMovies, setVisibleMovies] = useState(10);

//   const loadMoreMovies = () => {
//     setVisibleMovies((prev) => prev + 6);
//   };

//   return (
//     <div className="movie-container">
//       <h2 className="title">New Movie Uploads</h2>
//       <div
//         className="movie-grid"
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//           gap: "15px",
//           justifyContent: "center",
//         }}
//       >
//         {movies.slice(0, visibleMovies).map((movie, index) => (
//           <div
//             key={index}
//             className="movie-card"
//             style={{
//               border: "1px solid #cccccc",
//               borderRadius: "5px",
//               textAlign: "center",
//             }}
//           >
//             <div
//               className="movie-image"
//               style={{
//                 backgroundImage: `url(${movie.image})`,
//                 height: "250px",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 borderRadius: "5px",
//               }}
//             ></div>
//             <div className="movie-info">
//               <h3 style={{ fontSize: "12px", margin: "10px 0" }}>
//                 {movie.title}
//               </h3>
//             </div>
//           </div>
//         ))}
//       </div>
//       <a href="/Moviemenu" className="load-more">
//         Load More Movies
//       </a>
//     </div>
//   );
// }
