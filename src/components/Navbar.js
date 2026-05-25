import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-black/30 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo / Name */}
        <h1 className="text-lg md:text-xl font-bold text-white tracking-wide">
          Kalyan
        </h1>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-8 text-gray-300">

          <a href="#about" className="hover:text-white transition">
            About
          </a>

          <a href="#experience" className="hover:text-white transition">
            Experience
          </a>

          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>

          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white hover:scale-105 transition"
          >
            Resume
          </a>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;