import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import seriesData from "../SeriesData"; // ✅ Switched to seriesData
import "../css/MovieDownload.css";

export default function RecommendedSeries() {
  const [recommendedSeries, setRecommendedSeries] = useState(null); // ✅ Renamed variable
  const location = useLocation();

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * seriesData.length);
    setRecommendedSeries(seriesData[randomIndex]); // ✅ Using seriesData
  }, [location]);

  if (!recommendedSeries) {
    return <div>No recommended series found</div>;
  }

  return (
    <Link
      to={`/series/${recommendedSeries.slug}`} // ✅ Correct path to series
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        className="R-video"
        style={{
          backgroundImage: `url(${recommendedSeries.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "red",
        }}
      ></div>
    </Link>
  );
}
