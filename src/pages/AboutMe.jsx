"use client";

import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import {
  GraduationCap, Target, Microscope, BookOpen, Users, Globe,
  Heart, CheckCircle, Calendar, ArrowDown, Award
} from "lucide-react";

const AboutMe = () => {
  const { darkMode } = useTheme();

  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Educational Background */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="section-label mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Pathway</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
              Educational Background
            </h2>
            <div className="academic-divider"></div>
            <p className="mt-4 text-sm md:text-base text-[var(--text-secondary)]">
              My academic timeline from university level down to school qualifications
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-6 bottom-12 w-0.5 bg-[var(--border-strong)]"></div>
            <div className="block md:hidden absolute left-6 top-6 bottom-12 w-0.5 bg-[var(--border-strong)]"></div>

            <div className="space-y-12">
              {educationData.map((item, index) => {
                const isEven = index % 2 === 0;
                const isLast = index === educationData.length - 1;
                return (
                  <div key={index} className="relative">
                    <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 top-6 z-20 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.15 }}
                        className="w-10 h-10 rounded-full bg-[var(--bg-elevated)] border-2 border-[var(--accent)] shadow-md flex items-center justify-center"
                      >
                        <span className="text-xs font-serif font-bold text-[var(--accent)]">
                          0{index + 1}
                        </span>
                      </motion.div>
                    </div>

                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${isEven ? "" : "md:flex-row-reverse"}`}>
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        className={`pl-16 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12 md:text-left"}`}
                      >
                        <div className="academic-card">
                          <div className={`flex items-center gap-3 mb-4 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                            <div className="w-12 h-12 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center overflow-hidden flex-shrink-0">
                              <img src={item.icon || "/placeholder.svg"} alt={item.title} className="w-9 h-9 rounded object-cover" />
                            </div>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[var(--bg-tertiary)] text-[var(--text-muted)]">
                              <Calendar className="w-3 h-3 text-[var(--accent)]" />
                              {item.date}
                            </span>
                          </div>

                          <h3 className="font-serif text-lg font-bold mb-1 text-[var(--text-primary)]">
                            {item.title}
                          </h3>
                          <p className="text-sm mb-4 font-medium text-[var(--text-secondary)]">
                            {item.institution}
                          </p>

                          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold bg-[var(--accent-light)] text-[var(--accent)] border border-[var(--border-color)]">
                            <Award className="w-3.5 h-3.5" />
                            {item.grade}
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {!isLast && (
                      <div className="flex justify-start pl-4 md:pl-0 md:justify-center my-4 relative z-10">
                        <motion.div
                          animate={{ y: [0, 5, 0] }}
                          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                          className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--accent-light)] border border-[var(--border-color)] text-[var(--accent)]"
                        >
                          <ArrowDown className="w-4 h-4" />
                        </motion.div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Future Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="academic-card p-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-lg bg-[var(--accent-light)] text-[var(--accent)] border border-[var(--border-color)]">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[var(--text-primary)]">
                Future Aspirations
              </h3>
              <p className="text-xs md:text-sm text-[var(--text-muted)]">
                Key milestones I am actively working toward
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <GoalItem delay={0.1} icon={<Microscope className="w-4 h-4" />}>
              Become a renowned researcher in the fields of Cybersecurity, AI, and Machine Learning
            </GoalItem>
            <GoalItem delay={0.2} icon={<Globe className="w-4 h-4" />}>
              Pursue higher studies abroad to expand research capabilities and global perspective
            </GoalItem>
            <GoalItem delay={0.3} icon={<BookOpen className="w-4 h-4" />}>
              Contribute to cutting-edge research in Autonomous Vehicles and Cyber-Physical Systems
            </GoalItem>
            <GoalItem delay={0.4} icon={<Users className="w-4 h-4" />}>
              Enter the teaching profession to inspire and mentor the next generation of technologists
            </GoalItem>
            <GoalItem delay={0.5} icon={<GraduationCap className="w-4 h-4" />}>
              Complete PhD and establish a research lab focused on AI-driven security solutions
            </GoalItem>
            <GoalItem delay={0.6} icon={<Heart className="w-4 h-4" />}>
              Bridge the gap between academia and industry by developing real-world AI applications
            </GoalItem>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const educationData = [
  { date: "4 August 2026", title: "BSc in ETE", institution: "Rajshahi University of Engineering and Technology", grade: "CGPA : 3.76", icon: "/ruet.png" },
  { date: "2020", title: "HSC", institution: "Govt. Science College", grade: "GPA : 5.00", icon: "/gsc.png" },
  { date: "2018", title: "SSC", institution: "Chatkhil P.G. Govt. High School", grade: "GPA : 5.00", icon: "/sc1.jpg" },
  { date: "2015", title: "JSC", institution: "Chatkhil P.G. Govt. High School", grade: "GPA : 5.00", icon: "/sc1.jpg" },
];

const GoalItem = ({ children, delay = 0, icon }) => (
  <motion.div
    initial={{ opacity: 0, x: -15 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    className="flex items-start p-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] hover:border-[var(--accent)] transition-all duration-300"
  >
    <div className="p-2 rounded-md bg-[var(--accent-light)] text-[var(--accent)] mt-0.5 mr-3 flex-shrink-0">
      {icon || <CheckCircle className="w-4 h-4" />}
    </div>
    <span className="text-sm md:text-base leading-relaxed text-[var(--text-secondary)]">
      {children}
    </span>
  </motion.div>
);

export default AboutMe;