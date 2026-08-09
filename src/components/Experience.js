import React, { useState } from "react";
import { motion } from "framer-motion";
 
const timeline = [
  {
    type: "work",
    title: "IT Analyst",
    org: "TCS (Bank of America)",
    duration: "Oct 2024 – Present",
    points: [
      "Designed and managed real-time payment data pipelines (Bill Payments, ACH, Card, and Wire Transfers) using Kafka and PySpark, ensuring scalable ingestion and processing across diverse transaction types.",
      "Developed and deployed fraud detection models leveraging historical claims and payment patterns to identify anomalies such as duplicate claims, velocity attacks, and geographic inconsistencies.",
      "Optimized PySpark jobs through partition tuning, broadcast joins, and efficient use of repartition/coalesce, reducing processing latency and improving throughput for 10GB+ datasets.",
      "Automated pipeline orchestration and monitoring with Kafka checkpoints and Spark Structured Streaming, and integrated Prometheus/Grafana dashboards for reliability and transparency.",
      "Collaborated on release cycles by integrating updated models and schema changes into production workflows with minimal downtime."
    ]
  },
  {
    type: "work",
    title: "Programming Analyst",
    org: "Cognizant (H.E.B)",
    duration: "Nov 2020 – Jul 2023",
    points: [
      "Developed Scala and Python based Spark code to seamlessly read data from HDFS and construct DataFrames for downstream processing.",
      "Built multi-stage Spark data transformation pipelines to support business and analytics needs",
      "Performed data cleansing and transformation to support accurate downstream analytics",
      "Implemented new features and enhancements based on customer requirements"
    ]
  },
  {
    type: "work",
    title: "Programming Analyst Trainee",
    org: "Cognizant (MetLife)",
    duration: "Dec 2018 – Nov 2020",
    points: [
      "Worked on Hive tables and HDFS data storage",
      "Processed semi-structured data (XML, JSON)",
      "Built data pipelines using Spark and AWS S3"
    ]
  },
  {
    type: "education",
    title: "Bachelor of Engineering",
    org: "R.M.D Engineering College",
    duration: "2014 – 2018",
    points: [
      "Completed Bachelor's degree in Engineering",
      "Built foundation in programming and data systems"
    ]
  }
];
const Experience = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="experience" className="py-24 bg-black text-white">

      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Career Journey
      </h2>

      <div className="relative max-w-6xl mx-auto">

        {/* Animated Timeline Line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1 }}
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-green-400"
        />

        {timeline.map((item, index) => {
          const isOpen = active === index;

          return (
            <div
              key={index}
              className={`mb-16 flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >

              {/* CARD */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-1/2 px-6"
              >
                <div
                  onClick={() => setActive(isOpen ? null : index)}
                  className={`cursor-pointer p-6 rounded-2xl border transition duration-300
  ${
    index === 0
      ? "ring-2 ring-purple-500 shadow-2xl bg-gradient-to-br from-purple-600/20 to-blue-600/20"
      : item.type === "education"
      ? "bg-gradient-to-br from-green-600/20 to-teal-600/20 border-green-400"
      : isOpen
      ? "bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-purple-500 shadow-xl"
      : "bg-white/5 border-white/10 hover:border-purple-400 hover:scale-105"
  }`}
                >

                  {/* Label */}
                  <span className={`text-xs px-3 py-1 rounded-full mb-3 inline-block
                    ${
                      item.type === "education"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-blue-500/20 text-blue-400"
                    }`}
                  >
                    {item.type === "education" ? "Education" : "Experience"}
                  </span>

                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-300">{item.org}</p>
                  <p className="text-gray-500 text-sm">{item.duration}</p>

                  {/* Expandable Content */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0
                    }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <ul className="list-disc ml-5 mt-3 text-gray-300 space-y-1">
                      {item.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </motion.div>

                </div>
              </motion.div>

              {/* NODE */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute left-1/2 transform -translate-x-1/2"
              >
                <div className="relative">
                  <div className={`w-5 h-5 rounded-full border-4 border-black
                    ${item.type === "education" ? "bg-green-400" : "bg-blue-500"}
                  `}></div>

                  <div className="absolute inset-0 rounded-full animate-ping opacity-40 bg-white"></div>
                </div>
              </motion.div>

            </div>
          );
        })}

      </div>
    </section>
  );
};

export default Experience;