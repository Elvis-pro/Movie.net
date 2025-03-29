import React from "react";
import "../css/TvSeries.css";
import Scrollto from "../scrollto";
import Tvserieslist from "./SeriesPost";

export default function TVSERIES() {
  return (
    <div className="inner-page">
      <div className="inner-list">
        <Tvserieslist />
      </div>
      <Scrollto />
    </div>
  );
}
