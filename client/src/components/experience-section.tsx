import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const experiences = [
    {
      title: "Backend Developer",
      company: "IdeaUsher",
      location: "Mohali",
      period: "May 2022 - Present",
      achievements: [
        "Developed scalable event ticketing APIs with payment integration (Tixet)",
        "Built e-commerce backends with complex subscription logic (Angolazone)",
        "Integrated blockchain for product purchases (BlockVare)",
        "Developed fitness tracking and workout APIs (PMAC)",
        "Created virtual real estate platform using blockchain (Veelive)",
        "Built backend services for e-learning platform (Teaching With Purpose)"
      ]
    },
    {
      title: "Backend Intern",
      company: "FunctionUp",
      location: "Bangalore",
      period: "Oct 2021 - Mar 2022",
      achievements: [
        "Built RESTful APIs using Node.js, Express, and MongoDB",
        "Gained experience with Redis, AWS S3, and caching strategies",
        "Learned Git version control and collaborative development"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-amber-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Experience</h2>
        </motion.div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary-200"></div>
          
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="relative mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              
              <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                  <span className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                    {experience.period}
                  </span>
                </div>
              </div>
              
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'}`}>
                <motion.div
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{experience.title}</h3>
                  <h4 className="text-xl font-semibold text-primary-600 mb-2">{experience.company}</h4>
                  <p className="text-gray-500 mb-4">{experience.location}</p>
                  <ul className="space-y-2 text-gray-600">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <motion.li
                        key={achievementIndex}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.3 + achievementIndex * 0.1 + 0.5 }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
