import { useState } from "react";
import { motion } from "framer-motion";

function AnimatedDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center mt-10 bg-secondary">
      {/* Toggle Button */}
      <button
        onClick={toggleMenu}
        className="px-6 py-2 bg-blue-600 text-black font-semibold rounded-lg shadow-md transition-all duration-300"
      >
        {isOpen ? "Close Menu" : "Open Menu"}
      </button>

      {/* Dropdown Menu with Animation */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden bg-gray-100 mt-4 w-48 rounded-lg shadow-md"
      >
        <ul className="py-2">
          <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Home</li>
          <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">About</li>
          <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Services</li>
          <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Contact</li>
        </ul>
      </motion.div>
    </div>
  );
}

export default AnimatedDropdown;
