import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer, scaleOnHover } from "@/lib/animations";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    // Frontend Technologies
    { name: "HTML", color: "bg-orange-100", icon: "🌐" },
    { name: "JavaScript", color: "bg-yellow-100", icon: "JS" },
    { name: "TypeScript", color: "bg-blue-100", icon: "TS" },
    { name: "React", color: "bg-cyan-100", icon: "⚛️" },
    
    // Backend Technologies
    { name: "Node.js", color: "bg-green-100", icon: "🟢" },
    { name: "Express.js", color: "bg-gray-100", icon: "EX" },
    { name: "Python", color: "bg-blue-100", icon: "🐍" },
    { name: "Java", color: "bg-red-100", icon: "☕" },
    
    // Databases
    { name: "MongoDB", color: "bg-green-100", icon: "🍃" },
    { name: "Redis", color: "bg-red-100", icon: "📦" },
    { name: "Firebase", color: "bg-yellow-100", icon: "🔥" },
    { name: "PostgreSQL", color: "bg-blue-100", icon: "🐘" },
    
    // DevOps & Tools
    { name: "Docker", color: "bg-blue-100", icon: "🐳" },
    { name: "AWS", color: "bg-orange-100", icon: "☁️" },
    { name: "Git", color: "bg-gray-100", icon: "📝" },
    { name: "Jenkins", color: "bg-blue-100", icon: "🔧" },
    
    // Additional Skills
    { name: "Nest.js", color: "bg-red-100", icon: "🚀" },
    { name: "FastAPI", color: "bg-green-100", icon: "⚡" },
    { name: "GraphQL", color: "bg-pink-100", icon: "📊" },
    { name: "Kubernetes", color: "bg-blue-100", icon: "⚙️" }
  ];

  return (
    <section id="skills" className="py-20 bg-amber-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Skills</h2>
        </motion.div>
        
        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className={`${skill.color} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group cursor-pointer`}
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                visible: { 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.5,
                    ease: "easeOut"
                  }
                }
              }}
              whileHover={{ y: -8, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-sm font-semibold text-gray-800">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Additional Technologies */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            And many more technologies I've worked with in my 4+ years of development experience, 
            always eager to learn and adapt to new tech stacks as per project requirements.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
