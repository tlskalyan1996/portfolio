import React from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Data Engineering",
    skills: ["Apache Spark", "Hive", "Hadoop", "Sqoop"]
  },
  {
    title: "Programming",
    skills: ["SQL", "Scala", "Python", "Shell"]
  },
  {
    title: "Tools & Cloud",
    skills: ["AWS S3", "AutoSys", "Jira"]
  }
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-black text-white">

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
      >
        Skills
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8"
      >

        {skillGroups.map((group, index) => (
          <motion.div
            key={index}
            variants={item}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg"
          >
            <h3 className="text-lg font-semibold mb-4 text-blue-400">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full text-sm border border-white/10 hover:border-purple-400 transition"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}

      </motion.div>

    </section>
  );
};

export default Skills;