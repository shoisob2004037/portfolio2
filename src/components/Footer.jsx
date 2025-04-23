"use client"

import { Link } from "react-router-dom"
import { useTheme } from "../context/ThemeContext"

const Footer = () => {
  const { darkMode } = useTheme()

  return (
    <footer
      className={`py-8 ${darkMode ? "bg-gradient-to-r from-gray-800 to-gray-900" : "bg-gradient-to-r from-cyan-700 to-cyan-800"} transition-colors duration-300`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Website Direct Links</h3>
            <div className="w-1/2 h-px bg-gray-600 mx-auto mb-4"></div>
            <ul className="flex flex-wrap justify-center gap-4">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/expertise" className="text-gray-300 hover:text-white">
                  Expertise
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/hobby" className="text-gray-300 hover:text-white">
                  Hobby
                </Link>
              </li>
              <li>
                <Link to="/about-me" className="text-gray-300 hover:text-white">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-gray-300 hover:text-white">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Social Links</h3>
            <div className="w-1/2 h-px bg-gray-600 mx-auto mb-4"></div>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.facebook.com/hasan.shoisob"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a
                href="https://www.instagram.com/_shoisob_is_here_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a
                href="https://github.com/shoisob2004037"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mahadi-hasan-shaisob-bb72892b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Mahadi Hasan Shaisob. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
