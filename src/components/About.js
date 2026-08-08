import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>

        <p className="text-gray-400 leading-relaxed text-lg">
          Data Engineer with 6.5+ years of total professional experience, including nearly 4+ years of hands-on experience in the Hadoop Ecosystem, 
          designing and developing scalable, high-performance data applications using Apache Spark, PySpark, Hive, and SQL. 
          Skilled in building and optimizing real-time and batch data pipelines, data ingestion frameworks, and 
          cloud-based big data solutions (AWS, Azure) within Agile delivery environments. 
          Proven ability to partner with cross-functional teams to translate business requirements into reliable, 
          production-grade data engineering solutions
        </p>

      </div>
    </section>
  );
};

export default About;