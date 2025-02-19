import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../css/animateddropdown.css"

function AnimatedDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      {/* Button aligned right */}
      <div className="flex justify-end">
        <button
          onClick={toggleMenu}
          className="px-6 py-2  font-semibold rounded-lg shadow-md transition-all duration-300 myclass"
        > 
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Dropdown expands below navbar and pushes content down */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`overflow-hidden bg-gray-100 w-full rounded-lg shadow-md mt-2 ${isOpen ? "block" : "hidden"}`}
      >
        <div className="links-container">
          <a>Home</a>
          <a>TV Series</a>
          <a href="http://www.facebook.com">Movies</a>
          <a>Genry</a>
          <a>How To Download</a>
        </div>
      </motion.div>
    </div>
  );
}

export default AnimatedDropdown;
