"use client"

import { useState } from "react"
import { useTheme } from "../context/ThemeContext"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, ChevronDown, ChevronUp, Tag, CheckCircle, Info } from "lucide-react"

const Projects = () => {
  const { darkMode } = useTheme()
  const [activeProject, setActiveProject] = useState(null)

  const projects = [
    {
      id: "p1",
      title: "Multi Purpose Robot",
      image: "/100.jpg",
      features: ["Object Following Robot", "Obstacle Avoiding Robot", "Bluetooth Control Robot", "Voice Command Robot"],
      keywords: [
        "Arduino Uno",
        "Motor Driver Shield",
        "Bluetooth Module",
        "Ultrasonic and IR Sensors",
        "Servo and TT Gear Motors",
      ],
      description:
        "A multifunctional robot built with Arduino and a motor driver shield (L293D) for object following, obstacle avoidance, and Bluetooth control. The Arduino processes sensor data to control DC motors, while infrared/ultrasonic sensors enable object tracking and navigation. Bluetooth integration allows remote control via a mobile app, with voice command functionality through Arduino-developed apps and Google Assistant.",
      link: "",
      github: "",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "p10",
      title: "RUET Social",
      image: "/ruetsocial.png",
      features: ["Alumni Networking", "Real-Time Chat", "Post Interaction", "Email Verification"],
      keywords: ["MERN Stack", "Tailwind CSS", "Socket.io", "JWT", "Nodemailer"],
      description:
        "RUET Social is a MERN stack platform connecting RUET alumni and students. Users can join via verified RUET edumail (using Nodemailer), interact through posts (like, comment, save), and chat in real-time with Socket.io. The platform supports profile searches by ID or department, with JWT authentication for security and Tailwind CSS for styling.",
      link: "/coming",
      github: "/coming",
      color: "from-purple-600 to-blue-600",
    },
    {
      id: "p9",
      title: "Hospital Management System",
      image: "/hos.png",
      features: ["Role-Based Dashboards", "Doctor Appointment System", "Admin Management", "JWT Authentication"],
      keywords: ["MERN Stack", "Tailwind CSS", "JWT", "Cloudinary"],
      description:
        "A hospital management system built with the MERN stack, featuring role-based dashboards for admins, doctors, and patients. Admins can approve doctor registrations, manage users, and track hospital activities. Doctors can handle appointment requests, while patients can book appointments. JWT authentication ensures security, and Tailwind CSS provides a modern UI, with Cloudinary for image storage.",
      link: "https://hospital-management-ncs9.vercel.app",
      github: "https://github.com/shoisob2004037/Hospital-Management",
      color: "from-blue-600 to-indigo-600",
    },
    {
      id: "p7",
      title: "QuizMaster",
      image: "/quiz.png",
      features: [
        "Custom Quiz Creation",
        "AI-Generated Quiz Topics",
        "Pre-Made Quizzes",
        "Performance Tracking Dashboard",
      ],
      keywords: ["React.js", "MERN Stack", "Firebase", "Gemini API"],
      description:
        "QuizMaster is a dynamic platform built with the MERN stack and Firebase authentication. Users can sign up, log in, and create custom quizzes or generate unique quiz topics using an AI-powered feature. Pre-made quizzes are available for instant use, and all quizzes are saved to user profiles for later access. The interactive dashboard tracks performance with engaging score graphs.",
      link: "https://quiz-app-braf.vercel.app",
      github: "https://github.com/shoisob2004037/Quiz-App",
      color: "from-teal-500 to-green-500",
    },
    {
      id: "p11",
      title: "Hall Token System",
      image: "/halltoken.png",
      features: ["Token Booking System", "Admin Dashboard", "Token Management", "JWT Authentication"],
      keywords: ["MERN Stack", "Tailwind CSS", "JWT"],
      description:
        "A MERN stack hall token system for university halls, allowing students to book daily tokens using a Tk-based system. Admins can manage tokens, refill user balances, and track all activities via a comprehensive dashboard. JWT authentication ensures secure access, and Tailwind CSS provides a sleek, responsive interface.",
      link: "/coming",
      github: "/coming",
      color: "from-green-600 to-teal-600",
    },
    {
      id: "p8",
      title: "Gadgets Shop",
      image: "/gad.png",
      features: ["Secure Authentication", "Admin Dashboard", "User Profile & Order History", "Responsive Design"],
      keywords: ["HTML", "CSS", "Bootstrap", "Firebase", "React.js"],
      description:
        "A React.js-based e-commerce prototype for gadgets, utilizing Firebase for authentication, real-time data storage, and order management. It includes secure user login, an admin dashboard for managing orders and users, and a user profile page for tracking order history. The responsive design, built with Bootstrap, ensures compatibility across devices.",
      link: "https://gadgets-shop-zeta.vercel.app",
      github: "https://github.com/shoisob2004037/gadgets-shop-react-firebase-sample",
      color: "from-orange-500 to-yellow-500",
    },
    {
      id: "p12",
      title: "Memory Card Game",
      image: "/memory.png",
      features: [
        "Card Matching Gameplay",
        "Firebase Authentication",
        "Real-Time Score Tracking",
        "High Score Leaderboard",
      ],
      keywords: ["HTML", "CSS", "Javascript", "Firebase"],
      description:
        "A memory card matching game with Firebase authentication and real-time database integration. Players can log in to track their scores and compete on a high-score leaderboard. The game syncs scores across devices, offering a fun and engaging experience with secure user management.",
      link: "https://memory-game-seven-kohl.vercel.app",
      github: "https://github.com/shoisob2004037/memory-game",
      color: "from-pink-500 to-red-500",
    },
    {
      id: "p5",
      title: "Food Ordering App",
      image: "/p5.png",
      features: [
        "A lot of Home Made Food Items and Categories",
        "Add Cart System of Food",
        "Details of All Food and Categories",
        "Food Order Send",
      ],
      keywords: ["HTML", "CSS", "Javascript DOM"],
      description:
        "A food ordering platform for browsing homemade food items by category. It features a cart system for adding items, adjusting quantities, and viewing totals. Detailed food information includes ingredients, preparation time, and nutritional facts, with a streamlined order process for delivery and payment.",
      link: "https://shoisob2004037.github.io/food/",
      github: "#",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "p6",
      title: "Rock Paper Scissors Game",
      image: "/p6.png",
      features: [
        "Simple Rock Paper Scissors Game",
        "Account Login & Creating System by Firebase",
        "Save Game Scores to Account",
      ],
      keywords: ["HTML", "CSS", "Javascript DOM", "Firebase"],
      description:
        "A web-based Rock, Paper, Scissors game with Firebase authentication and real-time score tracking. Players can log in with Google to save scores to a Firebase database, enabling cross-device synchronization. Secure sign-in/out features and persistent game history enhance the user experience.",
      link: "https://shoisob2004037.github.io/rock-paper-scissors/",
      github: "#",
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: "p4",
      title: "Cooking Recipe App",
      image: "/p4.png",
      features: ["Unlimited Food Recipes", "Youtube Link of all Recipes"],
      keywords: ["HTML", "CSS", "Javascript DOM", "API Fetch"],
      description:
        "A dynamic web app for searching recipes by keywords like 'Egg' or 'Chicken.' Using a recipe API, it provides dish names, categories, ingredients, instructions, and YouTube video links. Users can browse example recipes or search for specific dishes, with detailed views for each recipe.",
      link: "https://shoisob2004037.github.io/cooking-recipe-app/",
      github: "#",
      color: "from-amber-500 to-red-500",
    },
    {
      id: "p3",
      title: "Weather Scout",
      image: "/w.png",
      features: ["Get Current Weather Info", "Get Weather Forecast"],
      keywords: ["HTML", "CSS", "Javascript DOM", "API Fetch"],
      description:
        "WeatherScout is a web app that fetches real-time weather data for any city using the OpenWeatherMap API. It displays temperature, humidity, wind speed, pressure, and weather descriptions. The user-friendly interface includes error handling for invalid city names and a weather-themed background.",
      link: "https://shoisob2004037.github.io/weather-scout/",
      github: "#",
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: "p2",
      title: "Photo Gallery Slider Web & App",
      image: "/Screenshot 2024-07-28 204650.png",
      features: [
        "Home Page and Nav Menu",
        "Natural Photo Gallery",
        "Macro Photo Gallery",
        "Night & Astro Photo Gallery",
        "Web to Android Apps Converter",
      ],
      keywords: ["HTML", "CSS with Bootstrap", "Javascript"],
      description:
        "An interactive website featuring a photo slider gallery divided into Nature, Macro, and Astro/Night photography sections. It showcases personally captured and edited photographs with scrollable galleries, navigation buttons, and enhanced viewing options. The website is also converted into a mobile app for broader accessibility.",
      link: "https://shoisob2004037.github.io/photo-slider-portfolio-/",
      github: "#",
      color: "from-purple-500 to-pink-500",
    },
  ]

  const handleProjectClick = (id) => {
    setActiveProject(id === activeProject ? null : id)
    if (id !== activeProject) {
      setTimeout(() => {
        const element = document.getElementById(`details-${id}`)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }, 100)
    }
  }

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
              My Projects
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></span>
            </span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Explore my portfolio of web development and engineering projects. Each project showcases different skills
            and technologies.
          </p>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              id={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                boxShadow: darkMode
                  ? "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4)"
                  : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className={`
                rounded-xl overflow-hidden shadow-lg transform transition-all duration-300
                ${activeProject === project.id ? `ring-4 ring-cyan-500` : ""}
                ${darkMode ? "bg-gray-800" : "bg-white"}
              `}
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div
                  className={`absolute top-3 right-3 bg-gradient-to-r ${project.color} text-white text-xs px-3 py-1 rounded-full`}
                >
                  {project.keywords[0]}
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold mb-3">{project.title}</h2>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.keywords.slice(0, 3).map((keyword, idx) => (
                    <span
                      key={idx}
                      className={`text-xs px-2 py-1 rounded-full flex items-center gap-1 ${
                        darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      <Tag className="w-3 h-3" />
                      {keyword}
                    </span>
                  ))}
                  {project.keywords.length > 3 && (
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      +{project.keywords.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleProjectClick(project.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
                      darkMode
                        ? "bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800"
                        : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                    } text-white transition-all duration-300 shadow-md hover:shadow-lg`}
                  >
                    {activeProject === project.id ? (
                      <>
                        <ChevronUp className="w-4 h-4" />
                        Hide
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4" />
                        Details
                      </>
                    )}
                  </motion.button>

                  <div className="flex gap-2">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-3 py-2 rounded-lg ${
                        darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"
                      } transition-all duration-300 flex items-center gap-1 shadow-sm hover:shadow`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="hidden sm:inline">Visit</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-3 py-2 rounded-lg ${
                        darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"
                      } transition-all duration-300 flex items-center gap-1 shadow-sm hover:shadow`}
                    >
                      <Github className="w-4 h-4" />
                      <span className="hidden sm:inline">GitHub</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Details Section */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              id={`details-${activeProject}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={`max-w-5xl mx-auto mb-16 rounded-xl overflow-hidden shadow-xl ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              {projects
                .filter((p) => p.id === activeProject)
                .map((project) => (
                  <div key={`details-${project.id}`} className="animate-fadeIn">
                    <div className={`h-64 bg-gradient-to-r ${project.color} relative`}>
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover object-center opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                        <div className="p-8">
                          <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-3xl font-bold text-white mb-2"
                          >
                            {project.title}
                          </motion.h2>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-wrap gap-2"
                          >
                            {project.keywords.map((keyword, idx) => (
                              <span
                                key={idx}
                                className="text-xs px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm"
                              >
                                {keyword}
                              </span>
                            ))}
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-cyan-500">
                            <CheckCircle className="w-5 h-5" />
                            Project Features
                          </h3>
                          <ul className="space-y-3">
                            {project.features.map((feature, index) => (
                              <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                                className="flex items-start"
                              >
                                <CheckCircle className="text-green-500 mt-1 mr-2 w-4 h-4 flex-shrink-0" />
                                <span>{feature}</span>
                              </motion.li>
                            ))}
                          </ul>

                          <h3 className="text-xl font-semibold mt-8 mb-4 flex items-center gap-2 text-cyan-500">
                            <Tag className="w-5 h-5" />
                            Technologies Used
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {project.keywords.map((keyword, index) => (
                              <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                                className={`px-3 py-1 rounded-full ${
                                  darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-700"
                                }`}
                              >
                                {keyword}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-cyan-500">
                            <Info className="w-5 h-5" />
                            Project Description
                          </h3>
                          <p className="text-justify leading-relaxed">{project.description}</p>

                          <div className="flex flex-wrap gap-4 mt-8">
                            <motion.a
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg ${
                                darkMode
                                  ? "bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800"
                                  : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                              } text-white transition-all duration-300 shadow-lg hover:shadow-xl`}
                            >
                              <ExternalLink className="w-4 h-4" />
                              Visit Project
                            </motion.a>
                            <motion.a
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg ${
                                darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"
                              } transition-all duration-300 shadow-md hover:shadow-lg`}
                            >
                              <Github className="w-4 h-4" />
                              View GitHub
                            </motion.a>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Projects
