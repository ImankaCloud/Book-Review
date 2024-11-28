import { Link } from "react-router-dom";
import { FaHome, FaBook } from "react-icons/fa";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen flex items-center justify-center bg-blue-50 px-4"
    >
      <div className="text-center space-y-6 max-w-lg">
        <div className="flex justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative">
              <FaBook className="text-9xl text-blue-600 mb-4 relative z-10" />
              <div className="absolute inset-0 blur-xl bg-blue-200 rounded-full scale-150 z-0"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="relative z-10"
        >
          <h1 className="text-6xl font-bold text-blue-900 mb-2">404</h1>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-blue-700 mb-8">
            Oops! Looks like this page has gone missing from our bookshelf.
            Let's get you back to exploring some great book reviews!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center space-x-2 px-8 py-4 
                     bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                     transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <FaHome className="text-lg" />
            <span>Return Home</span>
          </Link>
        </motion.div>

        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-200 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-200 rounded-full blur-2xl"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFound;
