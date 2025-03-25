import { useState } from "react";
import series from "../SeriesData";

export default function SeriesGrid() {
  const [visibleSeries, setVisibleSeries] = useState(10);

  return (
    <div className="series-container">
      <h2 className="title">New Series Uploads</h2>
      <div
        className="series-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "15px",
          justifyContent: "center",
        }}
      >
        {series.slice(0, visibleSeries).map((seriesItem, index) => (
          <div
            key={index}
            className="series-card"
            style={{
              border: "1px solid #cccccc",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            <div
              className="series-image"
              style={{
                backgroundImage: `url(${seriesItem.image})`,
                height: "250px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "5px",
              }}
            ></div>
            <div className="series-info">
              <h3 style={{ fontSize: "12px", margin: "10px 0" }}>
                {seriesItem.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Link to Load More */}
      <a href="/" className="load-more">
        Load More Series
      </a>
    </div>
  );
}
