"use client"

import { useTheme } from "../context/ThemeContext"
import { useState } from "react"

const AboutMe = () => {
  const { darkMode } = useTheme()
  const [activeTab, setActiveTab] = useState("skills")

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className={`relative rounded-2xl overflow-hidden mb-16 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20"></div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8">
          <div className="order-2 md:order-1">
            <h1 className={`text-4xl font-bold mb-6 ${darkMode ? "text-cyan-400" : "text-cyan-600"}`}>About Me</h1>
            <p className="text-lg leading-relaxed">
              "I am <span className="text-cyan-500 font-bold">Mahadi Hasan Shaisob</span>, an Electronics and
              Telecommunication Engineering (ETE) student and a front-end web developer with a passion for building
              user-friendly websites. My future ambition is to become a full-stack web developer. I also dream of
              pursuing higher education abroad. In my free time, I enjoy playing, traveling, and capturing moments
              through photography, which is my true passion."
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#education"
                onClick={() => setActiveTab("education")}
                className={`px-5 py-2 rounded-full transition-colors duration-300 ${
                  activeTab === "education"
                    ? darkMode
                      ? "bg-cyan-600 text-white"
                      : "bg-cyan-500 text-white"
                    : darkMode
                      ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                <i className="fas fa-graduation-cap mr-2"></i>
                Education
              </a>
              <a
                href="#skills"
                onClick={() => setActiveTab("skills")}
                className={`px-5 py-2 rounded-full transition-colors duration-300 ${
                  activeTab === "skills"
                    ? darkMode
                      ? "bg-cyan-600 text-white"
                      : "bg-cyan-500 text-white"
                    : darkMode
                      ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                <i className="fas fa-code mr-2"></i>
                Skills
              </a>
              <a
                href="#interests"
                onClick={() => setActiveTab("interests")}
                className={`px-5 py-2 rounded-full transition-colors duration-300 ${
                  activeTab === "interests"
                    ? darkMode
                      ? "bg-cyan-600 text-white"
                      : "bg-cyan-500 text-white"
                    : darkMode
                      ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                <i className="fas fa-heart mr-2"></i>
                Interests
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 blur-lg opacity-30 transform scale-110"></div>
              <img
                src="/profile2.jpg"
                alt="Mahadi Hasan Shaisob"
                className="w-64 h-64 rounded-full object-cover border-4 border-cyan-500 relative z-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-4xl mx-auto">
        {/* Education Tab */}
        <div id="education" className={`${activeTab === "education" ? "block" : "hidden"}`}>
          <h2 className={`text-3xl font-bold text-center mb-8 ${darkMode ? "text-cyan-400" : "text-cyan-600"}`}>
            Educational Background
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
            />
          </div>
        </div>

        {/* Skills Tab */}
        <div id="skills" className={`${activeTab === "skills" ? "block" : "hidden"}`}>
          <h2 className={`text-3xl font-bold text-center mb-8 ${darkMode ? "text-cyan-400" : "text-cyan-600"}`}>
            My Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`p-6 rounded-xl ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg`}>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <i className="fas fa-code text-cyan-500 mr-2"></i>
                Web Development
              </h3>

              <SkillBar skill="HTML5" percentage={90} />
              <SkillBar skill="CSS3" percentage={85} />
              <SkillBar skill="JavaScript" percentage={80} />
              <SkillBar skill="React" percentage={75} />
              <SkillBar skill="Bootstrap" percentage={85} />
              <SkillBar skill="Tailwind CSS" percentage={80} />
            </div>

            <div className={`p-6 rounded-xl ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg`}>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <i className="fas fa-microchip text-cyan-500 mr-2"></i>
                Engineering Skills
              </h3>

              <SkillBar skill="Arduino" percentage={85} />
              <SkillBar skill="Circuit Design" percentage={80} />
              <SkillBar skill="MATLAB" percentage={75} />
              <SkillBar skill="C/C++" percentage={70} />
              <SkillBar skill="Python" percentage={65} />
              <SkillBar skill="AutoCAD" percentage={60} />
            </div>
          </div>

          <div className={`mt-8 p-6 rounded-xl ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg`}>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <i className="fas fa-tools text-cyan-500 mr-2"></i>
              Tools & Software
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: "VS Code", icon: "fas fa-code" },
                { name: "Git", icon: "fab fa-git-alt" },
                { name: "GitHub", icon: "fab fa-github" },
                { name: "Firebase", icon: "fas fa-database" },
                { name: "Photoshop", icon: "fas fa-image" },
                { name: "MS Office", icon: "fas fa-file-word" },
                { name: "Canva", icon: "fas fa-palette" },
                { name: "PSpice", icon: "fas fa-microchip" },
                { name: "Simulink", icon: "fas fa-project-diagram" },
                { name: "MS Visio", icon: "fas fa-sitemap" },
                { name: "LaTeX", icon: "fas fa-subscript" },
                { name: "Mathematica", icon: "fas fa-square-root-alt" },
              ].map((tool, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center justify-center p-4 rounded-lg ${
                    darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"
                  } transition-colors duration-300`}
                >
                  <i className={`${tool.icon} text-2xl text-cyan-500 mb-2`}></i>
                  <span className="text-sm text-center">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interests Tab */}
        <div id="interests" className={`${activeTab === "interests" ? "block" : "hidden"}`}>
          <h2 className={`text-3xl font-bold text-center mb-8 ${darkMode ? "text-cyan-400" : "text-cyan-600"}`}>
            My Interests
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InterestCard
              title="Photography"
              icon="fas fa-camera"
              description="Photography isn't just a hobby for me, it's a passion that ignites my soul. I love capturing moments, emotions, and stories through my lens."
              darkMode={darkMode}
              color="from-pink-500 to-rose-500"
            />

            <InterestCard
              title="Reading"
              icon="fas fa-book-open"
              description="Books fuel my thoughts and broaden my horizons. I am particularly interested in Islamic books that challenge my perspective and deepen my understanding."
              darkMode={darkMode}
              color="from-amber-500 to-orange-500"
            />

            <InterestCard
              title="Traveling"
              icon="fas fa-globe"
              description="Exploring new places fills me with joy and curiosity. Each journey adds a new chapter to my life, whether it's the busy streets of a city or the peaceful solitude of nature."
              darkMode={darkMode}
              color="from-emerald-500 to-green-500"
            />
          </div>

          <div className={`mt-8 p-6 rounded-xl ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg`}>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <i className="fas fa-star text-cyan-500 mr-2"></i>
              Future Goals
            </h3>

            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <span>Become a proficient full-stack web developer with expertise in modern frameworks</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <span>Pursue higher education abroad to expand my knowledge and cultural horizons</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <span>
                  Build innovative projects that combine my engineering background with web development skills
                </span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <span>Develop a professional photography portfolio showcasing my unique perspective</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <span>Contribute to open-source projects and give back to the developer community</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

const TimelineItem = ({ position, date, title, institution, grade, icon, darkMode }) => {
  return (
    <div className={`flex items-center mb-16 ${position === "left" ? "justify-end" : "justify-start"}`}>
      {/* Timeline Icon */}
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center z-10 border-4 ${
          darkMode ? "border-gray-800" : "border-white"
        }`}
      >
        <img src={icon || "/placeholder.svg"} alt={title} className="w-12 h-12 rounded-full object-cover" />
      </div>

      {/* Content */}
      <div className={`w-5/12 ${position === "right" ? "ml-8" : "mr-8"}`}>
        <div
          className={`p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
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
        </div>
      </div>
    </div>
  )
}

const SkillBar = ({ skill, percentage }) => {
  const { darkMode } = useTheme()

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span>{skill}</span>
        <span>{percentage}%</span>
      </div>
      <div className={`w-full h-2 rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}>
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  )
}

const InterestCard = ({ title, icon, description, darkMode, color }) => {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 ${
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
    </div>
  )
}

export default AboutMe
