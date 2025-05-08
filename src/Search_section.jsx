import { useState } from "react";
import { useNavigate } from "react-router-dom";

import movies from "./movieData";
import popularMovies from "./PopularMData";
import newSeries from "./NewSeriesList";
import popularSeries from "./PopularSData";
import seriesData from "./SeriesData";

export default function Search() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const allMovies = [...movies, ...popularMovies].map((item) => ({
    ...item,
    type: "movie",
    label: "Download Hollywood Movie",
  }));

  const allSeries = [...newSeries, ...popularSeries, ...seriesData].map(
    (item) => ({
      ...item,
      type: "series",
      label: "TV Series",
    })
  );

  const combined = [...allMovies, ...allSeries];

  const filtered = combined.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleClick = (item) => {
    if (item.type === "movie") {
      navigate(`/movies/${item.slug}`);
    } else {
      navigate(`/series/${item.slug}`);
    }
  };

  return (
    <div className="searchbar" style={{ position: "relative" }}>
      <input
        className="S-button"
        placeholder="Search Here"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {query && (
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: 0,
            right: 0,
            zIndex: 1000,
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            maxHeight: "400px",
            overflowY: "auto",
          }}
        >
          {filtered.slice(0, 4).map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(item)}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                borderBottom: "1px solid #eee",
                cursor: "pointer",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "40px",
                  height: "55px",
                  objectFit: "cover",
                  marginRight: "10px",
                }}
              />
              <div>
                <div style={{ fontWeight: "bold", fontSize: "14px" }}>
                  {item.title}
                </div>
                <div style={{ fontSize: "12px", color: "#888" }}>
                  {item.label}
                </div>
              </div>
            </div>
          ))}

          {filtered.length > 4 && (
            <div
              style={{
                padding: "10px",
                textAlign: "center",
                backgroundColor: "#f1f1f1",
                cursor: "pointer",
                fontSize: "13px",
              }}
            >
              More Results.. ({filtered.length})
            </div>
          )}
        </div>
      )}

      <p className="dis">Disclaimer</p>
      <p className="p-tag">
        Nkiri.com does not claim ownership of any movie on this site. If your
        copyrighted material has been uploaded or links to your copyrighted
        material has been uploaded kindly click here to file a take down notice.
      </p>
      <p className="dis">Advertisement</p>
      <p className="dis">How To Support Us</p>
      <p className="p-tag">
        You can support us by donating cryptocurrency to us to help maintain the
        website. Nothing is too small. For more information{" "}
        <button className="click">CLICK HERE</button>
      </p>
    </div>
  );
}
