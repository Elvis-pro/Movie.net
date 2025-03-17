import React from "react";
import "../css/HomePage.css";

export default function AdsDivs() {
  return (
    <div className="adsdivs">
      <div style={{ display: "flex" }}>
        <div className="b1"></div>
        <div className="b2">
          <div className="inner-adsdiv"></div>
        </div>
      </div>
      <div className="AdsDivs2">
        <div className="s-b1"></div>
        <div className="s-b2"></div>
      </div>
    </div>
  );
}
