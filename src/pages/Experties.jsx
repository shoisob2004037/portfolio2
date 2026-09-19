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
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-label mb-3 inline-flex">
            <Brain className="w-3.5 h-3.5" />
            <span>Expertise</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            My Expertise
          </h1>
          <div className="academic-divider"></div>
          <p className="text-base max-w-2xl mx-auto text-[var(--text-secondary)] mt-4">
            Technical skills, research interests, and tools I work with as a
            MERN Stack Developer and AI Researcher.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          <ExpertiseCard
            icon={<Code className="w-8 h-8" />}
            title="Web Development"
            description="As a passionate MERN Stack Web Developer, I specialize in building scalable, responsive, and user-friendly web applications that solve real-world problems. With expertise in React.js, Node.js, Express.js, MongoDB, and modern frameworks like Tailwind CSS, I create seamless digital experiences. I am deeply dedicated to mastering full-stack development and aspire to integrate AI features into intelligent web platforms. My goal is to develop innovative web solutions that make technology accessible and easy-to-use for everyone, while continuously learning and evolving with emerging technologies."
            link="https://github.com/shoisob2004037"
          />
          <ExpertiseCard
            icon={<Palette className="w-8 h-8" />}
            title="Graphics Design"
            description="I specialize in creating professional visual assets for research and technical projects. My work includes designing logos for research papers, creating comprehensive workflow diagrams, illustrating system architectures, and developing publication-ready figures for academic papers. Using Canva and other design tools, I transform complex technical concepts into clear, visually appealing representations. While I'm still growing in this field, I am enthusiastic about honing my design skills and pushing creative boundaries to produce impactful visuals that effectively communicate research findings and technical ideas."
          />
          <ExpertiseCard
            icon={<Microscope className="w-8 h-8" />}
            title="Research & AI/ML"
            description="I am deeply passionate about research in Machine Learning, Artificial Intelligence, and Cybersecurity. My research focuses on developing robust detection systems for web security threats, including XSS attack detection using advanced deep learning architectures (CNN-BiLSTM) and Large Language Models. I am actively exploring Autonomous Vehicles, Image Processing, and Cyber-Physical Systems. I dream of pursuing higher studies abroad to become a researcher in my field, contributing to cutting-edge AI research, and creating intelligent systems that enhance cybersecurity, autonomous navigation, and human-computer interaction."
            link="https://scholar.google.com/citations?user=HoeeAaIAAAAJ&hl=en"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-center mb-10 text-[var(--text-primary)]">
            Research Interests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ResearchCard
              icon={<Shield className="w-7 h-7" />}
              title="Cybersecurity"
              description="XSS detection, obfuscated attacks, web application security using ML/DL."
            />
            <ResearchCard
              icon={<Brain className="w-7 h-7" />}
              title="Machine Learning & AI"
              description="CNN, BiLSTM, LLMs, transfer learning for security applications."
            />
            <ResearchCard
              icon={<Network className="w-7 h-7" />}
              title="Autonomous Systems"
              description="Autonomous Vehicles, Cyber-Physical Systems, and real-time detection."
            />
            <ResearchCard
              icon={<Cpu className="w-7 h-7" />}
              title="Image Processing"
              description="Computer Vision, YOLO, face detection, sign language recognition."
            />
            <ResearchCard
              icon={<Database className="w-7 h-7" />}
              title="Data Science"
              description="Data preprocessing, feature extraction, and model training."
            />
          </div>
        </motion.div>

        <div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-center mb-12 text-[var(--text-primary)]">
            Software & Tools
          </h2>

          <div className="space-y-12">
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

const ExpertiseCard = ({ icon, title, description, link }) => (
  <motion.div whileHover={{ y: -5 }} className="academic-card p-6">
    <div className="w-14 h-14 rounded-lg bg-[var(--accent-light)] text-[var(--accent)] flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="font-serif text-lg font-bold mb-3 text-[var(--text-primary)]">
      {title}
    </h3>
    <p className="text-sm text-[var(--text-secondary)] mb-5 leading-relaxed">
      {description}
    </p>
    {link && (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-hover)]"
      >
        Explore <ExternalLink className="w-3.5 h-3.5" />
      </a>
    )}
  </motion.div>
);

const ResearchCard = ({ icon, title, description }) => (
  <div className="academic-card p-5">
    <div className="text-[var(--accent)] mb-3">{icon}</div>
    <h3 className="font-serif text-base font-semibold mb-2 text-[var(--text-primary)]">
      {title}
    </h3>
    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
      {description}
    </p>
  </div>
);

const SkillSection = ({ title, skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-10"
  >
    <h3 className="font-serif text-lg font-semibold text-center mb-6 text-[var(--accent)]">
      {title}
    </h3>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="academic-card p-4 text-center flex flex-col items-center justify-center min-h-[120px]"
        >
          {skill.icon ? (
            <img
              src={skill.icon}
              alt={skill.name}
              loading="lazy"
              className="w-12 h-12 mx-auto mb-2 object-contain"
            />
          ) : skill.iconClass ? (
            <i
              className={`${skill.iconClass} text-3xl mb-2 text-[var(--accent)]`}
            />
          ) : (
            <div className="text-3xl mb-2">⚙️</div>
          )}
          <p className="text-xs sm:text-sm font-medium text-[var(--text-primary)]">
            {skill.name}
          </p>
        </div>
      ))}
    </div>
  </motion.div>
);

export default Expertise;
