// Navbar.jsx - Academic version, polished & stylish

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

  const navItems = [
    { to: "/", icon: <Home className="w-4 h-4" />, label: "Home" },
    { to: "/news", icon: <Newspaper className="w-4 h-4" />, label: "News" },
    { to: "/skills", icon: <Brain className="w-4 h-4" />, label: "Skills" },
    { to: "/projects", icon: <ListChecks className="w-4 h-4" />, label: "Projects" },
    { to: "/publications", icon: <FileText className="w-4 h-4" />, label: "Publications" },
    { to: "/certifications", icon: <Award className="w-4 h-4" />, label: "Certifications" },
    { to: "/blogs", icon: <Camera className="w-4 h-4" />, label: "Blogs" },
  ];

  return (
    <>
      {/* Top accent line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[var(--accent)] via-[var(--teal)] to-[var(--accent)]"></div>

      <header className="sticky top-0 z-50 bg-[var(--bg-primary)]/90 backdrop-blur-xl border-b border-[var(--border-color)] shadow-[0_1px_0_0_rgba(0,0,0,0.03)] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">

          {/* ============ LOGO ============ */}
          <Link to="/" className="flex items-center gap-3 z-50 group">
            {/* Monogram badge — MHS */}
            <span
              className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#e8f4ff] to-[#c9e8ff] shadow-md ring-1 ring-black/5 transition-all duration-500 group-hover:rotate-6 group-hover:scale-105 group-hover:shadow-xl"
              style={{
                fontFamily: "var(--font-logo)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: "#0a0a0a",
                textShadow: "0 1px 0 rgba(255,255,255,0.6)",
              }}
            >
              <span className="text-base sm:text-lg">MHS</span>
              <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent)]"></span>
            </span>

            {/* Wordmark */}
            <span className="flex flex-col leading-none">
              <span
                className="text-sm sm:text-base tracking-[0.35em] text-[var(--text-muted)] transition-colors duration-300 group-hover:text-[var(--teal)]"
                style={{ fontFamily: "var(--font-logo)", fontWeight: 700 }}
              >
                M.H.
              </span>
              <span
                className="text-2xl sm:text-3xl text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--accent)] mt-0.5"
                style={{ fontFamily: "var(--font-logo)", fontWeight: 800, letterSpacing: "0.005em" }}
              >
                Shaisob
              </span>
            </span>
          </Link>

          {/* ============ DESKTOP NAV ============ */}
          <nav className="hidden lg:flex items-center gap-1 px-2 py-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-color)]">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    isActive
                      ? "text-white bg-[var(--accent)] shadow-sm"
                      : "text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--bg-elevated)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* ============ RIGHT BUTTONS ============ */}
          <div className="flex items-center gap-2 z-50">
            <button
              onClick={toggleDarkMode}
              className="relative p-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-elevated)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300 group"
              aria-label="Toggle dark mode"
            >
              <span className="block transition-transform duration-500 group-hover:rotate-[20deg]">
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-elevated)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
              aria-label="Toggle menu"
            >
              <span className="block transition-transform duration-300">
                {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ============ OVERLAY ============ */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ============ MOBILE SIDEBAR ============ */}
      <nav
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-[var(--bg-primary)] border-l border-[var(--border-color)] shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] z-50 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar top bar */}
        <div className="flex-shrink-0 p-4 flex items-center justify-between border-b border-[var(--border-color)]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
            <span className="text-xs font-medium uppercase tracking-widest text-[var(--text-muted)]">
              Menu
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
            aria-label="Close menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Profile Card */}
        <div className="flex-shrink-0 p-6 text-center border-b border-[var(--border-color)] relative overflow-hidden">
          {/* Decorative gradient blob */}
          <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br from-[var(--accent)]/10 to-[var(--teal)]/10 blur-2xl"></div>

          <div className="relative inline-block">
            <img
              src="/dp.jpg"
              alt="Mahadi Hasan Shaisob"
              className="w-20 h-20 rounded-full mx-auto border-2 border-[var(--accent)] object-cover shadow-lg"
            />
            <span className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-[var(--success)] border-[3px] border-[var(--bg-primary)]"></span>
          </div>
          <h3 className="mt-4 font-serif font-bold text-base text-[var(--text-primary)]">
            Mahadi Hasan Shaisob
          </h3>
          <p className="text-[var(--text-muted)] text-xs mt-1 tracking-wide">
            MERN · Researcher
          </p>
        </div>

        {/* Nav Items */}
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

        {/* Social Links Footer */}
        <div className="flex-shrink-0 pb-6 pt-4 px-6 mt-auto border-t border-[var(--border-color)]">
          <p className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] text-center mb-3">
            Connect
          </p>
          <div className="flex justify-center gap-2.5">
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

// ============ NAV ITEM (mobile) ============
const NavItem = ({ to, icon, label, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li className="w-full">
      <Link
        to={to}
        onClick={onClick}
        className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 w-full text-sm overflow-hidden ${
          isActive
            ? "bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hover)] text-white shadow-md"
            : "text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--accent)]"
        }`}
      >
        {/* Active left bar */}
        {isActive && (
          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-full bg-[var(--teal)]"></span>
        )}

        <span
          className={`flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${
            isActive ? "text-white" : "text-[var(--accent)]"
          }`}
        >
          {icon}
        </span>
        <span className="font-medium flex-1">{label}</span>

        {/* Arrow indicator */}
        <span
          className={`text-xs transition-all duration-300 ${
            isActive ? "opacity-100 text-white" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-[var(--accent)]"
          }`}
        >
          →
        </span>
      </Link>
    </li>
  );
};

// ============ SOCIAL LINK ============
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
      className="flex items-center justify-center w-9 h-9 rounded-xl border border-[var(--border-color)] bg-[var(--bg-elevated)] text-[var(--accent)] hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
    >
      {getIcon()}
    </a>
  );
};

export default Navbar;