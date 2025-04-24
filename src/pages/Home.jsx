"use client"

import { useState, useEffect, useRef } from "react"
import { useTheme } from "../context/ThemeContext"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { Search, Download, Facebook, Instagram, Github, Linkedin, ArrowUp, Send } from "lucide-react"

const Home = () => {
  const { darkMode } = useTheme()
  const [typedText, setTypedText] = useState("")
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchError, setSearchError] = useState("")
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [formStatus, setFormStatus] = useState(null)
  const formRef = useRef(null)
  const navigate = useNavigate()

  const phrases = ["Engineer", "Web Developer", "Photographer"]

  // Search mapping - keywords to routes
  const searchMapping = {
    // Pages
    home: "/",
    expertise: "/expertise",
    experties: "/expertise", // Common misspelling
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

    // Skills
    html: "/expertise",
    css: "/expertise",
    javascript: "/expertise",
    react: "/expertise",
    bootstrap: "/expertise",
    tailwind: "/expertise",
    firebase: "/expertise",

    // Education
    bsc: "/about-me",
    ete: "/about-me",
    ruet: "/about-me",
    hsc: "/about-me",
    ssc: "/about-me",
  }

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex]

    const type = () => {
      if (isDeleting) {
        // Deleting text
        setTypedText(currentPhrase.substring(0, typedText.length - 1))
        setTypingSpeed(50) // Faster when deleting
      } else {
        // Typing text
        setTypedText(currentPhrase.substring(0, typedText.length + 1))
        setTypingSpeed(100) // Normal speed when typing
      }

      // If completed typing the current phrase
      if (!isDeleting && typedText === currentPhrase) {
        // Pause at the end of typing
        setTimeout(() => setIsDeleting(true), 1500)
      }
      // If deleted the current phrase
      else if (isDeleting && typedText === "") {
        setIsDeleting(false)
        // Move to the next phrase
        setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length)
      }
    }

    const timer = setTimeout(type, typingSpeed)
    return () => clearTimeout(timer)
  }, [typedText, isDeleting, currentPhraseIndex, typingSpeed, phrases])

  // Scroll event listener for back to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()

    if (!searchQuery.trim()) {
      setSearchError("Please enter a search term")
      return
    }

    // Convert search query to lowercase for case-insensitive matching
    const query = searchQuery.toLowerCase().trim()

    // Check for exact matches first
    if (searchMapping[query]) {
      setSearchError("")
      navigateToSection(searchMapping[query])
      return
    }

    // Check for partial matches
    const partialMatches = Object.keys(searchMapping).filter((key) => key.includes(query) || query.includes(key))

    if (partialMatches.length > 0) {
      // Navigate to the first match
      setSearchError("")
      navigateToSection(searchMapping[partialMatches[0]])
      return
    }

    // If no matches found
    setSearchError("No matching content found")
    setTimeout(() => setSearchError(""), 3000)
  }

  const navigateToSection = (path) => {
    // Reset search after navigation
    setSearchQuery("")

    // Check if it's a hash link (section within a page)
    if (path.includes("#")) {
      const [pagePath, sectionId] = path.split("#")

      // If we're already on the correct page, just scroll to the section  = path.split("#")

      // If we're already on the correct page, just scroll to the section
      if (window.location.pathname === pagePath || (pagePath === "/" && window.location.pathname === "")) {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
        return
      }

      // Otherwise navigate to the page, then scroll to section
      navigate(pagePath)
      // Wait for page to load before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
      return
    }

    // Regular page navigation
    navigate(path)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setFormStatus("submitting")

    try {
      // Simulate form submission
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
          {/* Logo and Search */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-center mb-12"
          >
            <div className="flex flex-col w-full md:w-auto mb-6 md:mb-0">
              <div className="flex relative">
                <input
                  type="text"
                  id="searchInput"
                  placeholder="Search here..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="p-3 pl-12 rounded-full w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-800 shadow-lg"
                  onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  <Search className="w-5 h-5" />
                </div>
                <button
                  id="searchButton"
                  onClick={handleSearch}
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-cyan-600 text-white p-2 rounded-full hover:bg-cyan-700 transition-colors duration-300"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>
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
                <span className="text-amber-400 italic font-semibold min-w-[150px]">{typedText}</span>
                <span className="animate-blink">|</span>
              </h2>
              <p className="mb-8 text-white/90 text-lg leading-relaxed">
                "Welcome to my portfolio! I'm Mahadi Hasan Shaisob, a Front End Web Developer. It's my First Portfolio
                where I Shows my Educational Qualification, Skills, and my Passion. I love to take photos of nature,
                stories, and I love to travel."
              </p>
              <motion.a
                href="/CV_of_Mahadi_Hasan_Shaisob.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 text-blue-800 px-8 py-3 rounded-full font-medium bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Download className="w-5 h-5 " />
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
                  src="/photo_2024-08-31_16-53-03-removebg-preview.png"
                  alt="Mahadi Hasan Shaisob"
                  className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-cyan-400 relative z-10 bg-gradient-to-b from-cyan-900 to-blue-900"
                />
              </div>
              <div className="flex gap-4 mt-8">
                <SocialLink href="https://www.facebook.com/hasan.shoisob" icon={<Facebook className="w-5 h-5" />} />
                <SocialLink
                  href="https://www.instagram.com/_shoisob_is_here_/"
                  icon={<Instagram className="w-5 h-5" />}
                />
                <SocialLink href="https://github.com/shoisob2004037" icon={<Github className="w-5 h-5" />} />
                <SocialLink
                  href="https://www.linkedin.com/in/mahadi-hasan-shaisob-bb72892b9/"
                  icon={<Linkedin className="w-5 h-5" />}
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
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Message sent successfully!
                </div>
              )}

              {formStatus === "error" && (
                <div className="p-3 bg-red-100 text-red-700 rounded-lg flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
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
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
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

const SocialLink = ({ href, icon }) => {
  const { darkMode } = useTheme()

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
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
