import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import AnimatedDropdown from "./AnimatedDropdown";

const NavBar = () => {
  return (
    <>
      {/* Desktop Navbar */}
      <div className="navbar">
        <div className="left">
          <div className="logo-container">
            <h2>MVN</h2>
          </div>
        </div>

        <div className="right">
          <Link to="home">Home</Link>
          <Link>TV Series</Link>
          <Link>Movies</Link>
          <Link>Genry</Link>
          <Link>How To Download</Link>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="mobile-navbar">
        <div className="left">
          <div className="logo-container">
            <h2>MVN</h2>
          </div>
        </div>

       
      </div>

      {/* Dropdown Menu - Moved outside navbar so it pushes content down */}
      <div className="dropdown-container">
        <AnimatedDropdown />
      </div>
    </>
  );
};

export default NavBar;
