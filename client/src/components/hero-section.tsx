import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, floatingAnimation, pulseAnimation } from "@/lib/animations";
import surajPhoto from "@assets/WhatsApp Image 2025-07-13 at 12.14.23 PM_1754540083437.jpeg";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const stats = [
    { number: "4+", label: "Years", sublabel: "Work Experience" },
    { number: "12", label: "Startups", sublabel: "Served" },
    { number: "32", label: "Projects", sublabel: "Completed" },
    { number: "8", label: "Countries", sublabel: "Worked Remotely" }
  ];

  const skills = ["Backend Developer", "Node.js Engineer", "Data Scientist", "UI/UX Designer"];

  return (
    <section 
      id="home" 
      className="min-h-screen bg-amber-50 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Floating Background Elements */}
      <motion.div 
        className="absolute top-20 right-20 w-32 h-32 bg-orange-200 rounded-full opacity-20"
        variants={floatingAnimation}
        animate="animate"
      />
      <motion.div 
        className="absolute bottom-40 left-20 w-24 h-24 bg-yellow-200 rounded-full opacity-20"
        variants={floatingAnimation}
        animate="animate"
        transition={{ delay: 1 }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-amber-200 rounded-full opacity-30"
        variants={pulseAnimation}
        animate="animate"
      />
      
      {/* Navigation */}
      <nav className="flex justify-between items-center py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-gray-900">Portfolio</div>
        <div className="hidden md:flex space-x-8 text-gray-600">
          <button onClick={() => scrollToSection('about')} className="hover:text-gray-900 transition-colors">About</button>
          <button onClick={() => scrollToSection('skills')} className="hover:text-gray-900 transition-colors">Skills</button>
          <button onClick={() => scrollToSection('experience')} className="hover:text-gray-900 transition-colors">Experience</button>
          <button onClick={() => scrollToSection('reviews')} className="hover:text-gray-900 transition-colors">Recommendations</button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-gray-900 transition-colors">Products</button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto pt-20">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Left Side - Photo and Contact */}
          <motion.div
            variants={fadeInLeft}
            className="flex flex-col items-center lg:items-start"
          >
            <div className="relative mb-8">
              <div className="w-80 h-96 rounded-3xl overflow-hidden shadow-2xl bg-gray-200">
                <img 
                  src={surajPhoto} 
                  alt="Suraj Singh - Backend Developer" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error('Image failed to load:', e);
                    e.currentTarget.style.display = 'none';
                  }}
                  onLoad={() => console.log('Image loaded successfully')}
                />
              </div>
            </div>
            
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </motion.button>
          </motion.div>

          {/* Right Side - Info */}
          <motion.div
            variants={fadeInRight}
            className="space-y-8"
          >
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Suraj Singh
                <div className="flex items-center gap-3 mt-2">
                  <motion.a
                    href="https://linkedin.com/in/surajsingh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Linkedin className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://github.com/surajsingh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-800 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Github className="w-6 h-6" />
                  </motion.a>
                </div>
              </h1>
              
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                Committed to convert every possibility into reality. What truly excites me 
                is crafting designs with absolute precision and creating well-structured, 
                seamless backends. I have a genuine knack for fusing different domains 
                and technologies with my development skills. Over the course of 4+ years, 
                I've immersed myself in various commercial projects, constantly embracing 
                new tech stacks with each opportunity. This journey has not only made 
                me proficient in the MERN stack but has also transformed me into a 
                quick learner, adapting effortlessly to new technologies and changing 
                scenarios.
              </p>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-amber-200 text-amber-800 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-lg font-semibold text-gray-700">{stat.label}</div>
                  <div className="text-sm text-gray-500">{stat.sublabel}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
