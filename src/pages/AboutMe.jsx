"use client"

import { useTheme } from "../context/ThemeContext"
import { motion } from "framer-motion"
import { 
  GraduationCap, 
  Target, 
  Microscope, 
  BookOpen, 
  Users, 
  Globe, 
  Heart, 
  CheckCircle, 
  Calendar, 
  ArrowDown, 
  Award,
  Sparkles
} from "lucide-react"

const AboutMe = () => {
  const { darkMode } = useTheme()

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gradient-to-b from-cyan-50/50 via-white to-cyan-50/30 text-gray-800"}`}>
      <div className="container mx-auto px-4 py-12 max-w-6xl">
                

        {/* Educational Background Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-500 mb-3 border border-cyan-500/20">
              <GraduationCap className="w-4 h-4" /> Academic Pathway
            </div>
            <h2 className={`text-3xl md:text-4xl font-extrabold ${darkMode ? "text-white" : "text-gray-900"}`}>
              Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Background</span>
            </h2>
            <p className={`mt-2 text-sm md:text-base ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
              My academic timeline starting from university level down to school qualifications
            </p>
          </motion.div>

          {/* Timeline Wrapper */}
          <div className="relative">
            {/* Center Vertical Line for Desktop (University to School Gradient) */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-6 bottom-12 w-1 bg-gradient-to-b from-cyan-500 via-emerald-400 to-orange-400 rounded-full opacity-40"></div>
            
            {/* Left Vertical Line for Mobile */}
            <div className="block md:hidden absolute left-6 top-6 bottom-12 w-1 bg-gradient-to-b from-cyan-500 via-emerald-400 to-orange-400 rounded-full opacity-40"></div>

            <div className="space-y-12">
              {educationData.map((item, index) => {
                const isEven = index % 2 === 0
                const isLast = index === educationData.length - 1

                return (
                  <div key={index} className="relative">
                    {/* Step Node Marker */}
                    <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 top-6 z-20 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.15 }}
                        className={`w-10 h-10 rounded-full bg-gradient-to-r ${item.color} p-0.5 shadow-lg flex items-center justify-center`}
                      >
                        <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                          <span className="text-xs font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                            0{index + 1}
                          </span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Timeline Content Card */}
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${isEven ? "" : "md:flex-row-reverse"}`}>
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        className={`pl-16 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12 md:text-left"}`}
                      >
                        <div className={`relative group p-6 rounded-2xl border transition-all duration-300 ${
                          darkMode 
                            ? "bg-gray-800/90 border-gray-700/80 hover:border-cyan-500/50 hover:shadow-cyan-500/10 hover:shadow-xl" 
                            : "bg-white border-gray-100 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/5"
                        }`}>
                          {/* Card Header Badge & Icon */}
                          <div className={`flex items-center gap-3 mb-4 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} p-0.5 shadow-md flex-shrink-0`}>
                              <div className="w-full h-full rounded-[10px] bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                                <img src={item.icon || "/placeholder.svg"} alt={item.title} className="w-8 h-8 rounded-full object-cover" />
                              </div>
                            </div>
                            <div>
                              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                                darkMode ? "bg-gray-700/70 text-gray-300" : "bg-gray-100 text-gray-600"
                              }`}>
                                <Calendar className="w-3 h-3 text-cyan-500" />
                                {item.date}
                              </span>
                            </div>
                          </div>

                          <h3 className={`text-xl font-bold mb-1 ${darkMode ? "text-white" : "text-gray-900"}`}>
                            {item.title}
                          </h3>
                          <p className={`text-sm mb-4 font-medium ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                            {item.institution}
                          </p>

                          {/* Grade Badge */}
                          <div className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold ${
                            darkMode 
                              ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30" 
                              : "bg-cyan-50 text-cyan-700 border border-cyan-200"
                          }`}>
                            <Award className="w-3.5 h-3.5" />
                            {item.grade}
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Animated Connecting Down-Arrow */}
                    {!isLast && (
                      <div className="flex justify-start pl-4 md:pl-0 md:justify-center my-4 relative z-10">
                        <motion.div
                          animate={{ y: [0, 5, 0] }}
                          transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                          className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-500 shadow-sm backdrop-blur-sm"
                        >
                          <ArrowDown className="w-4 h-4" />
                        </motion.div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Future Goals Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`p-8 rounded-3xl border ${
            darkMode ? "bg-gray-800/80 border-gray-700/60 shadow-2xl" : "bg-white border-gray-100 shadow-xl"
          }`}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <h3 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
                Future Aspirations
              </h3>
              <p className={`text-xs md:text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                Key milestones I am actively working toward
              </p>
            </div>
          </div>

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

      </div>
    </div>
  )
}

// Ordered: University Degree First, down to JSC
const educationData = [
  {
    date: "4 August 2026",
    title: "BSc in ETE",
    institution: "Rajshahi University of Engineering and Technology",
    grade: "CGPA : 3.76",
    icon: "/ruet.png",
    color: "from-cyan-500 to-blue-500"
  },
  {
    date: "2020",
    title: "HSC",
    institution: "Govt. Science College",
    grade: "GPA : 5.00",
    icon: "/gsc.png",
    color: "from-emerald-500 to-teal-500"
  },
  {
    date: "2018",
    title: "SSC",
    institution: "Chatkhil P.G. Govt. High School",
    grade: "GPA : 5.00",
    icon: "/sc1.jpg",
    color: "from-purple-500 to-pink-500"
  },
  {
    date: "2015",
    title: "JSC",
    institution: "Chatkhil P.G. Govt. High School",
    grade: "GPA : 5.00",
    icon: "/sc1.jpg",
    color: "from-orange-500 to-red-500"
  }
]

const GoalItem = ({ children, delay = 0, icon }) => {
  const { darkMode } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className={`flex items-start p-4 rounded-xl border transition-all duration-300 ${
        darkMode 
          ? "bg-gray-800/40 border-gray-700/50 hover:bg-gray-800 hover:border-cyan-500/40" 
          : "bg-gray-50/80 border-gray-100 hover:bg-white hover:shadow-md hover:border-cyan-200"
      }`}
    >
      <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-500 mt-0.5 mr-3.5 flex-shrink-0">
        {icon || <CheckCircle className="w-5 h-5" />}
      </div>
      <span className={`text-sm md:text-base leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
        {children}
      </span>
    </motion.div>
  )
}

export default AboutMe