import React, { useState } from "react";
import { Link } from "react-router-dom";
import MovieDivs from "./blogPost";
import Pagination from "@mui/material/Pagination";
import movies from "./movieData";
import Search from "./Search_section";
import ScrollToTop from "./scrollto";
import "./style.css";

export default function LandingPage() {
  const [page, setPage] = useState(1);
  const moviesPerPage = 5;

  const startIndex = (page - 1) * moviesPerPage;
  const displayedMovies = movies.slice(startIndex, startIndex + moviesPerPage);

  return (
    <>
      <div className="App">
        <div className="Grid-1">
          {displayedMovies.map((movie) => (
            <Link
              to={`/movies/${movie.slug}`}
              key={movie.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MovieDivs
                title={movie.title}
                date={movie.date}
                image={movie.image}
              />
            </Link>
          ))}

          <Pagination
            className="pagination"
            count={Math.ceil(movies.length / moviesPerPage)}
            page={page}
            onChange={(_, value) => setPage(value)}
            variant="outlined"
            shape="rounded"
          />
        </div>

        <div className="Grid-2">
          <Search />
        </div>

        <ScrollToTop />
      </div>
    </>
  );
}
