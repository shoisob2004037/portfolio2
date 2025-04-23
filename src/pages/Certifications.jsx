"use client"

import { useState } from "react"
import { useTheme } from "../context/ThemeContext"

const Certifications = () => {
  const { darkMode } = useTheme()
  const [selectedImage, setSelectedImage] = useState(null)

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

  const handleImageClick = (image) => {
    setSelectedImage(image)
  }

  const handleCloseModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className={`text-4xl font-bold ${darkMode ? "text-white" : "text-gray-900"} mb-4`}>My Certifications</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Explore the certifications I have earned, showcasing my expertise in web development, full-stack technologies, and professional skills.
        </p>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className={`
              rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2
              ${darkMode ? "bg-gray-800" : "bg-white"} cursor-pointer
            `}
            onClick={() => handleImageClick(cert.image)}
          >
            <div className="h-48 relative">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover object-center"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-30`}></div>
            </div>

            <div className="p-6 bg-blue-200">
              <h2 className="text-xl font-bold mb-2">{cert.title}</h2>
              <p
                className={`
                  text-md font-semibold 
                  ${darkMode ? "text-cyan-400" : "text-cyan-600"}
                `}
              >
                {cert.issuer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Full-Screen Modal */}
      {selectedImage && (
        <div
          className={`
            fixed inset-0 z-50 flex items-center justify-center
            ${darkMode ? "bg-black bg-opacity-80" : "bg-gray-900 bg-opacity-80"}
          `}
          onClick={handleCloseModal}
        >
          <div className="relative max-w-4xl w-full h-[90vh] p-4">
            <img
              src={selectedImage}
              alt="Full-screen certificate"
              className="w-full h-full object-contain"
            />
            <button
              className={`
                absolute top-4 right-4 p-2 rounded-full
                ${darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"}
                hover:bg-opacity-80 transition-colors duration-300
              `}
              onClick={handleCloseModal}
              aria-label="Close full-screen view"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Certifications
