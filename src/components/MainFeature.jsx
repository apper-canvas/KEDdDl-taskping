import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const MainFeature = () => {
  const features = [
    "Task management and organization",
    "Project timeline visualization",
    "Team collaboration tools",
    "Progress tracking dashboard",
    "Real-time notifications"
  ];

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Streamline Your Workflow with TaskPing
          </h2>
          <p className="text-lg text-gray-600">
            Boost productivity and keep your team aligned with our intuitive
            task management platform designed for modern workflows.
          </p>
          
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </motion.li>
            ))}
          </ul>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium mt-4 hover:bg-blue-700 transition-colors"
          >
            Get Started
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-100 rounded-xl p-6 relative"
        >
          <div className="aspect-video bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
              alt="TaskPing Dashboard Preview" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white py-3 px-5 rounded-lg shadow-lg">
            <span className="font-bold">New</span> Dashboard View
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MainFeature;