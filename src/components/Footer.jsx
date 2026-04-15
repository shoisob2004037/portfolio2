"use client"

import { Link } from "react-router-dom"
import { useTheme } from "../context/ThemeContext"

const Footer = () => {
  const { darkMode } = useTheme()

  return (
    <footer
      className={`py-12 ${darkMode ? "bg-gradient-to-r from-gray-800 to-gray-900" : "bg-gradient-to-r from-cyan-700 to-cyan-800"} transition-colors duration-300`}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Website Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Quick Links</h3>
            <div className="w-16 h-px bg-cyan-500 mx-auto md:mx-0 mb-6"></div>
            <ul className="flex flex-col gap-3 text-gray-300">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/skills" className="hover:text-white transition-colors">Skills</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/publications" className="hover:text-white transition-colors">Publications</Link></li>
              <li><Link to="/certifications" className="hover:text-white transition-colors">Certifications</Link></li>
              <li><Link to="/hobby" className="hover:text-white transition-colors">Hobby</Link></li>
              <li><Link to="/about-me" className="hover:text-white transition-colors">About Me</Link></li>
              <li><Link to="/reviews" className="hover:text-white transition-colors">Reviews</Link></li>
            </ul>
          </div>

          {/* Social & Academic Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Connect With Me</h3>
            <div className="w-16 h-px bg-cyan-500 mx-auto md:mx-0 mb-6"></div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-3xl">
              {/* Academic Links */}
              <a
                href="https://scholar.google.com/citations?user=HoeeAaIAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Google Scholar"
                title="Google Scholar"
              >
                <i className="fas fa-book"></i>
              </a>
              <a
                href="https://orcid.org/my-orcid?orcid=0009-0001-1757-5180"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="ORCID"
                title="ORCID"
              >
                <i className="fas fa-id-card"></i>
              </a>
              <a
                href="https://www.researchgate.net/profile/Mahadi-Shaisob?ev=hdr_xprf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="ResearchGate"
                title="ResearchGate"
              >
                <i className="fab fa-researchgate"></i>
              </a>

              {/* Tech & Professional Links */}
              <a
                href="https://github.com/shoisob2004037"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="GitHub"
                title="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mahadi-hasan-shaisob-bb72892b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Contact / Copyright */}
          <div className="text-center md:text-left lg:col-span-1">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Get In Touch</h3>
            <div className="w-16 h-px bg-cyan-500 mx-auto md:mx-0 mb-6"></div>
            <p className="text-gray-300 leading-relaxed">
              Feel free to reach out for collaborations, research discussions, 
              or any web development projects.
            </p>
            
            <div className="mt-8 text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Mahadi Hasan Shaisob.<br />
              All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer