"use client"

import { Link } from "react-router-dom"
import { useTheme } from "../context/ThemeContext"

const NotFound = () => {
  const { darkMode } = useTheme()

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
        <p className="mb-8">The page you are looking for doesn't exist or has been moved.</p>
        <Link
          to="/"
          className={`inline-block px-6 py-3 rounded-lg ${
            darkMode ? "bg-cyan-600 hover:bg-cyan-700" : "bg-cyan-500 hover:bg-cyan-600"
          } text-white transition-colors duration-300`}
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
