import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-950 text-white text-center">
      
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Contact
      </h2>

      {/* Email + Phone */}
      <p className="text-gray-400">tlskalyan1996@gmail.com</p>
      <p className="text-gray-400 mb-6">+91 9494085752</p>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-6">

        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-white/5 border border-white/10 rounded-full hover:scale-110 hover:border-purple-400 transition"
        >
          <FaGithub size={22} />
        </a>

        <a
          href="https://www.linkedin.com/in/kalyan-thalluru/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-white/5 border border-white/10 rounded-full hover:scale-110 hover:border-blue-400 transition"
        >
          <FaLinkedin size={22} />
        </a>

      </div>

    </section>
  );
};

export default Contact;