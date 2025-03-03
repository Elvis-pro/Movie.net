import React, { useState } from "react";
import MovieDivs from "./blogPost"; // Your movie component
import Pagination from "@mui/material/Pagination";
import movies from "./movieData"; // Import the static movie data
import Search from "./Search_section";
import ScrollToTop from "./scrollto";
import "./style.css";
import NavBar from "./components/NavBar";

export default function LandingPage() {
  const [page, setPage] = useState(1);
  const moviesPerPage = 5; // Change this to control movies per page

  // Calculate the displayed movies based on the selected page
  const startIndex = (page - 1) * moviesPerPage;
  const displayedMovies = movies.slice(startIndex, startIndex + moviesPerPage);

  return (
    <>
      <div className="land">
        <NavBar />
        <div className="Grid-1">
          {displayedMovies.map((movie) => (
            <MovieDivs
              key={movie.id}
              title={movie.title}
              date={movie.date}
              image={movie.image} // Passing image prop
            />
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

        {/* Second Grid */}
        <div className="Grid-2">
          <Search />
        </div>
        <ScrollToTop />
      </div>
    </>
  );
}
