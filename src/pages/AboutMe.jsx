"use client"

import { useTheme } from "../context/ThemeContext"
import { motion } from "framer-motion"
import { GraduationCap, Target, Microscope, BookOpen, Users, Globe, Heart, CheckCircle } from "lucide-react"

const AboutMe = () => {
  const { darkMode } = useTheme()

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
                Telecommunication Engineering (ETE) student, a MERN Stack Web Developer, and an AI Researcher with a passion for building intelligent web solutions. My future ambition is to become a researcher and full-stack developer, integrating AI into real-world applications. I dream of pursuing higher education abroad in the fields of Cybersecurity, Autonomous Vehicles, and Cyber-Physical Systems. In my free time, I enjoy traveling, reading, and capturing moments through photography."
              </p>
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
                  src="/dp.jpg"
                  alt="Mahadi Hasan Shaisob"
                  className="w-64 h-64 rounded-full object-cover border-4 border-cyan-500 relative z-10"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Education Section */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
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
                grade="CGPA : 3.74"
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

            {/* Future Goals Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className={`mt-12 p-6 rounded-xl ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg`}
            >
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Target className="text-cyan-500 w-6 h-6" />
                <span className={`${darkMode ? "text-cyan-400" : "text-cyan-600"}`}>My Future Goals</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <GoalItem delay={0.1} icon={<Microscope className="w-5 h-5" />}>
                  Become a renowned researcher in the fields of Cybersecurity, AI, and Machine Learning
                </GoalItem>
                <GoalItem delay={0.2} icon={<Globe className="w-5 h-5" />}>
                  Pursue higher studies abroad to expand research capabilities and global perspective
                </GoalItem>
                <GoalItem delay={0.3} icon={<BookOpen className="w-5 h-5" />}>
                  Contribute to cutting-edge research in Autonomous Vehicles and Cyber-Physical Systems
                </GoalItem>
                <GoalItem delay={0.4} icon={<Users className="w-5 h-5" />}>
                  Enter the teaching profession to inspire and mentor the next generation of technologists
                </GoalItem>
                <GoalItem delay={0.5} icon={<GraduationCap className="w-5 h-5" />}>
                  Complete PhD and establish a research lab focused on AI-driven security solutions
                </GoalItem>
                <GoalItem delay={0.6} icon={<Heart className="w-5 h-5" />}>
                  Bridge the gap between academia and industry by developing real-world AI applications
                </GoalItem>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

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

const GoalItem = ({ children, delay = 0, icon }) => {
  const { darkMode } = useTheme()
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-start p-3 rounded-lg hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-all duration-300"
    >
      <div className="text-cyan-500 mt-0.5 mr-3">
        {icon || <CheckCircle className="w-5 h-5" />}
      </div>
      <span className={`${darkMode ? "text-gray-200" : "text-gray-700"}`}>{children}</span>
    </motion.div>
  )
}

export default AboutMe