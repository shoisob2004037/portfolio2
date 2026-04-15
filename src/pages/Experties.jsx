"use client";

import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Microscope,
  ExternalLink,
  Shield,
  Brain,
  Network,
  Cpu,
  Database,
} from "lucide-react";

const Expertise = () => {
  const { darkMode } = useTheme();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <div
      className={`min-h-screen ${darkMode ? "bg-gray-900" : "bg-gradient-to-b from-cyan-50 to-white"}`}
    >
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1
            className={`text-5xl font-bold ${darkMode ? "text-white" : "text-gray-900"} mb-4`}
          >
            My Expertise
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Technical skills, research interests, and tools I work with as a
            MERN Stack Developer and AI Researcher.
          </p>
        </motion.div>

        {/* Main Expertise Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          <ExpertiseCard
            icon={<Code className="w-12 h-12" />}
            title="Web Development"
            description="As a passionate MERN Stack Web Developer, I specialize in building scalable, responsive, and user-friendly web applications that solve real-world problems. With expertise in React.js, Node.js, Express.js, MongoDB, and modern frameworks like Tailwind CSS, I create seamless digital experiences. I am deeply dedicated to mastering full-stack development and aspire to integrate AI features into intelligent web platforms. My goal is to develop innovative web solutions that make technology accessible and easy-to-use for everyone, while continuously learning and evolving with emerging technologies."
            link="https://github.com/shoisob2004037"
            color="from-blue-500 to-cyan-500"
          />

          <ExpertiseCard
            icon={<Palette className="w-12 h-12" />}
            title="Graphics Design"
            description="I specialize in creating professional visual assets for research and technical projects. My work includes designing logos for research papers, creating comprehensive workflow diagrams, illustrating system architectures, and developing publication-ready figures for academic papers. Using Canva and other design tools, I transform complex technical concepts into clear, visually appealing representations. While I'm still growing in this field, I am enthusiastic about honing my design skills and pushing creative boundaries to produce impactful visuals that effectively communicate research findings and technical ideas."
            color="from-purple-500 to-pink-500"
          />

          <ExpertiseCard
            icon={<Microscope className="w-12 h-12" />}
            title="Research & AI/ML"
            description="I am deeply passionate about research in Machine Learning, Artificial Intelligence, and Cybersecurity. My research focuses on developing robust detection systems for web security threats, including XSS attack detection using advanced deep learning architectures (CNN-BiLSTM) and Large Language Models. I am actively exploring Autonomous Vehicles, Image Processing, and Cyber-Physical Systems. I dream of pursuing higher studies abroad to become a researcher in my field, contributing to cutting-edge AI research, and creating intelligent systems that enhance cybersecurity, autonomous navigation, and human-computer interaction."
            link="https://scholar.google.com/citations?user=HoeeAaIAAAAJ&hl=en"
            color="from-green-500 to-emerald-500"
          />
        </motion.div>

        {/* Research Interests */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2
            className={`text-3xl font-bold text-center mb-10 ${darkMode ? "text-white" : "text-gray-900"}`}
          >
            Research Interests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResearchCard
              icon={<Shield className="w-9 h-9" />}
              title="Cybersecurity"
              description="XSS detection, obfuscated attacks, web application security using ML/DL."
            />
            <ResearchCard
              icon={<Brain className="w-9 h-9" />}
              title="Machine Learning & AI"
              description="CNN, BiLSTM, LLMs, transfer learning for security applications."
            />
            <ResearchCard
              icon={<Network className="w-9 h-9" />}
              title="Autonomous Systems"
              description="Autonomous Vehicles, Cyber-Physical Systems, and real-time detection."
            />
            <ResearchCard
              icon={<Cpu className="w-9 h-9" />}
              title="Image Processing"
              description="Computer Vision, YOLO, face detection, sign language recognition."
            />
            <ResearchCard
              icon={<Database className="w-9 h-9" />}
              title="Data Science"
              description="Data preprocessing, feature extraction, and model training."
            />
          </div>
        </motion.div>

        {/* ====================== SOFTWARE & TOOLS ====================== */}
        <div>
          <h2
            className={`text-3xl font-bold text-center mb-12 ${darkMode ? "text-white" : "text-gray-900"}`}
          >
            Software & Tools
          </h2>

          <div className="space-y-16">
            <SkillSection
              title="Programming Languages"
              skills={[
                { name: "C", icon: "/c.png" },
                { name: "C++", icon: "/c++.png" },
                { name: "Python", icon: "/Python.png" },
                { name: "JavaScript", iconClass: "fab fa-js" },
                { name: "HTML5", iconClass: "fab fa-html5" },
                { name: "CSS3", iconClass: "fab fa-css3-alt" },
                { name: "MATLAB", icon: "/MATLAB-Logo.png" },
                { name: "LaTeX", icon: "/latex-logo.png" },
                { name: "SQL", iconClass: "fas fa-database" },
              ]}
            />

            <SkillSection
              title="Machine Learning & AI"
              skills={[
                { name: "TensorFlow", icon: "" },
                { name: "PyTorch", icon: "" },
                { name: "Keras", icon: "" },
                { name: "OpenCV", icon: "" },
                { name: "YOLO", icon: "" },
                { name: "Scikit-learn", icon: "" },
                { name: "Pandas", icon: "" },
                { name: "NumPy", icon: "" },
                { name: "Hugging Face", icon: "" },
              ]}
            />

            <SkillSection
              title="Web Development"
              skills={[
                { name: "React", iconClass: "fab fa-react" },
                { name: "Node.js", icon: "/node.png" },
                { name: "Express.js", icon: "/express.png" },
                { name: "MongoDB", icon: "/mongo.png" },
                { name: "Tailwind CSS", icon: "/tail.png" },
                { name: "Bootstrap", iconClass: "fab fa-bootstrap" },
                { name: "Firebase", icon: "/fire.webp" },
                { name: "REST API", iconClass: "fas fa-plug" },
              ]}
            />

            <SkillSection
              title="Development Tools"
              skills={[
                { name: "VS Code", icon: "/visual.png" },
                { name: "Git", iconClass: "fab fa-git-alt" },
                { name: "GitHub", iconClass: "fab fa-github" },
                { name: "Postman", icon: "/postman.webp" },
                { name: "Jupyter", icon: "/Jupyter_logo.svg.png" },
                {
                  name: "Google Colab",
                  icon: "/Google_Colaboratory_SVG_Logo.svg.png",
                },
                { name: "Canva", icon: "/canva.png" },
              ]}
            />

            <SkillSection
              title="Simulation & Design"
              skills={[
                { name: "AutoCAD", icon: "/Autocad-Logo.png" },
                { name: "MATLAB Simulink", icon: "/simulink.png" },
                { name: "PSpice", icon: "" },
                { name: "MS Visio", icon: "/visio.png" },
              ]}
            />

            <SkillSection
              title="Office & Documentation"
              skills={[
                { name: "Microsoft Word", icon: "/word.png" },
                { name: "Microsoft Excel", icon: "/Excel.png" },
                { name: "Microsoft PowerPoint", icon: "/pp.png" },
                { name: "Notion", icon: "/notion.png" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

/* ====================== COMPONENTS ====================== */

const ExpertiseCard = ({ icon, title, description, link, color }) => {
  const { darkMode } = useTheme();
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`rounded-2xl overflow-hidden shadow-xl border ${
        darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
      }`}
    >
      <div
        className={`h-28 bg-gradient-to-r ${color} flex items-center justify-center`}
      >
        <div className="text-white">{icon}</div>
      </div>
      <div className="p-8 text-center">
        <h3
          className={`text-2xl font-bold mb-4 ${darkMode ? "text-cyan-400" : "text-cyan-700"}`}
        >
          {title}
        </h3>
        <p className={`mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          {description}
        </p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full transition-all"
          >
            Explore <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const ResearchCard = ({ icon, title, description }) => {
  const { darkMode } = useTheme();
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`p-6 rounded-2xl border ${
        darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
      }`}
    >
      <div className="text-cyan-500 mb-4">{icon}</div>
      <h3
        className={`text-xl font-semibold mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}
      >
        {title}
      </h3>
      <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
        {description}
      </p>
    </motion.div>
  );
};

const SkillSection = ({ title, skills }) => {
  const { darkMode } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <h3
        className={`text-2xl font-semibold text-center mb-8 flex items-center justify-center gap-3 ${darkMode ? "text-cyan-400" : "text-cyan-700"}`}
      >
        {title}
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -4 }}
            className={`p-5 rounded-2xl text-center border transition-all duration-300 flex flex-col items-center justify-center min-h-[140px] ${
              darkMode
                ? "bg-gray-800 border-gray-700 hover:bg-gray-700"
                : "bg-white border-gray-200 hover:bg-cyan-50"
            }`}
          >
            {skill.icon ? (
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-14 h-14 mx-auto mb-3 object-contain"
              />
            ) : skill.iconClass ? (
              <i className={`${skill.iconClass} text-4xl mb-3 text-cyan-500`} />
            ) : (
              <div className="text-4xl mb-3">⚙️</div>
            )}
            <p className="font-medium text-sm sm:text-base">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Expertise;
