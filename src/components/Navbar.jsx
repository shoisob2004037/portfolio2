"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { useTheme } from "../context/ThemeContext"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { darkMode, toggleDarkMode } = useTheme()
  const location = useLocation()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <header className={`sticky top-0 z-50 ${darkMode ? "bg-gray-800" : "bg-cyan-700"} transition-colors duration-300`}>
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/Shaisob1.png" alt="Logo" className="h-16 w-auto" />
        </Link>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${darkMode ? "bg-gray-700 text-yellow-300" : "bg-cyan-600 text-white"}`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <i className="fas fa-sun text-lg"></i> : <i className="fas fa-moon text-lg"></i>}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded bg-cyan-600 text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <i className="fas fa-times text-xl"></i> : <i className="fas fa-bars text-xl"></i>}
          </button>
        </div>
      </div>

      <nav
        className={`
          fixed top-0 right-0 h-full w-64 
          ${darkMode ? "bg-gradient-to-l from-gray-800 to-gray-900" : "bg-gradient-to-l from-cyan-700 to-cyan-900"} 
          transform transition-transform duration-300 ease-in-out z-50
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          md:hidden
        `}
      >
        <div className="p-4 flex justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded bg-cyan-600 text-white"
            aria-label="Close menu"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        <ul className="flex flex-col gap-2 p-4">
          <NavItem to="/" icon={<i className="fas fa-home"></i>} label="Home" />
          <NavItem to="/expertise" icon={<i className="fas fa-brain"></i>} label="Expertise" />
          <NavItem to="/projects" icon={<i className="fas fa-list-check"></i>} label="Projects" />
          <NavItem to="/certifications" icon={<i className="fas fa-certificate"></i>} label="Certifications" />
          <NavItem to="/hobby" icon={<i className="fas fa-book-reader"></i>} label="Hobby" />
          <NavItem to="/about-me" icon={<i className="fas fa-camera"></i>} label="About Me" />
          <NavItem to="/reviews" icon={<i className="fas fa-star"></i>} label="Reviews" />
        </ul>
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden md:block border-t border-cyan-600">
        <ul className="container mx-auto flex justify-center gap-8 py-2">
          <NavItem to="/" icon={<i className="fas fa-home"></i>} label="Home" />
          <NavItem to="/expertise" icon={<i className="fas fa-brain"></i>} label="Expertise" />
          <NavItem to="/projects" icon={<i className="fas fa-list-check"></i>} label="Projects" />
          <NavItem to="/certifications" icon={<i className="fas fa-certificate"></i>} label="Certifications" />
          <NavItem to="/hobby" icon={<i className="fas fa-book-reader"></i>} label="Hobby" />
          <NavItem to="/about-me" icon={<i className="fas fa-camera"></i>} label="About Me" />
          <NavItem to="/reviews" icon={<i className="fas fa-star"></i>} label="Reviews" />
        </ul>
      </nav>
    </header>
  )
}

const NavItem = ({ to, icon, label }) => {
  const location = useLocation()
  const isActive = location.pathname === to
  const { darkMode } = useTheme()

  return (
    <li>
      <Link
        to={to}
        className={`
          flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200
          ${
            isActive
              ? darkMode
                ? "bg-gray-700 text-cyan-400"
                : "bg-cyan-600 text-white"
              : darkMode
                ? "text-gray-300 hover:bg-gray-700"
                : "text-white hover:bg-cyan-600"
          }
        `}
      >
        {icon}
        <span>{label}</span>
      </Link>
    </li>
  )
}

export default Navbar
