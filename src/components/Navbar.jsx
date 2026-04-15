// Navbar.jsx - Fixed scrolling and overlapping issues

"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import {
  Menu,
  X,
  Sun,
  Moon,
  Home,
  Brain,
  ListChecks,
  FileText,
  Award,
  BookOpen,
  Camera,
  Star,
  Github,
  Linkedin,
  GraduationCap,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    { to: "/", icon: <Home className="w-5 h-5" />, label: "Home" },
    { to: "/skills", icon: <Brain className="w-5 h-5" />, label: "Skills" },
    {
      to: "/projects",
      icon: <ListChecks className="w-5 h-5" />,
      label: "Projects",
    },
    {
      to: "/publications",
      icon: <FileText className="w-5 h-5" />,
      label: "Publications",
    },
    {
      to: "/certifications",
      icon: <Award className="w-5 h-5" />,
      label: "Certifications",
    },
    { to: "/hobby", icon: <BookOpen className="w-5 h-5" />, label: "Hobbies" },
    { to: "/blogs", icon: <BookOpen className="w-5 h-5" />, label: "Blogs" }, // Add this line
    {
      to: "/about-me",
      icon: <Camera className="w-5 h-5" />,
      label: "Education & Me",
    },
    { to: "/reviews", icon: <Star className="w-5 h-5" />, label: "Reviews" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 ${darkMode ? "bg-gray-900" : "bg-cyan-700"} transition-colors duration-300 shadow-lg`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center z-50">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-16 xs:h-18 sm:h-20 md:h-24 lg:h-28 xl:h-30 2xl:h-34 w-auto object-contain transition-all duration-300"
            />
          </Link>

          {/* Right side buttons */}
          <div className="flex items-center gap-2 sm:gap-3 z-50">
            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                  : "bg-cyan-600 text-white hover:bg-cyan-500"
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* Menu Toggle Button - Always visible on all screen sizes */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 text-white hover:bg-gray-700"
                  : "bg-cyan-600 text-white hover:bg-cyan-500"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Navigation - Fixed scrolling */}
      <nav
        className={`
          fixed top-0 right-0 h-full w-72 sm:w-80 
          ${darkMode ? "bg-gradient-to-b from-gray-900 to-gray-800" : "bg-gradient-to-b from-cyan-700 to-cyan-800"} 
          shadow-2xl transform transition-transform duration-300 ease-in-out z-50
          flex flex-col
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Close button inside sidebar - Fixed position */}
        <div className="flex-shrink-0 p-4 flex justify-end border-b border-white/10">
          <button
            onClick={() => setIsOpen(false)}
            className={`p-2 rounded-lg transition-all duration-300 ${
              darkMode
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-cyan-600 text-white hover:bg-cyan-500"
            }`}
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* User Info in Sidebar - Fixed position */}
        <div className="flex-shrink-0 p-6 text-center border-b border-white/10">
          <div className="relative inline-block">
            <img
              src="/dp.jpg"
              alt="Mahadi Hasan Shaisob"
              className="w-24 h-24 rounded-full mx-auto border-4 border-cyan-400 object-cover"
            />
          </div>
          <h3
            className={`mt-3 font-semibold text-lg ${darkMode ? "text-white" : "text-white"}`}
          >
            Mahadi Hasan Shaisob
          </h3>
          <p className="text-cyan-300 text-sm mt-1">MERN Stack Developer</p>
        </div>

        {/* Navigation Items - SCROLLABLE AREA */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <ul className="flex flex-col gap-1 p-4">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                to={item.to}
                icon={item.icon}
                label={item.label}
                darkMode={darkMode}
                onClick={() => setIsOpen(false)}
              />
            ))}
          </ul>
        </div>

        {/* Social Links - Fixed at bottom with proper spacing */}
        <div className="flex-shrink-0 pb-6 pt-4 px-6 mt-auto">
          <div className="flex justify-center gap-4 pt-4 border-t border-white/10">
            <SocialLink
              href="https://github.com/shoisob2004037"
              icon="github"
              darkMode={darkMode}
            />
            <SocialLink
              href="https://www.linkedin.com/in/mahadi-hasan-shaisob-bb72892b9/"
              icon="linkedin"
              darkMode={darkMode}
            />
            <SocialLink
              href="https://scholar.google.com/citations?user=HoeeAaIAAAAJ&hl=en"
              icon="scholar"
              darkMode={darkMode}
            />
            <SocialLink
              href="https://www.researchgate.net/profile/Mahadi-Shaisob"
              icon="researchgate"
              darkMode={darkMode}
            />
            <SocialLink
              href="https://orcid.org/0009-0001-1757-5180"
              icon="orcid"
              darkMode={darkMode}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

const NavItem = ({ to, icon, label, darkMode, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li className="w-full">
      <Link
        to={to}
        onClick={onClick}
        className={`
          flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 w-full
          ${
            isActive
              ? darkMode
                ? "bg-cyan-600 text-white shadow-lg"
                : "bg-cyan-600 text-white shadow-lg"
              : darkMode
                ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                : "text-white/90 hover:bg-cyan-600 hover:text-white"
          }
        `}
      >
        <span
          className={`${isActive ? "text-white" : "text-cyan-400"} flex-shrink-0`}
        >
          {icon}
        </span>
        <span className="font-medium flex-1">{label}</span>
        {isActive && (
          <span className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0"></span>
        )}
      </Link>
    </li>
  );
};

const SocialLink = ({ href, icon, darkMode }) => {
  const getIcon = () => {
    switch (icon) {
      case "github":
        return <Github className="w-5 h-5" />;
      case "linkedin":
        return <Linkedin className="w-5 h-5" />;
      case "scholar":
        return <GraduationCap className="w-5 h-5" />;
      case "researchgate":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M0 0v24h24V0H0zm20.1 20.1H3.9V3.9h16.2v16.2zM8.2 6.7c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5zm0 8.8c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5zM15.8 6.7c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5z" />
          </svg>
        );
      case "orcid":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.422.947.947s-.422.947-.947.947a.944.944 0 0 1-.947-.947.944.944 0 0 1 .947-.947zm-.69 3.348h1.38v9.916h-1.38V7.726zm3.961 0h1.318v1.528h.036c.202-.369.466-.68.808-.94.342-.26.738-.39 1.188-.39.424 0 .802.087 1.133.26.331.174.609.424.834.75.225.326.396.713.513 1.16.117.448.176.925.176 1.433v5.115h-1.38v-4.736c0-.646-.104-1.14-.311-1.484-.207-.343-.528-.515-.963-.515-.381 0-.7.119-.958.356-.258.237-.432.57-.522 1.002-.045.216-.067.468-.067.756v4.62h-1.38V7.726z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        flex items-center justify-center w-10 h-10 rounded-full 
        transition-all duration-300 hover:scale-110
        ${
          darkMode
            ? "bg-gray-800 text-cyan-400 hover:bg-gray-700 hover:text-cyan-300"
            : "bg-white/20 text-white hover:bg-white/30"
        }
      `}
    >
      {getIcon()}
    </a>
  );
};

export default Navbar;
