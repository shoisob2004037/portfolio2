import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileQuestion, Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full mx-auto text-center p-8 academic-card"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 260, damping: 20 }}
          className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center bg-[var(--accent-light)] text-[var(--accent)]"
        >
          <FileQuestion className="w-10 h-10" />
        </motion.div>

        <h1 className="font-serif text-5xl font-bold mb-2 text-[var(--accent)]">404</h1>
        <h2 className="font-serif text-xl font-semibold mb-4 text-[var(--text-primary)]">Page Not Found</h2>
        <p className="mb-8 text-base text-[var(--text-secondary)]">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <Link to="/" className="btn-academic">
          <Home className="w-4 h-4" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;