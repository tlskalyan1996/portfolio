import React from "react";

const Navbar = () => {
   const [open, setOpen] = useState(false); 
  return (
    <nav className="fixed w-full z-50 bg-black/30 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        

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
          {/* Resume Dropdown */}
          <div className="relative inline-block">

            <button
              onClick={() => setOpen(!open)}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:scale-105 transition shadow-lg"
            >
              Resume ▼
            </button>

            {open && (
              <div className="absolute mt-3 w-52 bg-gray-900 border border-white/10 rounded-xl shadow-xl overflow-hidden">

                <a
                  href="/resume.pdf"
                  download
                  className="block px-4 py-3 hover:bg-white/10 transition"
                >
                  📄 Download PDF Resume
                </a>

                <a
                  href="/resume.docx"
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
    </nav>
  );
};

export default Navbar;