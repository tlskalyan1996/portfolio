import React from "react";
import profile from "../assets/Kalyan.jpeg";
import { useState } from "react";
const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div className="text-center md:text-left">

          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Thalluru Lakshmi Sai Kalyan
          </h1>

          <p className="text-xl text-gray-400 mb-4">
            Data Engineer | 6.5+ Years Experience|TCS
          </p>

          <p className="text-gray-500 mb-6 max-w-lg">
            Building and optimizing data pipelines across diverse payment domains including P2P, Wire, ACH, and Bill Payments, while designing fraud detection models and analytical workflows using PySpark, Hive and SQL.
          </p>

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

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">

          <div className="relative">

            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30"></div>

            <img
              src={profile}
              alt="profile"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white/10 shadow-xl"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
