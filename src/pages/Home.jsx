"use client";

import { GraduationCap } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search, Download, Github, Linkedin, ArrowUp, Send, BookOpen,
  UserCheck, Users, Newspaper, Calendar, ChevronRight, Star, Quote
} from "lucide-react";
import AboutMe from "./AboutMe";
import { initialNewsData } from "./News";
import { db } from "../firebase/firebase";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";

const Home = () => {
  const { darkMode } = useTheme();
  const [typedText, setTypedText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchError, setSearchError] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const [homeReviews, setHomeReviews] = useState([]);
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const formRef = useRef(null);
  const navigate = useNavigate();
  const searchInputRef = useRef(null);

  const latestNews = [...initialNewsData]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  const phrases = [
    "MERN Stack Web Developer",
    "Researcher",
    "Graduate Engineer",
    "ML & AI Enthusiast",
  ];

  const searchMapping = {
    home: "/", expertise: "/skills", experties: "/skills", skills: "/expertise",
    projects: "/projects", portfolio: "/projects", hobby: "/hobby", hobbies: "/hobby",
    photography: "/hobby", reading: "/hobby", books: "/hobby", travel: "/hobby",
    about: "/about-me", "about me": "/about-me", education: "/about-me",
    contact: "/#contact", reviews: "/reviews", feedback: "/reviews",
    news: "/news", updates: "/news", activities: "/news",
    robot: "/projects#p1", "multi purpose robot": "/projects#p1", arduino: "/projects#p1",
    gallery: "/projects#p2", "photo gallery": "/projects#p2", slider: "/projects#p2",
    weather: "/projects#p3", "weather scout": "/projects#p3",
    recipe: "/projects#p4", "cooking recipe": "/projects#p4",
    food: "/projects#p5", "food ordering": "/projects#p5",
    game: "/projects#p6", "rock paper scissors": "/projects#p6",
    html: "/expertise", css: "/expertise", javascript: "/expertise", react: "/expertise",
    bootstrap: "/expertise", tailwind: "/expertise", firebase: "/expertise",
    mern: "/expertise", "mern stack": "/expertise", node: "/expertise",
    express: "/expertise", mongodb: "/expertise",
    ml: "/about-me", "machine learning": "/about-me", ai: "/about-me",
    "artificial intelligence": "/about-me", research: "/about-me",
    cybersecurity: "/about-me", "cyber security": "/about-me",
    "autonomous vehicle": "/about-me", "autonomous vehicles": "/about-me",
    "image processing": "/about-me", "cyber physical": "/about-me",
    "cyber-physical": "/about-me",
  };

  const allSearchKeys = Object.keys(searchMapping);

  const getMatchScore = (query, key) => {
    const q = query.toLowerCase().trim();
    const k = key.toLowerCase();
    if (k === q) return 100;
    if (k.includes(q) || q.includes(k)) return 80;
    if (k.split(" ").some((word) => q.includes(word) || word.includes(q))) return 60;
    let matches = 0;
    for (let char of q) if (k.includes(char)) matches++;
    const score = (matches / Math.max(q.length, 1)) * 50;
    return score > 25 ? score : 0;
  };

  const generateSuggestions = (query) => {
    if (!query || query.trim().length === 0) {
      setSuggestions([]);
      return;
    }
    const q = query.toLowerCase().trim();
    const scored = allSearchKeys
      .map((key) => ({ key, path: searchMapping[key], score: getMatchScore(q, key) }))
      .filter((item) => item.score > 25)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6);
    setSuggestions(scored);
  };

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const type = () => {
      if (isDeleting) {
        setTypedText(currentPhrase.substring(0, typedText.length - 1));
        setTypingSpeed(50);
      } else {
        setTypedText(currentPhrase.substring(0, typedText.length + 1));
        setTypingSpeed(100);
      }
      if (!isDeleting && typedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
      }
    };
    const timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentPhraseIndex, typingSpeed, phrases]);

  useEffect(() => {
    generateSuggestions(searchQuery);
    setShowSuggestions(searchQuery.trim().length > 0 && suggestions.length > 0);
  }, [searchQuery]);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchInputRef.current && !searchInputRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fetch top 3 reviews for home section
  useEffect(() => {
    const fetchHomeReviews = async () => {
      try {
        const q = query(collection(db, "reviews"), orderBy("createdAt", "desc"), limit(3));
        const snap = await getDocs(q);
        const data = [];
        snap.forEach((doc) => data.push({ id: doc.id, ...doc.data() }));
        setHomeReviews(data);
      } catch (err) {
        console.error("Error fetching home reviews:", err);
        setHomeReviews([]);
      } finally {
        setReviewsLoading(false);
      }
    };
    fetchHomeReviews();
  }, []);

  const handleSearch = (e) => {
    e?.preventDefault();
    if (!searchQuery.trim()) { setSearchError("Please enter a search term"); return; }
    const query = searchQuery.toLowerCase().trim();
    if (searchMapping[query]) {
      setSearchError(""); setShowSuggestions(false);
      navigateToSection(searchMapping[query]); return;
    }
    let bestMatch = null, highestScore = 0;
    Object.keys(searchMapping).forEach((key) => {
      const score = getMatchScore(query, key);
      if (score > highestScore) { highestScore = score; bestMatch = searchMapping[key]; }
    });
    if (bestMatch && highestScore > 35) {
      setSearchError(""); setShowSuggestions(false);
      navigateToSection(bestMatch);
    } else {
      setSearchError("No matching content found. Try keywords like: ML, AI, robot, projects, cyber security");
      setTimeout(() => setSearchError(""), 5000);
    }
  };

  const navigateToSection = (path) => {
    setSearchQuery(""); setSuggestions([]); setShowSuggestions(false);
    if (path.includes("#")) {
      const [pagePath, sectionId] = path.split("#");
      if (window.location.pathname === pagePath || (pagePath === "/" && window.location.pathname === "")) {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
        return;
      }
      navigate(pagePath);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 300);
      return;
    }
    navigate(path);
  };

  const handleSuggestionClick = (path) => navigateToSection(path);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    try {
      await new Promise((r) => setTimeout(r, 1000));
      setFormStatus("success");
      formRef.current.reset();
      setTimeout(() => setFormStatus(null), 3000);
    } catch {
      setFormStatus("error");
      setTimeout(() => setFormStatus(null), 3000);
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const navigateToNews = () => navigate("/news");

  return (
    <>
      {/* Banner Section */}
      <section
        id="banner"
        className="min-h-[85vh] flex items-center bg-[var(--bg-secondary)] border-b border-[var(--border-color)]"
      >
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-center mb-10"
          >
            <div className="flex flex-col w-full md:w-auto mb-6 md:mb-0 relative" ref={searchInputRef}>
              <div className="flex relative">
                <input
                  type="text"
                  ref={searchInputRef}
                  placeholder="Search (ML, AI, robot, cyber security, projects...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSearch(e);
                    if (e.key === "Escape") setShowSuggestions(false);
                  }}
                  className="academic-input pr-12 w-full md:w-96"
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] pointer-events-none">
                  <Search className="w-4 h-4" />
                </div>
                <button
                  onClick={handleSearch}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-[var(--accent)] text-white p-2 rounded-md hover:bg-[var(--accent-hover)] transition-colors"
                  aria-label="Search"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>

              {showSuggestions && suggestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 w-full md:w-96 mt-2 bg-[var(--bg-elevated)] rounded-md shadow-lg border border-[var(--border-color)] z-50 overflow-hidden max-h-80 overflow-y-auto"
                >
                  {suggestions.map((s, i) => (
                    <div
                      key={i}
                      onClick={() => handleSuggestionClick(s.path)}
                      className="px-4 py-3 hover:bg-[var(--bg-secondary)] cursor-pointer border-b border-[var(--border-color)] last:border-none flex items-center gap-3 text-sm"
                    >
                      <Search className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                      <span className="text-[var(--text-primary)] capitalize">{s.key}</span>
                    </div>
                  ))}
                </motion.div>
              )}

              {searchError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[var(--accent)] text-xs mt-2 bg-[var(--accent-light)] px-3 py-2 rounded-md"
                >
                  {searchError}
                </motion.div>
              )}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-2 md:order-1 text-center md:text-left"
            >
              <div className="section-label mb-4">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Academic Portfolio</span>
              </div>

              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-3">
                Mahadi Hasan Shaisob
              </h1>

              <h2 className="text-base md:text-lg mb-6 text-[var(--text-secondary)] flex items-center justify-center md:justify-start gap-2 flex-wrap">
                <span className="text-[var(--text-muted)]">I am a</span>
                <span className="text-[var(--accent)] italic font-semibold min-w-[220px] text-left">
                  {typedText}
                  <span className="animate-blink">|</span>
                </span>
              </h2>

              <p className="mb-8 text-[var(--text-secondary)] leading-relaxed">
                I am an ETE graduate with a deep passion for Machine Learning, Artificial Intelligence, and research in
                areas such as Cyber Security, Autonomous Vehicles, Image Processing, and Cyber-Physical Systems.
                As a MERN Stack Web Developer, I enjoy building scalable and user-friendly web solutions.
                I have developed multiple projects that solve real-world problems and dream of pursuing higher studies abroad
                to become a researcher in my field. In the future, I aspire to create intelligent web platforms that seamlessly
                integrate AI features to deliver easy-to-use solutions for users.
              </p>

              <a
                href="/CV_Of_MahadiHasanShaisob.pdf"
                download
                className="btn-academic"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="order-1 md:order-2 flex flex-col items-center"
            >
              <div className="relative">
                <img
                  src="/dp.jpg"
                  alt="Mahadi Hasan Shaisob"
                  className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-[var(--bg-elevated)] shadow-lg bg-[var(--bg-tertiary)]"
                />
              </div>

              <div className="flex gap-3 mt-8 flex-wrap justify-center">
                <SocialLink href="https://scholar.google.com/citations?user=HoeeAaIAAAAJ&hl=en" icon={<BookOpen className="w-4 h-4" />} title="Google Scholar" />
                <SocialLink href="https://orcid.org/my-orcid?orcid=0009-0001-1757-5180" icon={<UserCheck className="w-4 h-4" />} title="ORCID" />
                <SocialLink href="https://www.researchgate.net/profile/Mahadi-Shaisob?ev=hdr_xprf" icon={<Users className="w-4 h-4" />} title="ResearchGate" />
                <SocialLink href="https://github.com/shoisob2004037" icon={<Github className="w-4 h-4" />} title="GitHub" />
                <SocialLink href="https://www.linkedin.com/in/mahadi-hasan-shaisob-bb72892b9/" icon={<Linkedin className="w-4 h-4" />} title="LinkedIn" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-[var(--bg-primary)]">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <div className="section-label mb-3">
                  <Newspaper className="w-3.5 h-3.5" />
                  <span>Latest Updates</span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
                  Recent <span className="text-[var(--accent)]">News & Activities</span>
                </h2>
              </div>
              <button
                onClick={navigateToNews}
                className="btn-academic-outline self-start sm:self-auto"
              >
                <span>See All Updates</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {latestNews.map((news, index) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="academic-card"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--accent-light)] text-[var(--accent)] border border-[var(--border-color)]">
                      {news.type}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{news.formattedDate}</span>
                    </div>
                  </div>
                  <h3 className="font-serif text-base font-bold mb-2 line-clamp-2 text-[var(--text-primary)]">
                    {news.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4 line-clamp-3 text-[var(--text-secondary)]">
                    {news.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--border-color)]">
                    {news.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="text-[10px] font-medium px-2 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--text-muted)]">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <AboutMe darkMode={darkMode} />

      {/* Reviews Section (inside Home) */}
            {/* Reviews Section (inside Home) */}
      <section className="py-16 bg-[var(--bg-secondary)] border-y border-[var(--border-color)]">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <div className="section-label mb-3">
              <Star className="w-3.5 h-3.5" />
              <span>Testimonials</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
              Reviews & <span className="text-[var(--accent)]">Feedback</span>
            </h2>
            <div className="academic-divider"></div>
            <p className="mt-4 text-[var(--text-secondary)] text-sm md:text-base max-w-2xl mx-auto">
              What colleagues, mentors, and collaborators say about working with me.
            </p>
          </motion.div>

          {reviewsLoading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-10 w-10 border-2 border-[var(--border-color)] border-t-[var(--accent)]"></div>
            </div>
          ) : homeReviews.length === 0 ? (
            <div className="text-center py-12 academic-card max-w-2xl mx-auto">
              <Quote className="w-8 h-8 mx-auto mb-3 text-[var(--text-muted)]" />
              <p className="text-[var(--text-secondary)] text-sm">
                No reviews yet. Be the first to leave one!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {homeReviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="academic-card flex flex-col"
                >
                  <Quote className="w-6 h-6 text-[var(--accent)] mb-3" />
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < review.rating ? "text-[var(--accent)] fill-[var(--accent)]" : "text-[var(--border-strong)]"}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1 mb-4">
                    "{review.reviewText}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-color)]">
                    {review.userPhoto ? (
                      <img src={review.userPhoto} alt={review.userName} className="w-10 h-10 rounded-full object-cover border border-[var(--border-color)]" />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center text-[var(--accent)] text-xs font-bold">
                        {review.userName?.charAt(0) || "U"}
                      </div>
                    )}
                    <div>
                      <p className="font-serif font-semibold text-sm text-[var(--text-primary)]">
                        {review.userName}
                      </p>
                      <p className="text-xs text-[var(--text-muted)]">
                        {review.userEmail || "Verified user"}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* ✅ ALWAYS-VISIBLE CTA */}
          <div className="mt-10 text-center">
            <button
              onClick={() => navigate("/reviews")}
              className="btn-academic"
            >
              <Star className="w-4 h-4" />
              Leave a Review / Login
            </button>
            <p className="mt-3 text-xs text-[var(--text-muted)]">
              Sign in with Google to share your feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Back to Top */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: showBackToTop ? 1 : 0, scale: showBackToTop ? 1 : 0.5, y: showBackToTop ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-[var(--accent)] text-white shadow-lg z-50 hover:bg-[var(--accent-hover)] transition-colors"
        aria-label="Back to top"
        style={{ pointerEvents: showBackToTop ? "auto" : "none" }}
      >
        <ArrowUp className="w-4 h-4" />
      </motion.button>
    </>
  );
};

const SocialLink = ({ href, icon, title }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    title={title}
    className="flex items-center justify-center w-10 h-10 rounded-md bg-[var(--bg-elevated)] text-[var(--accent)] border border-[var(--border-color)] hover:border-[var(--accent)] transition-all duration-200"
  >
    {icon}
  </a>
);

export default Home;