"use client"

import { useState, useEffect } from "react"
import { useTheme } from "../context/ThemeContext"
import { motion, AnimatePresence } from "framer-motion"
import { Award, X, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'

const Certifications = () => {
  const { darkMode } = useTheme()
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const certifications = [
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
      issuer: "Complete Coding by Prashant Sir (YouTube Course)",
      image: "/js.PNG",
    },
    {
      id: "c8",
      title: "HTML Certification Test",
      issuer: "Complete Coding by Prashant Sir (YouTube Course)",
      image: "/html.PNG",
    },
    {
      id: "c9",
      title: "CSS Certification Test",
      issuer: "Complete Coding by Prashant Sir (YouTube Course)",
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

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return
      
      if (e.key === "Escape") {
        handleCloseModal()
      } else if (e.key === "ArrowLeft") {
        handlePrevImage(e)
      } else if (e.key === "ArrowRight") {
        handleNextImage(e)
      }
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
            <span className="relative inline-block">
              My Certifications
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></span>
            </span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Explore the certifications I have earned, showcasing my expertise in web development, full-stack
            technologies, and professional skills.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: darkMode 
                  ? "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4)" 
                  : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className={`
                rounded-xl overflow-hidden shadow-lg cursor-pointer
                ${darkMode ? "bg-gray-800" : "bg-white"}
              `}
              onClick={() => handleImageClick(cert.image, index)}
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${cert.color || "from-cyan-500 to-blue-500"} opacity-30`}></div>
                <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-900/90 p-2 rounded-full">
                  <Award className={`w-5 h-5 ${darkMode ? "text-cyan-400" : "text-cyan-600"}`} />
                </div>
              </div>

              <div className={`p-6 ${darkMode ? "bg-gray-800" : "bg-gradient-to-br from-white to-cyan-50"}`}>
                <h2 className="text-xl font-bold mb-2">{cert.title}</h2>
                <p
                  className={`
                    text-md font-semibold 
                    ${darkMode ? "text-cyan-400" : "text-cyan-600"}
                  `}
                >
                  {cert.issuer}
                </p>
                <div className="mt-4 flex justify-end">
                  <span className="text-xs px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200">
                    Click to view
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Full-Screen Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`
                fixed inset-0 z-50 flex items-center justify-center p-4
                ${darkMode ? "bg-black bg-opacity-90" : "bg-gray-900 bg-opacity-90"}
              `}
              onClick={handleCloseModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="relative max-w-4xl w-full h-[90vh] flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage || "/placeholder.svg"}
                  alt="Full-screen certificate"
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
                
                {/* Navigation buttons */}
                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-300"
                  onClick={handlePrevImage}
                  aria-label="Previous certificate"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-300"
                  onClick={handleNextImage}
                  aria-label="Next certificate"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                
                {/* Close button */}
                <button
                  className="absolute top-4 right-4 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-300"
                  onClick={handleCloseModal}
                  aria-label="Close full-screen view"
                >
                  <X className="w-6 h-6" />
                </button>
                
                {/* Certificate info */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-6 py-3 rounded-full text-sm">
                  {certifications[selectedIndex].title} • {certifications[selectedIndex].issuer}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Certifications

