// Navbar.jsx - Academic version, Reviews link removed from nav

"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import {
  Menu, X, Sun, Moon, Home, Brain, ListChecks, FileText, Award,
  BookOpen, Camera, Github, Linkedin, GraduationCap, Newspaper,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const location = useLocation();

  useEffect(() => { setIsOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  // NOTE: Reviews link removed
  const navItems = [
    { to: "/", icon: <Home className="w-4 h-4" />, label: "Home" },
    { to: "/news", icon: <Newspaper className="w-4 h-4" />, label: "News" },
    { to: "/skills", icon: <Brain className="w-4 h-4" />, label: "Skills" },
    { to: "/projects", icon: <ListChecks className="w-4 h-4" />, label: "Projects" },
    { to: "/publications", icon: <FileText className="w-4 h-4" />, label: "Publications" },
    { to: "/certifications", icon: <Award className="w-4 h-4" />, label: "Certifications" },
   // { to: "/hobby", icon: <BookOpen className="w-4 h-4" />, label: "Hobbies" },
    { to: "/blogs", icon: <Camera className="w-4 h-4" />, label: "Blogs" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-[var(--bg-primary)]/95 backdrop-blur-md border-b border-[var(--border-color)] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 z-50">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                    isActive
                      ? "text-[var(--accent)] bg-[var(--accent-light)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--bg-secondary)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right buttons */}
          <div className="flex items-center gap-2 z-50">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md border border-[var(--border-color)] bg-[var(--bg-elevated)] text-[var(--text-primary)] hover:border-[var(--accent)] transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md border border-[var(--border-color)] bg-[var(--bg-elevated)] text-[var(--text-primary)] hover:border-[var(--accent)] transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <nav
        className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-[var(--bg-primary)] border-l border-[var(--border-color)] shadow-2xl transform transition-transform duration-300 ease-in-out z-50 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex-shrink-0 p-4 flex justify-end border-b border-[var(--border-color)]">
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--accent)]"
            aria-label="Close menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-shrink-0 p-6 text-center border-b border-[var(--border-color)]">
          <img
            src="/dp.jpg"
            alt="Mahadi Hasan Shaisob"
            className="w-20 h-20 rounded-full mx-auto border-2 border-[var(--accent)] object-cover"
          />
          <h3 className="mt-3 font-serif font-semibold text-base text-[var(--text-primary)]">
            Mahadi Hasan Shaisob
          </h3>
          <p className="text-[var(--text-muted)] text-xs mt-1">
            MERN | Researcher
          </p>
        </div>

        <div className="flex-1 overflow-y-auto">
          <ul className="flex flex-col gap-1 p-4">
            {navItems.map((item) => (
              <NavItem
                key={item.to}
                to={item.to}
                icon={item.icon}
                label={item.label}
                onClick={() => setIsOpen(false)}
              />
            ))}
          </ul>
        </div>

        <div className="flex-shrink-0 pb-6 pt-4 px-6 mt-auto border-t border-[var(--border-color)]">
          <div className="flex justify-center gap-3 pt-2">
            <SocialLink href="https://github.com/shoisob2004037" icon="github" />
            <SocialLink href="https://www.linkedin.com/in/mahadi-hasan-shaisob-bb72892b9/" icon="linkedin" />
            <SocialLink href="https://scholar.google.com/citations?user=HoeeAaIAAAAJ&hl=en" icon="scholar" />
            <SocialLink href="https://www.researchgate.net/profile/Mahadi-Shaisob" icon="researchgate" />
            <SocialLink href="https://orcid.org/0009-0001-1757-5180" icon="orcid" />
          </div>
        </div>
      </nav>
    </>
  );
};

const NavItem = ({ to, icon, label, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li className="w-full">
      <Link
        to={to}
        onClick={onClick}
        className={`flex items-center gap-3 px-4 py-2.5 rounded-md transition-all duration-200 w-full text-sm ${
          isActive
            ? "bg-[var(--accent)] text-white"
            : "text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--accent)]"
        }`}
      >
        <span className={isActive ? "text-white" : "text-[var(--accent)]"}>{icon}</span>
        <span className="font-medium flex-1">{label}</span>
      </Link>
    </li>
  );
};

const SocialLink = ({ href, icon }) => {
  const getIcon = () => {
    switch (icon) {
      case "github": return <Github className="w-4 h-4" />;
      case "linkedin": return <Linkedin className="w-4 h-4" />;
      case "scholar": return <GraduationCap className="w-4 h-4" />;
      case "researchgate":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M0 0v24h24V0H0zm20.1 20.1H3.9V3.9h16.2v16.2zM8.2 6.7c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5zm0 8.8c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5zM15.8 6.7c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5z" />
          </svg>
        );
      case "orcid":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.422.947.947s-.422.947-.947.947a.944.944 0 0 1-.947-.947.944.944 0 0 1 .947-.947zm-.69 3.348h1.38v9.916h-1.38V7.726zm3.961 0h1.318v1.528h.036c.202-.369.466-.68.808-.94.342-.26.738-.39 1.188-.39.424 0 .802.087 1.133.26.331.174.609.424.834.75.225.326.396.713.513 1.16.117.448.176.925.176 1.433v5.115h-1.38v-4.736c0-.646-.104-1.14-.311-1.484-.207-.343-.528-.515-.963-.515-.381 0-.7.119-.958.356-.258.237-.432.57-.522 1.002-.045.216-.067.468-.067.756v4.62h-1.38V7.726z" />
          </svg>
        );
      default: return null;
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-9 h-9 rounded-md border border-[var(--border-color)] bg-[var(--bg-elevated)] text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-200"
    >
      {getIcon()}
    </a>
  );
};

export default Navbar;