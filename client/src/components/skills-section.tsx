import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Server, Database, Cloud } from "lucide-react";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [progressStarted, setProgressStarted] = useState(false);

  useEffect(() => {
    if (isInView && !progressStarted) {
      setTimeout(() => setProgressStarted(true), 500);
    }
  }, [isInView, progressStarted]);

  const skills = [
    {
      category: "Backend Development",
      icon: Server,
      items: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "JavaScript", level: 90 }
      ]
    },
    {
      category: "Databases",
      icon: Database,
      items: [
        { name: "MongoDB", level: 88 },
        { name: "Redis", level: 75 },
        { name: "Firestore", level: 70 }
      ]
    },
    {
      category: "DevOps & Cloud",
      icon: Cloud,
      items: [
        { name: "AWS (EC2, S3)", level: 80 },
        { name: "Docker", level: 75 },
        { name: "Git", level: 85 }
      ]
    }
  ];

  const overallSkills = [
    { name: "Backend Development", percentage: 90 },
    { name: "API Development", percentage: 85 },
    { name: "Cloud & DevOps", percentage: 80 },
    { name: "Problem Solving", percentage: 95 }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </motion.div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-primary-600 mb-4">
                <skill.icon className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{skill.category}</h3>
              <div className="space-y-3">
                {skill.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: (index * 0.2) + (itemIndex * 0.1) + 0.5 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-700">{item.name}</span>
                      <span className="font-semibold text-primary-600">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={progressStarted ? { width: `${item.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: (index * 0.2) + (itemIndex * 0.1) + 0.8 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Animated Progress Bars */}
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Proficiency Overview</h3>
          <div className="space-y-6">
            {overallSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: index * 0.2 + 0.8 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-700">{skill.name}</span>
                  <span className="font-semibold text-primary-600">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    className="bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full"
                    initial={{ width: 0 }}
                    animate={progressStarted ? { width: `${skill.percentage}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: index * 0.2 + 1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
