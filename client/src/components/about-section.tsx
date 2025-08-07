import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Backend Developer from Lucknow, India</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a results-oriented Backend Developer with 4+ years of experience in designing, developing, and deploying scalable backend systems. I specialize in Node.js, MongoDB, Express, and AWS, with expertise in microservices architecture.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My passion lies in building production-ready APIs, integrating innovative solutions like blockchain payments, and optimizing server performance. I'm known for cross-team collaboration, proficiency in Agile practices, and delivering clean, maintainable code.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <motion.div 
                className="text-center p-6 bg-gray-50 rounded-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-primary-600 mb-2">4+</div>
                <div className="text-gray-600">Years Experience</div>
              </motion.div>
              <motion.div 
                className="text-center p-6 bg-gray-50 rounded-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
                <div className="text-gray-600">Projects Completed</div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div
                className="rounded-2xl shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/attached_assets/WhatsApp Image 2025-07-13 at 12.14.23 PM_1754537244810.jpeg" 
                  alt="Suraj Singh - Backend Developer" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
