import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

export default function ReviewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const reviews = [
    {
      name: "Sarah Johnson",
      position: "CTO at TechVision",
      company: "TechVision Solutions",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      rating: 4,
      review: "Suraj delivered an exceptional e-commerce backend system that exceeded our expectations. His expertise in Node.js and MongoDB helped us scale efficiently. The API performance is outstanding!"
    },
    {
      name: "Michael Chen",
      position: "Product Manager",
      company: "InnovateLab",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      rating: 4,
      review: "Working with Suraj was great for our project. His technical skills are solid and he delivered good results. Communication could have been slightly better, but overall a positive experience."
    },
    {
      name: "Emily Rodriguez",
      position: "Lead Developer",
      company: "CloudFirst Inc",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      rating: 5,
      review: "Suraj's expertise in AWS and microservices architecture helped us modernize our entire backend infrastructure. His code quality and documentation are excellent. Highly recommended!"
    },
    {
      name: "David Thompson",
      position: "Startup Founder",
      company: "NextGen Analytics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      rating: 4,
      review: "Suraj built our analytics platform with good attention to detail. The Redis optimization was helpful for performance. Timeline was reasonable and the final product met our requirements well."
    }
  ];

  // Calculate average rating
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <section id="reviews" className="py-20 bg-amber-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Recommendations</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <motion.div 
                  className="w-16 h-16 rounded-full overflow-hidden mr-4 border-3 border-primary-200"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src={review.image} 
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900">{review.name}</h4>
                  <p className="text-primary-600 font-semibold">{review.position}</p>
                  <p className="text-gray-500 text-sm">{review.company}</p>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: index * 0.2 + i * 0.1 + 0.5 }}
                    >
                      <Star className={`w-5 h-5 ${i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary-200" />
                <motion.p 
                  className="text-gray-600 leading-relaxed pl-6 italic"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: index * 0.2 + 0.8 }}
                >
                  "{review.review}"
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Overall Rating */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg inline-block">
            <div className="flex items-center justify-center mb-4">
              <div className="flex mr-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-6 h-6 ${i < Math.floor(averageRating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="text-3xl font-bold text-gray-900">{averageRating.toFixed(1)}</span>
            </div>
            <p className="text-gray-600">Average rating from {reviews.length} satisfied clients</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}