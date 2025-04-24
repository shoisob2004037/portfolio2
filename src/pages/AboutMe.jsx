"use client"

import { useTheme } from "../context/ThemeContext"
import { useState } from "react"
import { motion } from "framer-motion"
import { GraduationCap, Heart, CheckCircle } from "lucide-react"

const AboutMe = () => {
  const { darkMode } = useTheme()
  const [activeTab, setActiveTab] = useState("interests")

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900" : "bg-gradient-to-b from-cyan-50 to-white"}`}>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`relative rounded-2xl overflow-hidden mb-16 ${
            darkMode ? "bg-gray-800 shadow-xl" : "bg-white shadow-lg"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="order-2 md:order-1"
            >
              <h1 className={`text-4xl font-bold mb-6 ${darkMode ? "text-cyan-400" : "text-cyan-600"}`}>
                <span className="relative inline-block">
                  About Me
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></span>
                </span>
              </h1>
              <p className="text-lg leading-relaxed">
                "I am <span className="text-cyan-500 font-bold">Mahadi Hasan Shaisob</span>, an Electronics and
                Telecommunication Engineering (ETE) student and a front-end web developer with a passion for building
                user-friendly websites. My future ambition is to become a full-stack web developer. I also dream of
                pursuing higher education abroad. In my free time, I enjoy playing, traveling, and capturing moments
                through photography, which is my true passion."
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <TabButton
                  icon={<GraduationCap className="w-4 h-4" />}
                  label="Education"
                  isActive={activeTab === "education"}
                  onClick={() => setActiveTab("education")}
                  darkMode={darkMode}
                />
                <TabButton
                  icon={<Heart className="w-4 h-4" />}
                  label="Interests"
                  isActive={activeTab === "interests"}
                  onClick={() => setActiveTab("interests")}
                  darkMode={darkMode}
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="order-1 md:order-2 flex justify-center"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 blur-lg opacity-30 transform scale-110"
                ></motion.div>
                <motion.img
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  src="/profile2.jpg"
                  alt="Mahadi Hasan Shaisob"
                  className="w-64 h-64 rounded-full object-cover border-4 border-cyan-500 relative z-10"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          {/* Education Tab */}
          <AnimatedTabContent isVisible={activeTab === "education"}>
            <h2 className={`text-3xl font-bold text-center mb-8 ${darkMode ? "text-cyan-400" : "text-cyan-600"}`}>
              <span className="relative inline-block">
                Educational Background
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></span>
              </span>
            </h2>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1.5 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>

              {/* BSc */}
              <TimelineItem
                position="left"
                date="Ongoing"
                title="BSc in ETE"
                institution="Rajshahi University of Engineering and Technology"
                grade="CGPA : 3.65"
                icon="/ruet.png"
                darkMode={darkMode}
                delay={0.1}
              />

              {/* HSC */}
              <TimelineItem
                position="right"
                date="2020"
                title="HSC"
                institution="Govt. Science College"
                grade="GPA : 5.00"
                icon="/gsc.png"
                darkMode={darkMode}
                delay={0.3}
              />

              {/* SSC */}
              <TimelineItem
                position="left"
                date="2018"
                title="SSC"
                institution="Chatkhil P.G. Govt. High School"
                grade="GPA : 5.00"
                icon="/sc1.jpg"
                darkMode={darkMode}
                delay={0.5}
              />

              {/* JSC */}
              <TimelineItem
                position="right"
                date="2015"
                title="JSC"
                institution="Chatkhil P.G. Govt. High School"
                grade="GPA : 5.00"
                icon="/sc1.jpg"
                darkMode={darkMode}
                delay={0.7}
              />
            </div>
          </AnimatedTabContent>

          {/* Interests Tab */}
          <AnimatedTabContent isVisible={activeTab === "interests"}>
            <h2 className={`text-3xl font-bold text-center mb-8 ${darkMode ? "text-cyan-400" : "text-cyan-600"}`}>
              <span className="relative inline-block">
                My Interests
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></span>
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <InterestCard
                title="Photography"
                icon="fas fa-camera"
                description="Photography isn't just a hobby for me, it's a passion that ignites my soul. I love capturing moments, emotions, and stories through my lens."
                darkMode={darkMode}
                color="from-pink-500 to-rose-500"
                delay={0.1}
              />

              <InterestCard
                title="Reading"
                icon="fas fa-book-open"
                description="Books fuel my thoughts and broaden my horizons. I am particularly interested in Islamic books that challenge my perspective and deepen my understanding."
                darkMode={darkMode}
                color="from-amber-500 to-orange-500"
                delay={0.3}
              />

              <InterestCard
                title="Traveling"
                icon="fas fa-globe"
                description="Exploring new places fills me with joy and curiosity. Each journey adds a new chapter to my life, whether it's the busy streets of a city or the peaceful solitude of nature."
                darkMode={darkMode}
                color="from-emerald-500 to-green-500"
                delay={0.5}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className={`mt-8 p-6 rounded-xl ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg`}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <i className="fas fa-star text-cyan-500 mr-2"></i>
                Future Goals
              </h3>

              <ul className="space-y-3">
                <GoalItem delay={0.1}>
                  Become a proficient full-stack web developer with expertise in modern frameworks
                </GoalItem>
                <GoalItem delay={0.2}>
                  Pursue higher education abroad to expand my knowledge and cultural horizons
                </GoalItem>
                <GoalItem delay={0.3}>
                  Build innovative projects that combine my engineering background with web development skills
                </GoalItem>
                <GoalItem delay={0.4}>
                  Develop a professional photography portfolio showcasing my unique perspective
                </GoalItem>
                <GoalItem delay={0.5}>
                  Contribute to open-source projects and give back to the developer community
                </GoalItem>
              </ul>
            </motion.div>
          </AnimatedTabContent>
        </div>
      </div>
    </div>
  )
}

const TabButton = ({ icon, label, isActive, onClick, darkMode }) => (
  <motion.a
    href={`#${label.toLowerCase()}`}
    onClick={(e) => {
      e.preventDefault()
      onClick()
    }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`px-5 py-2 rounded-full transition-colors duration-300 flex items-center gap-2 ${
      isActive
        ? darkMode
          ? "bg-gradient-to-r from-cyan-600 to-blue-700 text-white"
          : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
        : darkMode
          ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
    }`}
  >
    {icon}
    {label}
  </motion.a>
)

const AnimatedTabContent = ({ children, isVisible }) => (
  <div className={`${isVisible ? "block" : "hidden"}`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  </div>
)

const TimelineItem = ({ position, date, title, institution, grade, icon, darkMode, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: position === "left" ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`flex items-center mb-16 ${position === "left" ? "justify-end" : "justify-start"}`}
    >
      {/* Timeline Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: delay + 0.2 }}
        className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center z-10 border-4 ${
          darkMode ? "border-gray-800" : "border-white"
        }`}
      >
        <img src={icon || "/placeholder.svg"} alt={title} className="w-12 h-12 rounded-full object-cover" />
      </motion.div>

      {/* Content */}
      <div className={`w-5/12 ${position === "right" ? "ml-8" : "mr-8"}`}>
        <motion.div
          whileHover={{
            y: -5,
            boxShadow: darkMode
              ? "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
              : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
          className={`p-6 rounded-xl shadow-lg transform transition-all duration-300 ${
            darkMode
              ? "bg-gray-800 border border-gray-700 hover:border-cyan-500"
              : "bg-white border border-gray-200 hover:border-cyan-500"
          }`}
        >
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm mb-2 ${
              darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-700"
            }`}
          >
            {date}
          </span>
          <h3 className="text-xl font-semibold text-cyan-500 mb-2">{title}</h3>
          <p className="mb-2">{institution}</p>
          <p className="font-bold">{grade}</p>
        </motion.div>
      </div>
    </motion.div>
  )
}

const SkillBar = ({ skill, percentage, delay = 0 }) => {
  const { darkMode } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className="mb-4"
    >
      <div className="flex justify-between mb-1">
        <span>{skill}</span>
        <span>{percentage}%</span>
      </div>
      <div className={`w-full h-2 rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, delay: delay + 0.3, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
        ></motion.div>
      </div>
    </motion.div>
  )
}

const InterestCard = ({ title, icon, description, darkMode, color, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        y: -10,
        boxShadow: darkMode
          ? "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
          : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      className={`rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 ${
        darkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className={`h-24 bg-gradient-to-r ${color} flex items-center justify-center`}>
        <i className={`${icon} text-white text-4xl`}></i>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </motion.div>
  )
}

const GoalItem = ({ children, delay = 0 }) => {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-start"
    >
      <CheckCircle className="text-green-500 mt-1 mr-3 w-5 h-5" />
      <span>{children}</span>
    </motion.li>
  )
}

export default AboutMe
