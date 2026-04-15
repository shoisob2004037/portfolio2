"use client"

import { useState, useEffect, useRef } from "react"
import { useTheme } from "../context/ThemeContext"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { Search, Download, Github, Linkedin, ArrowUp, Send, BookOpen, UserCheck, Users } from "lucide-react"

const Home = () => {
  const { darkMode } = useTheme()
  const [typedText, setTypedText] = useState("")
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchError, setSearchError] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [formStatus, setFormStatus] = useState(null)
  const formRef = useRef(null)
  const navigate = useNavigate()
  const searchInputRef = useRef(null)

  const phrases = [
    "MERN Stack Web Developer",
    "Researcher",
    "Graduate Engineer",
    "ML & AI Enthusiast"
  ]

  // Enhanced Search Mapping
  const searchMapping = {
    // Pages
    home: "/",
    expertise: "/skills",
    experties: "/skills",
    skills: "/expertise",
    projects: "/projects",
    portfolio: "/projects",
    hobby: "/hobby",
    hobbies: "/hobby",
    photography: "/hobby",
    reading: "/hobby",
    books: "/hobby",
    travel: "/hobby",
    about: "/about-me",
    "about me": "/about-me",
    education: "/about-me",
    contact: "/#contact",
    reviews: "/reviews",
    feedback: "/reviews",

    // Projects
    robot: "/projects#p1",
    "multi purpose robot": "/projects#p1",
    arduino: "/projects#p1",
    gallery: "/projects#p2",
    "photo gallery": "/projects#p2",
    slider: "/projects#p2",
    weather: "/projects#p3",
    "weather scout": "/projects#p3",
    recipe: "/projects#p4",
    "cooking recipe": "/projects#p4",
    food: "/projects#p5",
    "food ordering": "/projects#p5",
    game: "/projects#p6",
    "rock paper scissors": "/projects#p6",

    // Skills & Technologies
    html: "/expertise",
    css: "/expertise",
    javascript: "/expertise",
    react: "/expertise",
    bootstrap: "/expertise",
    tailwind: "/expertise",
    firebase: "/expertise",
    mern: "/expertise",
    "mern stack": "/expertise",
    node: "/expertise",
    express: "/expertise",
    mongodb: "/expertise",

    // Research & Interests
    ml: "/about-me",
    "machine learning": "/about-me",
    ai: "/about-me",
    "artificial intelligence": "/about-me",
    research: "/about-me",
    cybersecurity: "/about-me",
    "cyber security": "/about-me",
    "autonomous vehicle": "/about-me",
    "autonomous vehicles": "/about-me",
    "image processing": "/about-me",
    "cyber physical": "/about-me",
    "cyber-physical": "/about-me",
  }

  const allSearchKeys = Object.keys(searchMapping)

  // Match scoring function
  const getMatchScore = (query, key) => {
    const q = query.toLowerCase().trim()
    const k = key.toLowerCase()

    if (k === q) return 100
    if (k.includes(q) || q.includes(k)) return 80
    if (k.split(" ").some(word => q.includes(word) || word.includes(q))) return 60

    let matches = 0
    for (let char of q) {
      if (k.includes(char)) matches++
    }
    const score = (matches / Math.max(q.length, 1)) * 50
    return score > 25 ? score : 0
  }

  // Generate suggestions
  const generateSuggestions = (query) => {
    if (!query || query.trim().length === 0) {
      setSuggestions([])
      return
    }

    const q = query.toLowerCase().trim()

    const scored = allSearchKeys
      .map(key => ({
        key,
        path: searchMapping[key],
        score: getMatchScore(q, key)
      }))
      .filter(item => item.score > 25)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)

    setSuggestions(scored)
  }

  // Typing Effect
  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex]

    const type = () => {
      if (isDeleting) {
        setTypedText(currentPhrase.substring(0, typedText.length - 1))
        setTypingSpeed(50)
      } else {
        setTypedText(currentPhrase.substring(0, typedText.length + 1))
        setTypingSpeed(100)
      }

      if (!isDeleting && typedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1500)
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false)
        setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length)
      }
    }

    const timer = setTimeout(type, typingSpeed)
    return () => clearTimeout(timer)
  }, [typedText, isDeleting, currentPhraseIndex, typingSpeed, phrases])

  // Real-time suggestions
  useEffect(() => {
    generateSuggestions(searchQuery)
    setShowSuggestions(searchQuery.trim().length > 0 && suggestions.length > 0)
  }, [searchQuery])

  // Scroll for back to top
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchInputRef.current && !searchInputRef.current.contains(e.target)) {
        setShowSuggestions(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSearch = (e) => {
    e?.preventDefault()

    if (!searchQuery.trim()) {
      setSearchError("Please enter a search term")
      return
    }

    const query = searchQuery.toLowerCase().trim()

    // Exact match
    if (searchMapping[query]) {
      setSearchError("")
      setShowSuggestions(false)
      navigateToSection(searchMapping[query])
      return
    }

    // Best fuzzy match
    let bestMatch = null
    let highestScore = 0

    Object.keys(searchMapping).forEach(key => {
      const score = getMatchScore(query, key)
      if (score > highestScore) {
        highestScore = score
        bestMatch = searchMapping[key]
      }
    })

    if (bestMatch && highestScore > 35) {
      setSearchError("")
      setShowSuggestions(false)
      navigateToSection(bestMatch)
    } else {
      setSearchError("No matching content found. Try keywords like: ML, AI, robot, projects, cyber security")
      setTimeout(() => setSearchError(""), 5000)
    }
  }

  const navigateToSection = (path) => {
    setSearchQuery("")
    setSuggestions([])
    setShowSuggestions(false)

    if (path.includes("#")) {
      const [pagePath, sectionId] = path.split("#")
      if (window.location.pathname === pagePath || (pagePath === "/" && window.location.pathname === "")) {
        const element = document.getElementById(sectionId)
        if (element) element.scrollIntoView({ behavior: "smooth" })
        return
      }

      navigate(pagePath)
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) element.scrollIntoView({ behavior: "smooth" })
      }, 300)
      return
    }

    navigate(path)
  }

  const handleSuggestionClick = (path) => {
    navigateToSection(path)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setFormStatus("submitting")

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setFormStatus("success")
      formRef.current.reset()
      setTimeout(() => setFormStatus(null), 3000)
    } catch (error) {
      setFormStatus("error")
      setTimeout(() => setFormStatus(null), 3000)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {/* Banner Section */}
      <section
        id="banner"
        className={`min-h-screen flex items-center ${
          darkMode ? "bg-gradient-to-b from-gray-900 to-gray-800" : "bg-gradient-to-b from-cyan-700 to-blue-600"
        }`}
      >
        <div className="container mx-auto px-4 py-12">
          {/* Search Bar with Suggestions */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-center mb-12"
          >
            <div className="flex flex-col w-full md:w-auto mb-6 md:mb-0 relative" ref={searchInputRef}>
              <div className="flex relative">
                <input
                  type="text"
                  ref={searchInputRef}
                  placeholder="Search here... (ML, AI, robot, cyber security, projects...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSearch(e)
                    if (e.key === "Escape") setShowSuggestions(false)
                  }}
                  className="p-3 pl-12 rounded-full w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-800 shadow-lg"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  <Search className="w-5 h-5" />
                </div>
                <button
                  onClick={handleSearch}
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-cyan-600 text-white p-2 rounded-full hover:bg-cyan-700 transition-colors duration-300"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>

              {/* Suggestions Dropdown */}
              {showSuggestions && suggestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 w-full md:w-96 mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-cyan-200 dark:border-gray-700 z-50 overflow-hidden max-h-80 overflow-y-auto"
                >
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion.path)}
                      className="px-4 py-3 hover:bg-cyan-50 dark:hover:bg-gray-700 cursor-pointer border-b border-gray-100 dark:border-gray-700 last:border-none flex items-center gap-3 text-sm"
                    >
                      <Search className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                      <span className="text-gray-800 dark:text-white capitalize">{suggestion.key}</span>
                    </div>
                  ))}
                </motion.div>
              )}

              {searchError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm mt-2 bg-white/90 px-3 py-1 rounded-full shadow-md"
                >
                  {searchError}
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-2 md:order-1 text-center md:text-left"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                <span className="inline-block relative">
                  Mahadi Hasan Shaisob
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-cyan-400 rounded-full"></span>
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl mb-6 text-white flex items-center justify-center md:justify-start gap-2">
                <span className="text-white/80">I am a</span>
                <span className="text-amber-400 italic font-semibold min-w-[280px]">{typedText}</span>
                <span className="animate-blink">|</span>
              </h2>

              <p className="mb-8 text-white/90 text-lg leading-relaxed">
                I am an ETE graduate with a deep passion for Machine Learning, Artificial Intelligence, and research in 
                areas such as Cyber Security, Autonomous Vehicles, Image Processing, and Cyber-Physical Systems. 
                As a MERN Stack Web Developer, I enjoy building scalable and user-friendly web solutions. 
                I have developed multiple projects that solve real-world problems and dream of pursuing higher studies abroad 
                to become a researcher in my field. In the future, I aspire to create intelligent web platforms that seamlessly 
                integrate AI features to deliver easy-to-use solutions for users.
              </p>

              <motion.a
                href="/CV_Of_MahadiHasanShaisob.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 text-blue-800 px-8 py-3 rounded-full font-medium bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="order-1 md:order-2 flex flex-col items-center"
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 blur-lg opacity-70 animate-pulse"></div>
                <img
                  src="/dp.jpg"
                  alt="Mahadi Hasan Shaisob"
                  className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-2 border-cyan-400 relative z-10 bg-gradient-to-b from-cyan-900 to-blue-900"
                />
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-8">
                <SocialLink 
                  href="https://scholar.google.com/citations?user=HoeeAaIAAAAJ&hl=en" 
                  icon={<BookOpen className="w-5 h-5" />} 
                  title="Google Scholar"
                />
                <SocialLink 
                  href="https://orcid.org/my-orcid?orcid=0009-0001-1757-5180" 
                  icon={<UserCheck className="w-5 h-5" />} 
                  title="ORCID"
                />
                <SocialLink 
                  href="https://www.researchgate.net/profile/Mahadi-Shaisob?ev=hdr_xprf" 
                  icon={<Users className="w-5 h-5" />} 
                  title="ResearchGate"
                />
                <SocialLink 
                  href="https://github.com/shoisob2004037" 
                  icon={<Github className="w-5 h-5" />} 
                  title="GitHub"
                />
                <SocialLink 
                  href="https://www.linkedin.com/in/mahadi-hasan-shaisob-bb72892b9/" 
                  icon={<Linkedin className="w-5 h-5" />} 
                  title="LinkedIn"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${darkMode ? "bg-gray-900" : "bg-gradient-to-b from-white to-cyan-50"}`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-2">
              <span className={`${darkMode ? "text-cyan-400" : "text-cyan-600"} relative inline-block`}>
                Get In Touch
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></span>
              </span>
            </h2>
            <p className="text-center text-lg mb-8">For any Query or Feedback Contact with me</p>

            <motion.form
              ref={formRef}
              className={`space-y-4 p-8 rounded-xl shadow-xl ${
                darkMode ? "bg-gray-800 shadow-cyan-900/20" : "bg-white shadow-cyan-200/50"
              }`}
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={handleFormSubmit}
            >
              <input type="hidden" name="access_key" value="49cbfe00-01ee-4fe3-ba7b-2bacf3cd14b5" />
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className={`w-full p-3 rounded-lg ${
                    darkMode
                      ? "bg-gray-700 border border-gray-600 text-white focus:border-cyan-500"
                      : "bg-white border border-gray-300 text-gray-900 focus:border-cyan-500"
                  } focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300`}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className={`w-full p-3 rounded-lg ${
                    darkMode
                      ? "bg-gray-700 border border-gray-600 text-white focus:border-cyan-500"
                      : "bg-white border border-gray-300 text-gray-900 focus:border-cyan-500"
                  } focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300`}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="address"
                  placeholder="Your Address"
                  required
                  className={`w-full p-3 rounded-lg ${
                    darkMode
                      ? "bg-gray-700 border border-gray-600 text-white focus:border-cyan-500"
                      : "bg-white border border-gray-300 text-gray-900 focus:border-cyan-500"
                  } focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300`}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  required
                  className={`w-full p-3 rounded-lg ${
                    darkMode
                      ? "bg-gray-700 border border-gray-600 text-white focus:border-cyan-500"
                      : "bg-white border border-gray-300 text-gray-900 focus:border-cyan-500"
                  } focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300`}
                ></textarea>
              </div>

              {formStatus === "success" && (
                <div className="p-3 bg-green-100 text-green-700 rounded-lg flex items-center gap-2">
                  Message sent successfully!
                </div>
              )}

              {formStatus === "error" && (
                <div className="p-3 bg-red-100 text-red-700 rounded-lg flex items-center gap-2">
                  Failed to send message. Please try again.
                </div>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className={`inline-flex items-center gap-2 px-8 py-3 rounded-lg font-medium ${
                    darkMode
                      ? "bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800"
                      : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                  } text-white transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1`}
                >
                  {formStatus === "submitting" ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: showBackToTop ? 1 : 0,
          scale: showBackToTop ? 1 : 0.5,
          y: showBackToTop ? 0 : 20,
        }}
        transition={{ duration: 0.3 }}
        className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg z-50 ${
          darkMode ? "bg-cyan-600 hover:bg-cyan-700" : "bg-cyan-500 hover:bg-cyan-600"
        } text-white transition-colors duration-300`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </>
  )
}

const SocialLink = ({ href, icon, title }) => {
  const { darkMode } = useTheme()

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      title={title}
      className={`
        flex items-center justify-center w-10 h-10 rounded-full 
        ${
          darkMode
            ? "bg-gray-800 text-cyan-400 hover:bg-gray-700 hover:text-cyan-300"
            : "bg-white/90 text-cyan-600 hover:bg-white hover:text-cyan-500"
        }
        transition-all duration-300 shadow-lg
      `}
    >
      {icon}
    </motion.a>
  )
}

export default Home