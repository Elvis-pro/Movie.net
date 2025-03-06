import React from "react";
import Notice from "../components/Notice";
import AdsDivs from "../components/AdsDivs";
import Scrollto from "../scrollto";
import "../css/HomePage.css";
import "../style.css";

const Home = () => {
  return (
    <div className="page">
      <div className="home">
        <div className="notice-box">
          <Notice />
        </div>
        <AdsDivs />
      </div>

      <Scrollto />
    </div>
  );
};

export default Home;
