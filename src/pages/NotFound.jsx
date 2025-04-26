import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

const NotFound = () => {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.5,
            delay: 0.2,
            type: "spring",
            stiffness: 200
          }}
          className="inline-block p-5 rounded-full bg-surface-100 dark:bg-surface-800"
        >
          <AlertTriangle size={48} className="text-secondary" />
        </motion.div>
      </div>
      
      <motion.h1 
        className="text-4xl font-bold mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        404
      </motion.h1>
      
      <motion.h2 
        className="text-2xl font-semibold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Page Not Found
      </motion.h2>
      
      <motion.p 
        className="text-surface-600 dark:text-surface-300 mb-8 max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        The page you're looking for doesn't exist or has been moved.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Link 
          to="/" 
          className="btn btn-primary inline-flex items-center gap-2"
        >
          Return Home
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default NotFound;