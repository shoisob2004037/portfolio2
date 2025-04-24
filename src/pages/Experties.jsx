"use client"

import { useTheme } from "../context/ThemeContext"
import { motion } from "framer-motion"
import { Code, Palette, Camera, ExternalLink, Cpu, PenToolIcon as Tool } from 'lucide-react'

const Expertise = () => {
  const { darkMode } = useTheme()

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
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
              My Expertise
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></span>
            </span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Discover my professional skills and areas of expertise that I've developed throughout my journey.
          </p>
        </motion.div>

        {/* Expertise Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <ExpertiseCard
            icon={<Code className="w-12 h-12" />}
            title="Web Development"
            description="As a new front-end developer, I have honed my skills in HTML, CSS, and JavaScript, allowing me to build responsive and dynamic web pages. I am proficient in using frameworks like Bootstrap and Tailwind CSS. Additionally, I am deeply dedicated to mastering React.js, a powerful JavaScript library, to build scalable and efficient user interfaces."
            link="https://github.com/shoisob2004037?tab=repositories"
            color="from-blue-500 to-cyan-500"
          />

          <ExpertiseCard
            icon={<Palette className="w-12 h-12" />}
            title="Graphics Design"
            description="As a beginner in graphics design, I am eager to explore and learn the intricacies of this creative field. While I may be at the initial stages of my journey, I am enthusiastic about honing my skills, experimenting with various design tools and techniques, and pushing the boundaries of my creativity. I am simply able to design in Canva. As I am not expert I just did simple default designs and customised as I needed."
            color="from-purple-500 to-pink-500"
          />

          <ExpertiseCard
            icon={<Camera className="w-12 h-12" />}
            title="Photography"
            description="Photography isn't just a hobby; it's my passion. Through the lens, I capture moments, emotions, and stories, expressing my creativity and unique perspective. It's not just about preserving moments; it's about encapsulating emotions, stories, and experiences through the lens of my camera."
            link="https://shoisob2004037.github.io/photo-slider-portfolio-/"
            color="from-amber-500 to-orange-500"
          />
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-center text-3xl font-bold mb-8">
            <span className={`${darkMode ? "text-cyan-400" : "text-cyan-600"} relative inline-block`}>
              Software & Tools
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></span>
            </span>
          </h2>

          {/* Languages */}
          <SkillSection
            title="Languages"
            icon={<Code className="w-6 h-6" />}
            skills={[
              { name: "C", icon: "/c.png", iconWidth: "w-16" },
              { name: "C++", icon: "/c++.png", iconWidth: "w-24" },
              { name: "Python", icon: "/Python.png", iconWidth: "w-24" },
              { name: "HTML5", icon: "/html5.png", iconWidth: "w-16" },
              { name: "CSS3", icon: "/css.png", iconWidth: "w-16" },
              { name: "JavaScript", icon: "", iconClass: "fab fa-js text-5xl" },
              { name: "MATLAB", icon: "/MATLAB-Logo.png", iconWidth: "w-24" },
              { name: "LaTeX", icon: "/latex-logo.png", iconWidth: "w-20" },
              { name: "Mathematica", icon: "/math.png", iconWidth: "w-16" },
            ]}
          />

          {/* Frameworks */}
          <SkillSection
            title="Frameworks"
            icon={<Code className="w-6 h-6" />}
            skills={[
              { name: "Bootstrap", icon: "", iconClass: "fab fa-bootstrap text-5xl" },
              { name: "Tailwind CSS", icon: "/Tailwind_CSS_Logo.svg.png", iconWidth: "w-24" },
              { name: "React", icon: "", iconClass: "fab fa-react text-5xl" },
            ]}
          />

          {/* Tools */}
          <SkillSection
            title="Tools"
            icon={<Tool className="w-6 h-6" />}
            skills={[
              { name: "VS Code", icon: "/visual-studio-code-4096.png", iconWidth: "w-16" },
              { name: "Git", icon: "", iconClass: "fab fa-git-alt text-5xl" },
              { name: "GitHub", icon: "/GitHub-Symbol.png", iconWidth: "w-24" },
              { name: "Canva", icon: "/canva.png", iconWidth: "w-12" },
              { name: "Firebase", icon: "/Firebase-logo.webp", iconWidth: "w-10" },
              { name: "MS Word", icon: "/word.png", iconWidth: "w-16" },
              { name: "MS Excel", icon: "/Excel.png", iconWidth: "w-24" },
              { name: "MS PowerPoint", icon: "/pp.png", iconWidth: "w-16" },
            ]}
          />

          {/* Simulation Software */}
          <SkillSection
            title="Simulation Software"
            icon={<Cpu className="w-6 h-6" />}
            skills={[
              { name: "AutoCAD", icon: "/Autocad-Logo.png", iconWidth: "w-24" },
              { name: "PSpice", icon: "", iconClass: "fas fa-microchip text-5xl" },
              { name: "MATLAB Simulink", icon: "/simulink.png", iconWidth: "w-10" },
              { name: "MS Visio", icon: "/visio.png", iconWidth: "w-16" },
            ]}
          />
        </motion.div>
      </div>
    </div>
  )
}

const ExpertiseCard = ({ icon, title, description, link, color }) => {
  const { darkMode } = useTheme()

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{ 
        y: -10,
        boxShadow: darkMode 
          ? "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4)" 
          : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      className={`rounded-xl overflow-hidden transition-all duration-300 ${
        darkMode
          ? "bg-gray-800 border border-gray-700"
          : "bg-white border border-gray-200"
      }`}
    >
      <div className={`h-24 bg-gradient-to-r ${color || "from-cyan-500 to-blue-500"} flex items-center justify-center`}>
        <div className="text-white">{icon}</div>
      </div>

      <div className="p-6">
        <h3 className={`text-xl font-bold mb-4 text-center ${darkMode ? "text-cyan-400" : "text-cyan-600"}`}>{title}</h3>
        <hr className="w-1/4 mx-auto border-t-2 border-cyan-500 mb-4" />
        <p className="text-center mb-6">{description}</p>

        {link && (
          <div className="flex justify-center">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
                darkMode
                  ? "bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800"
                  : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
              } text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
            >
              Explore More
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </motion.div>
  )
}

const SkillSection = ({ title, icon, skills }) => {
  const { darkMode } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <h3 className={`text-xl font-semibold text-center mb-6 flex items-center justify-center gap-2 ${darkMode ? "text-cyan-400" : "text-cyan-600"}`}>
        {icon}
        {title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ 
              y: -5, 
              scale: 1.05,
              boxShadow: darkMode 
                ? "0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1)" 
                : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
            }}
            className={`skill-card ${
              darkMode 
                ? "bg-gray-800 hover:bg-gray-750 border border-gray-700" 
                : "bg-white hover:bg-gray-50 border border-gray-200"
            } rounded-xl p-4 flex flex-col items-center justify-center transition-all duration-300`}
          >
            {skill.icon ? (
              <img
                src={skill.icon || "/placeholder.svg"}
                alt={skill.name}
                className={`${skill.iconWidth} mx-auto mb-3`}
              />
            ) : (
              <i className={`${skill.iconClass} mb-3 text-cyan-500`}></i>
            )}
            <h4 className="text-lg text-center">{skill.name}</h4>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Expertise

