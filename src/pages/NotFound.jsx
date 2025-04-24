import { Link } from "react-router-dom"
import { useTheme } from "../context/ThemeContext"
import { motion } from "framer-motion"
import { FileQuestion, Home } from 'lucide-react'

const NotFound = () => {
  const { darkMode } = useTheme()

  return (
    <div className={`min-h-screen flex items-center justify-center ${darkMode ? "bg-gray-900" : "bg-gradient-to-br from-cyan-50 to-blue-100"}`}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`max-w-md w-full mx-auto text-center p-8 rounded-2xl shadow-2xl ${darkMode ? "bg-gray-800 shadow-cyan-900/20" : "bg-white/90 backdrop-blur-sm shadow-cyan-200/50"}`}
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 260, damping: 20 }}
          className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${darkMode ? "bg-cyan-900/30" : "bg-cyan-100"}`}
        >
          <FileQuestion className={`w-12 h-12 ${darkMode ? "text-cyan-400" : "text-cyan-600"}`} />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className={`text-6xl font-bold mb-2 ${darkMode ? "text-cyan-400" : "text-cyan-600"}`}
        >
          404
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-2xl font-semibold mb-4"
        >
          Page Not Found
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-8 text-lg"
        >
          The page you are looking for doesn't exist or has been moved.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Link
            to="/"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg ${
              darkMode ? "bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800" : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
            } text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default NotFound
