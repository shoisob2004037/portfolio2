"use client"

import { useTheme } from "../context/ThemeContext"

const Expertise = () => {
  const { darkMode } = useTheme()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className={`text-3xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>Expertise</h1>
      </div>

      {/* Expertise Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <ExpertiseCard
          icon={<i className="fas fa-code text-4xl"></i>}
          title="Web Development"
          description="As a new front-end developer, I have honed my skills in HTML, CSS, and JavaScript, allowing me to build responsive and dynamic web pages. I am proficient in using frameworks like Bootstrap and Tailwind CSS. Additionally, I am deeply dedicated to mastering React.js, a powerful JavaScript library, to build scalable and efficient user interfaces."
          link="https://github.com/shoisob2004037?tab=repositories"
        />

        <ExpertiseCard
          icon={<i className="fas fa-palette text-4xl"></i>}
          title="Graphics Design"
          description="As a beginner in graphics design, I am eager to explore and learn the intricacies of this creative field. While I may be at the initial stages of my journey, I am enthusiastic about honing my skills, experimenting with various design tools and techniques, and pushing the boundaries of my creativity. I am simply able to design in Canva. As I am not expert I just did simple default designs and customised as I needed."
        />

        <ExpertiseCard
          icon={<i className="fas fa-camera text-4xl"></i>}
          title="Photography"
          description="Photography isn't just a hobby; it's my passion. Through the lens, I capture moments, emotions, and stories, expressing my creativity and unique perspective. It's not just about preserving moments; it's about encapsulating emotions, stories, and experiences through the lens of my camera."
          link="https://shoisob2004037.github.io/photo-slider-portfolio-/"
        />
      </div>

      {/* Skills Section */}
      <div className="mb-16">
        <h2 className="text-center text-2xl font-bold mb-8">
          <span className={`${darkMode ? "text-cyan-400" : "text-cyan-600"}`}>Software & Tools</span>
        </h2>

        {/* Languages */}
        <SkillSection
          title="Languages"
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
          skills={[
            { name: "Bootstrap", icon: "", iconClass: "fab fa-bootstrap text-5xl" },
            { name: "Tailwind CSS", icon: "/Tailwind_CSS_Logo.svg.png", iconWidth: "w-24" },
            { name: "React", icon: "", iconClass: "fab fa-react text-5xl" },
          ]}
        />

        {/* Tools */}
        <SkillSection
          title="Tools"
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
          skills={[
            { name: "AutoCAD", icon: "/Autocad-Logo.png", iconWidth: "w-24" },
            { name: "PSpice", icon: "", iconClass: "fas fa-microchip text-5xl" },
            { name: "MATLAB Simulink", icon: "/simulink.png", iconWidth: "w-10" },
            { name: "MS Visio", icon: "/visio.png", iconWidth: "w-16" },
          ]}
        />
      </div>
    </div>
  )
}

const ExpertiseCard = ({ icon, title, description, link }) => {
  const { darkMode } = useTheme()

  return (
    <div
      className={`rounded-xl p-6 transition-all duration-300 ${
        darkMode
          ? "bg-gray-800 shadow-lg border border-gray-700 hover:border-cyan-500"
          : "bg-white shadow-lg border border-gray-200 hover:border-cyan-500"
      }`}
    >
      <div className="flex flex-col items-center">
        <div className={`mb-4 text-cyan-500`}>{icon}</div>
        <h3 className={`text-xl font-bold mb-2 text-cyan-500`}>{title}</h3>
        <hr className="w-1/4 border-t-2 border-cyan-500 mb-4" />
        <p className="text-center mb-4">{description}</p>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-auto inline-block px-4 py-2 rounded-lg ${
              darkMode ? "bg-cyan-600 hover:bg-cyan-700" : "bg-cyan-500 hover:bg-cyan-600"
            } text-white transition-colors duration-300`}
          >
            Explore More
          </a>
        )}
      </div>
    </div>
  )
}

const SkillSection = ({ title, skills }) => {
  const { darkMode } = useTheme()

  return (
    <div className="mb-12">
      <h3 className={`text-xl font-semibold text-center mb-6 ${darkMode ? "text-cyan-400" : "text-cyan-600"}`}>
        {title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill.icon ? (
              <img
                src={skill.icon || "/placeholder.svg"}
                alt={skill.name}
                className={`${skill.iconWidth} mx-auto mb-2`}
              />
            ) : (
              <i className={`${skill.iconClass} mb-2`}></i>
            )}
            <h4 className="text-lg">{skill.name}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Expertise
