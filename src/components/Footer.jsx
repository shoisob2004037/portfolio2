"use client";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-color)] py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-base font-bold text-[var(--text-primary)] mb-3">
              Quick Links
            </h3>
            <div className="w-12 h-0.5 bg-[var(--accent)] mb-5"></div>
            <ul className="flex flex-col gap-2 text-sm text-[var(--text-secondary)]">
              <li><Link to="/" className="hover:text-[var(--accent)]">Home</Link></li>
              <li><Link to="/news" className="hover:text-[var(--accent)]">News</Link></li>
              <li><Link to="/skills" className="hover:text-[var(--accent)]">Skills</Link></li>
              <li><Link to="/projects" className="hover:text-[var(--accent)]">Projects</Link></li>
              <li><Link to="/publications" className="hover:text-[var(--accent)]">Publications</Link></li>
              <li><Link to="/certifications" className="hover:text-[var(--accent)]">Certifications</Link></li>
              {/* <li><Link to="/hobby" className="hover:text-[var(--accent)]">Hobby</Link></li> */}
              <li><Link to="/about-me" className="hover:text-[var(--accent)]">About Me</Link></li>
              <li><Link to="/blogs" className="hover:text-[var(--accent)]">Blogs</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-serif text-base font-bold text-[var(--text-primary)] mb-3">
              Connect With Me
            </h3>
            <div className="w-12 h-0.5 bg-[var(--accent)] mb-5"></div>
            <div className="flex flex-wrap gap-3 text-xl">
              <a href="https://scholar.google.com/citations?user=HoeeAaIAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors" aria-label="Google Scholar" title="Google Scholar"><i className="fas fa-book"></i></a>
              <a href="https://orcid.org/my-orcid?orcid=0009-0001-1757-5180" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors" aria-label="ORCID" title="ORCID"><i className="fas fa-id-card"></i></a>
              <a href="https://www.researchgate.net/profile/Mahadi-Shaisob?ev=hdr_xprf" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors" aria-label="ResearchGate" title="ResearchGate"><i className="fab fa-researchgate"></i></a>
              <a href="https://github.com/shoisob2004037" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors" aria-label="GitHub" title="GitHub"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/mahadi-hasan-shaisob-bb72892b9/" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors" aria-label="LinkedIn" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-base font-bold text-[var(--text-primary)] mb-3">
              Get In Touch
            </h3>
            <div className="w-12 h-0.5 bg-[var(--accent)] mb-5"></div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Feel free to reach out for collaborations, research discussions,
              or any web development projects.
            </p>
            <div className="mt-6 text-[var(--text-muted)] text-xs">
              &copy; {new Date().getFullYear()} Mahadi Hasan Shaisob.<br />
              All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;