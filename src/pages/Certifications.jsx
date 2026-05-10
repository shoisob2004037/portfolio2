"use client"

import { useState, useEffect } from "react"
import { useTheme } from "../context/ThemeContext"
import { motion, AnimatePresence } from "framer-motion"
import { Award, X, ChevronLeft, ChevronRight } from 'lucide-react'

const Certifications = () => {
  const { darkMode } = useTheme()
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const certifications = [
    // === NEW ACADEMIC / RESEARCH CERTIFICATES (Added at top) ===
        {
      id: "c17",
      title: "Paper Presentation in ICCIT-2025",
      issuer: "ICCIT 2025",
      image: "/iccit.png",
      highlight: "DeepGuard-XSS: Leveraging Large Language Models with CNN-BiLSTM"
    },
    {
      id: "c18",
      title: "Paper Presentation in ICECTE-2026",
      issuer: "ICECTE 2026",
      image: "/xss.png",
      highlight: "XSS-SafeNet: A Bidirectional LSTM Architecture for High-Precision XSS Detection"
    },
    {
      id: "c16",
      title: "3rd Place - Project Showcasing",
      issuer: "RUET INNOVISTA 2025",
      image: "/project.jpg",         // ← Put your second image here
      highlight: "Faculty of Electrical & Computer Engineering"
    },


    // === Existing Certifications (kept as before) ===
    {
      id: "c1",
      title: "Full Stack Development with MERN",
      issuer: "Grameenphone Academy",
      image: "/mern.PNG",
    },
    {
      id: "c2",
      title: "Introduction to Web Development with HTML, CSS, JavaScript",
      issuer: "IBM (Coursera)",
      image: "/htmlcssjs.PNG",
    },
    {
      id: "c3",
      title: "Getting Started with Git and GitHub",
      issuer: "IBM (Coursera)",
      image: "/gitibm.PNG",
    },
    {
      id: "c4",
      title: "Master HTML and CSS by Building Real-World Projects",
      issuer: "Udemy",
      image: "/htmlcss.PNG",
    },
    {
      id: "c5",
      title: "Master Git and GitHub – Beginner to Expert",
      issuer: "Udemy",
      image: "/gitudemy.PNG",
    },
    {
      id: "c6",
      title: "React Basics",
      issuer: "Meta (Coursera)",
      image: "/react.PNG",
    },
    {
      id: "c7",
      title: "JavaScript Certification Test",
      issuer: "Complete Coding by Prashant Sir",
      image: "/js.PNG",
    },
    {
      id: "c8",
      title: "HTML Certification Test",
      issuer: "Complete Coding by Prashant Sir",
      image: "/html.PNG",
    },
    {
      id: "c9",
      title: "CSS Certification Test",
      issuer: "Complete Coding by Prashant Sir",
      image: "/cssc.PNG",
    },
    {
      id: "c10",
      title: "VSCode Shortcuts and Extensions for Web Developer",
      issuer: "Udemy",
      image: "/vsc.PNG",
    },
    {
      id: "c11",
      title: "Microsoft Excel: Beginner to Advanced",
      issuer: "Grameenphone Academy",
      image: "/excelc.PNG",
    },
    {
      id: "c12",
      title: "Microsoft PowerPoint: Advanced Course",
      issuer: "Grameenphone Academy",
      image: "/ppc.PNG",
    },
    {
      id: "c13",
      title: "CV Writing for Professionals",
      issuer: "Grameenphone Academy",
      image: "/cv.PNG",
    },
    {
      id: "c14",
      title: "Create and Design Digital Products using Canva",
      issuer: "Coursera",
      image: "/canvac.PNG",
    },
  ]

  const handleImageClick = (image, index) => {
    setSelectedImage(image)
    setSelectedIndex(index)
  }

  const handleCloseModal = () => {
    setSelectedImage(null)
  }

  const handlePrevImage = (e) => {
    e.stopPropagation()
    const newIndex = (selectedIndex - 1 + certifications.length) % certifications.length
    setSelectedImage(certifications[newIndex].image)
    setSelectedIndex(newIndex)
  }

  const handleNextImage = (e) => {
    e.stopPropagation()
    const newIndex = (selectedIndex + 1) % certifications.length
    setSelectedImage(certifications[newIndex].image)
    setSelectedIndex(newIndex)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return
      if (e.key === "Escape") handleCloseModal()
      else if (e.key === "ArrowLeft") handlePrevImage(e)
      else if (e.key === "ArrowRight") handleNextImage(e)
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage, selectedIndex])

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900" : "bg-gradient-to-b from-cyan-50 to-white"}`}>
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className={`text-4xl font-bold ${darkMode ? "text-white" : "text-gray-900"} mb-4`}>
            My Certifications & Achievements
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Academic contributions, research presentations, project awards, and professional certifications
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`
                rounded-2xl overflow-hidden shadow-lg cursor-pointer group
                ${darkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-100"}
              `}
              onClick={() => handleImageClick(cert.image, index)}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute top-4 right-4">
                  <Award className="w-7 h-7 text-amber-400 drop-shadow-lg" />
                </div>
              </div>

              <div className={`p-6 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                <h3 className="font-bold text-lg leading-tight mb-2 line-clamp-2">
                  {cert.title}
                </h3>
                
                {cert.highlight && (
                  <p className="text-sm text-amber-500 dark:text-amber-400 font-medium mb-2">
                    {cert.highlight}
                  </p>
                )}

                <p className={`text-sm font-medium ${darkMode ? "text-cyan-400" : "text-cyan-600"}`}>
                  {cert.issuer}
                </p>

                <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                  Click to enlarge →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-Screen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Certificate"
                className="max-h-[90vh] w-auto mx-auto rounded-lg shadow-2xl object-contain"
              />

              {/* Navigation Buttons */}
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-4 rounded-full transition-all"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>

              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-4 rounded-full transition-all"
              >
                <ChevronRight className="w-7 h-7" />
              </button>

              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all"
              >
                <X className="w-7 h-7" />
              </button>

              {/* Info Bar */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/70 text-white px-8 py-3 rounded-full text-sm font-medium shadow-lg">
                {certifications[selectedIndex].title} — {certifications[selectedIndex].issuer}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Certifications