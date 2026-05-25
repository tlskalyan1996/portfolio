import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>

        <p className="text-gray-400 leading-relaxed text-lg">
          Data Engineer with 5+ years of experience in building scalable data pipelines using Apache Spark, Hive, and Hadoop ecosystem. 
          Skilled in processing large-scale structured and semi-structured data with strong expertise in performance tuning and optimization. 
          Experienced in working with distributed systems, AWS S3, and handling end-to-end data workflows. 
          Proven ability to troubleshoot production issues and deliver reliable solutions in Agile environments.
        </p>

      </div>
    </section>
  );
};

export default About;