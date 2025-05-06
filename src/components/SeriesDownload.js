import { useParams } from "react-router-dom";
import seriesData from "../SeriesData";
import popularSeries from "../PopularSData";
import newSeries from "../NewSeriesList";
import Search from "../Search_section";
import ScrollToTop from "../scrollto";
import Rvideo from "../components/Recommended";
import UMAL from "./UMAL";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
import "../css/MovieDownload.css";
import "../style.css";

export default function SeriesDownload() {
  const { slug } = useParams();

  // Combine all sources
  const combinedSeries = [...seriesData, ...popularSeries, ...newSeries];

  const series = combinedSeries.find((s) => s.slug === slug);
  const [selectedSeason, setSelectedSeason] = useState(null);

  if (!series) {
    return <h2>Series not found</h2>;
  }

  const handleSeasonClick = (seasonIndex) => {
    setSelectedSeason(seasonIndex);
  };

  return (
    <div className="movie-detail App">
      <div className="grid-1 grid-d">
        <img
          src={`/images/${series.image}`}
          alt={series.title}
          style={{ width: "100%", borderRadius: "8px" }}
        />
        <div className="download-size">
          <h1
            style={{
              fontSize: "15px",
              marginLeft: "20px",
              fontWeight: "bolder",
              color: "#62788f",
            }}
          >
            {series.title}
          </h1>
          <p
            style={{
              fontSize: "12px",
              marginLeft: "20px",
              fontWeight: "lighter",
              color: "#51728f",
            }}
          >
            Category: {series.category}
          </p>
        </div>

        <h3 style={{ fontSize: "20px", textAlign: "center" }}>
          Select a Season
        </h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          {series.seasons?.map((season, index) => (
            <button
              key={index}
              onClick={() => handleSeasonClick(index)}
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                background: "#007bff",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              {`Season ${season.season}`}
            </button>
          ))}
        </div>

        {selectedSeason !== null && (
          <>
            <h3 style={{ marginTop: "20px", textAlign: "center" }}>
              Episodes in Season {series.seasons[selectedSeason].season}
            </h3>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              {series.seasons[selectedSeason].episodes.map((ep, idx) => (
                <li key={idx} style={{ margin: "10px 0", textAlign: "center" }}>
                  <span style={{ fontWeight: "bold" }}>{ep.title}</span>
                  <div>
                    <a
                      href={ep.downloadLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "8px 16px",
                        backgroundColor: "#28a745",
                        color: "white",
                        textDecoration: "none",
                        borderRadius: "4px",
                        display: "inline-block",
                        marginTop: "5px",
                      }}
                    >
                      👉 Download Episode
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}

        <div className="Recommend">Recommended after {series.title}</div>
        <div className="Recommend-movie">
          <Rvideo />
          <div className="Tags">
            <h6 style={{ fontSize: "15px", fontWeight: "bold" }}>Tags: </h6>
          </div>
        </div>
        <div className="UMAL">
          <ChevronRightIcon
            style={{ color: "blue", fontSize: "25px", fontWeight: "700" }}
          />
          <span style={{ fontWeight: "bold", marginTop: "4vh" }}>
            YOU MIGHT ALSO LIKE
          </span>
        </div>
        <div className="Recommended_movies">
          <UMAL />
        </div>
      </div>
      <div className="grid-2">
        <Search />
      </div>
      <ScrollToTop />
    </div>
  );
}
