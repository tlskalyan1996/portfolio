import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Data Pipeline Optimization",
    company: "Bank of America",
    problem: "Slow and inefficient data processing pipelines impacting performance.",
    solution: "Redesigned pipelines using PySpark and optimized transformations.",
    impact: "Improved processing efficiency and reduced execution time.",
    tech: ["PySpark", "Hive", "Hadoop"],
  },
  {
    title: "ETL Pipeline Development",
    company: "H.E.B",
    problem: "Handling large-scale raw data from multiple sources.",
    solution: "Built scalable ETL pipelines using Spark and Scala.",
    impact: "Enabled reliable and efficient data transformation and storage.",
    tech: ["Scala", "Spark", "AWS S3"],
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-black text-white">

      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Key Projects
      </h2>

      <div className="max-w-5xl mx-auto space-y-10">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:border-purple-400 transition"
          >

            <h3 className="text-2xl font-semibold mb-2">
              {project.title}
            </h3>

            <p className="text-blue-400 mb-4">{project.company}</p>

            <div className="space-y-2 text-gray-400">
              <p><span className="text-white font-medium">Problem:</span> {project.problem}</p>
              <p><span className="text-white font-medium">Solution:</span> {project.solution}</p>
              <p><span className="text-white font-medium">Impact:</span> {project.impact}</p>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Projects;