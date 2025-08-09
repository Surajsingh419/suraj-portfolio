import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Star, Zap, Upload } from "lucide-react";
import { fadeInUp, staggerContainer, scaleOnHover } from "@/lib/animations";

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const projects = [
    {
      title: "E-commerce & Cart Management",
      description: "Built a comprehensive e-commerce backend with JWT-based authentication, cart management, and secure payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Node.js", "MongoDB", "JWT"],
      githubUrl: "https://github.com/Surajsingh419/shopping-cart-project/tree/project5/productManagment",
      liveUrl: "",
      featured: true,
      icon: Star
    },
    {
      title: "Book Management System",
      description: "Developed a CRUD backend system for book management with AWS S3 integration for file storage and retrieval.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Express", "AWS S3", "REST API"],
      githubUrl: "https://github.com/Surajsingh419/project4-book-managment/tree/project-4-bookManagement",
      liveUrl: "",
      featured: false,
      icon: Upload
    },
    {
      title: "URL Shortener Service",
      description: "Created a high-performance URL shortening service with Redis caching for optimal speed and analytics tracking.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Redis", "Node.js", "Analytics"],
      githubUrl: "https://github.com/Surajsingh419/PROJECT-3-URL-SHORTNER/tree/project3/urlshortner",
      liveUrl: "",
      featured: false,
      icon: Zap
    }
  ];

  return (
    <section id="projects" className="py-20 bg-amber-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">PRODUCTS <span className="text-orange-500">PROJECTS</span></h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { 
                    duration: 0.6,
                    ease: "easeOut"
                  }
                }
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <project.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 line-clamp-2">{project.title}</h3>
                  {project.featured && (
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 mr-1" />
                      <span className="text-xs font-medium">Featured</span>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`text-xs px-2 py-1 rounded-full ${
                        tech === 'Node.js' || tech === 'MongoDB' || tech === 'Redis'
                          ? 'bg-primary-100 text-primary-800'
                          : tech === 'AWS S3' || tech === 'Express'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View on GitHub
                  </motion.a>
                  
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-500 hover:text-gray-700 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* View More Projects Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="https://github.com/surajsingh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-black  text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
