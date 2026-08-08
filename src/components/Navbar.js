import React, { useState } from "react";
 
const Navbar = () => {
  const [open, setOpen] = useState(false);
 
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-5xl mx-auto px-6">
       
        <div className="h-20 flex items-center">
         
          {/* Navigation Links */}
          <div className="hidden md:flex items-center justify-between w-full text-gray-300">
 
            <a
              href="#about"
              className="hover:text-white transition duration-300"
            >
              About
            </a>
 
            <a
              href="#experience"
              className="hover:text-white transition duration-300"
            >
              Experience
            </a>
 
            <a
              href="#projects"
              className="hover:text-white transition duration-300"
            >
              Projects
            </a>
 
            <a
              href="#skills"
              className="hover:text-white transition duration-300"
            >
              Skills
            </a>
 
            <a
              href="#contact"
              className="hover:text-white transition duration-300"
            >
              Contact
            </a>
 
            {/* Resume Dropdown */}
            <div className="relative">
 
              <button
                onClick={() => setOpen(!open)}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:scale-105 transition duration-300 shadow-lg"
              >
                Resume ▼
              </button>
 
              {open && (
                <div className="absolute right-0 mt-3 w-52 bg-gray-900 border border-white/10 rounded-xl shadow-xl overflow-hidden">
 
                  <a
                    href="/Thalluru_Lakshmi_Sai_Kalyan_Resume.pdf"
                    download
                    className="block px-4 py-3 hover:bg-white/10 transition"
                  >
                    📄 Download PDF Resume
                  </a>
 
                  <a
                    href="/Thalluru_Lakshmi_Sai_Kalyan_Resume.docx"
                    download
                    className="block px-4 py-3 hover:bg-white/10 transition"
                  >
                    📝 Download Word Resume
                  </a>
 
                </div>
              )}
 
            </div>
 
          </div>
        </div>
 
      </div>
    </nav>
  );
};
 
export default Navbar;