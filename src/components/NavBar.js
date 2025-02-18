import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import "../css/navbar.css";
import AnimatedDropdown from './AnimatedDropdown';

const NavBar = () => {
  return (
    <>
      <div className='navbar'>
        <div className="left">
          <div className="logo-container">
            <h2>MVN</h2>
          </div>
        </div>

        <div className="right">
          <Link>Home</Link>
          <Link>TV Series</Link>
          <Link>Movies</Link>
          <Link>Genry</Link>
          <Link>How To Download</Link>
        </div>  
      </div>

      <div className="mobile-navbar">
        <div className="left">
          <div className="logo-container">
            <h2>MVN</h2>
          </div>
        </div>
        <AnimatedDropdown />
      </div>
    </>  
  )
}

export default NavBar