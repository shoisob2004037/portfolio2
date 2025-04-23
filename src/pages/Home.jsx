"use client"

import { useState, useEffect } from "react"
import { useTheme } from "../context/ThemeContext"
import { Link, useNavigate } from "react-router-dom"

const Home = () => {
  const { darkMode } = useTheme()
  const [typedText, setTypedText] = useState("")
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchError, setSearchError] = useState("")
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

  return (
    <>
      {/* Banner Section */}
      <section id="banner" className={`py-12 ${darkMode ? "bg-gray-900" : "bg-cyan-700"}`}>
        <div className="container mx-auto px-4">
          {/* Logo and Search */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex flex-col w-full md:w-auto">
              <div className="flex">
                <input
                  type="text"
                  id="searchInput"
                  placeholder="Search here..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="p-2 rounded-l-lg w-full md:w-64 focus:outline-none text-dark"
                  onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
                />
                <button
                  id="searchButton"
                  onClick={handleSearch}
                  className="bg-cyan-600 text-white p-2 rounded-r-lg hover:bg-cyan-700"
                >
                  <i className="bx bx-search-alt-2"></i>
                </button>
              </div>
              {searchError && <div className="text-red-500 text-sm mt-1 bg-white px-2 py-1 rounded">{searchError}</div>}
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">Mahadi Hasan Shaisob</h1>
              <h2 className="text-xl md:text-2xl mb-4 text-white">
                -<span className="text-amber-500 italic font-semibold">{typedText}</span>
              </h2>
              <p className="mb-6 text-white">
                "Welcome to my portfolio! I'm Mahadi Hasan Shaisob, a Front End Web Developer. It's my First Portfolio
                where I Shows my Educational Qualification, Skills, and my Passion. I love to take photos of nature,
                stories, and I love to travel."
              </p>
              <a
                href="/CV_of_Mahadi_Hasan_Shaisob.pdf"
                download
                className="inline-block px-6 py-2 rounded-lg font-medium bg-cyan-500 hover:bg-cyan-600 text-white transition-colors duration-300"
              >
                Download CV
              </a>
            </div>

            <div className="order-1 md:order-2 flex flex-col items-center">
              <img
                src="/photo_2024-08-31_16-53-03-removebg-preview.png"
                alt="Mahadi Hasan Shaisob"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-cyan-500 mb-6"
              />
              <div className="flex gap-4">
                <SocialLink
                  href="https://www.facebook.com/hasan.shoisob"
                  icon={<i className="bx bxl-facebook-circle text-xl"></i>}
                />
                <SocialLink
                  href="https://www.instagram.com/_shoisob_is_here_/"
                  icon={<i className="bx bxl-instagram text-xl"></i>}
                />
                <SocialLink href="https://github.com/shoisob2004037" icon={<i className="bx bxl-github text-xl"></i>} />
                <SocialLink
                  href="https://www.linkedin.com/in/mahadi-hasan-shaisob-bb72892b9/"
                  icon={<i className="bx bxl-linkedin text-xl"></i>}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">
              <span className={`${darkMode ? "text-cyan-400" : "text-cyan-600"}`}>
                For any Query or Feedback Contact with me
              </span>
            </h2>

            <form className="space-y-4" action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="49cbfe00-01ee-4fe3-ba7b-2bacf3cd14b5" />
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className={`w-full p-3 rounded-lg ${
                    darkMode
                      ? "bg-gray-800 border border-gray-700 text-white"
                      : "bg-white border border-gray-300 text-gray-900"
                  }`}
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
                      ? "bg-gray-800 border border-gray-700 text-white"
                      : "bg-white border border-gray-300 text-gray-900"
                  }`}
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
                      ? "bg-gray-800 border border-gray-700 text-white"
                      : "bg-white border border-gray-300 text-gray-900"
                  }`}
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
                      ? "bg-gray-800 border border-gray-700 text-white"
                      : "bg-white border border-gray-300 text-gray-900"
                  }`}
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className={`px-8 py-3 rounded-lg font-medium ${
                    darkMode ? "bg-cyan-600 hover:bg-cyan-700" : "bg-cyan-500 hover:bg-cyan-600"
                  } text-white transition-colors duration-300`}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <a href="#banner" className="back-to-top">
        <i className="bx bx-up-arrow-alt"></i>
      </a>
    </>
  )
}

const SocialLink = ({ href, icon }) => {
  const { darkMode } = useTheme()

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        flex items-center justify-center w-10 h-10 rounded-full 
        ${darkMode ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-cyan-100 text-cyan-800 hover:bg-cyan-200"}
        transition-colors duration-300
      `}
    >
      {icon}
    </a>
  )
}

export default Home
