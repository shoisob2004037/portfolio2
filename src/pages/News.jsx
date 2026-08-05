// News.jsx - Academic & Research Updates Feed

"use client";

import { useState, useMemo } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  Newspaper,
  Calendar,
  ExternalLink,
  Search,
  Award,
  FileText,
  Megaphone,
  CheckCircle2,
  GraduationCap,
  Presentation,
  BookOpen,
} from "lucide-react";

// Academic and Research News Data (Organized Chronologically: Newest to Oldest)
const initialNewsData = [
  {
    id: "news-12",
    date: "2026-08-04",
    formattedDate: "August 04, 2026",
    title: "B.Sc. Degree Results Published with Top Honors",
    type: "Academic Achievement",
    badgeColor: "from-amber-500 to-orange-600",
    description:
      "Successfully completed B.Sc. in Electronics and Telecommunication Engineering (ETE) with an overall CGPA of 3.76/4.00, securing 5th rank in the department. Achieved an outstanding SGPA of 3.96/4.00 (2nd rank in department) in the final semester. My last 4 semesters' SGPA were 3.96, 3.96, 3.98, and 3.95 respectively, reflecting consistent academic excellence throughout the undergraduate program.",
    tags: ["Graduation", "Academic Excellence", "RUET", "ETE"],
  },
  {
    id: "news-11",
    date: "2026-08-02",
    formattedDate: "August 02, 2026",
    title: "Successfully Defended Undergraduate Thesis",
    type: "Thesis Defense",
    badgeColor: "from-emerald-500 to-teal-600",
    description:
      'Officially defended undergraduate thesis titled "XSS-SafeNet: A Bidirectional LSTM Architecture for High-Precision Cross-Site Scripting Detection", marking the successful culmination of undergraduate research in AI and web security.',
    tags: ["Thesis Defense", "Cybersecurity", "Deep Learning", "XSS"],
  },
  {
    id: "news-10",
    date: "2026-07-21",
    formattedDate: "July 21, 2026",
    title: "Paper Accepted at IEEE SPICSCON 2026",
    type: "Paper Acceptance",
    badgeColor: "from-cyan-500 to-blue-600",
    description:
      'Research paper titled "Defense Against Adversarial Attacks on YOLO-based Object Detection for Autonomous Vehicles Using Bangladeshi Occluded Road Dataset" has been officially accepted for presentation at IEEE SPICSCON 2026.',
    tags: ["Adversarial Machine Learning", "Autonomous Vehicles", "YOLO", "IEEE"],
  },
  {
    id: "news-9",
    date: "2026-07-21",
    formattedDate: "July 21, 2026",
    title: "Sensor Manipulation Attack Research Accepted at IEEE SPICSCON 2026",
    type: "Paper Acceptance",
    badgeColor: "from-cyan-500 to-blue-600",
    description:
      'Co-authored paper "RFAT: Deep Learning-Based Detection of Sensor Manipulation Attacks in Autonomous Vehicles" officially accepted for presentation at IEEE SPICSCON 2026.',
    tags: ["Autonomous Vehicles", "Sensor Security", "Deep Learning", "IEEE"],
  },
  {
    id: "news-8",
    date: "2026-06-18",
    formattedDate: "June 18, 2026",
    title: "Presented Antenna Research at IEEE PECCII 2026",
    type: "Conference Presentation",
    badgeColor: "from-purple-500 to-indigo-600",
    description:
      'Successfully presented our research paper "High-Gain H-Slot Microstrip Patch Array Antenna for 24-GHz 5G and Satellite Communication" at IEEE PECCII 2026.',
    tags: ["Microstrip Antenna", "5G", "Satellite Communication", "IEEE"],
  },
  {
    id: "news-7",
    date: "2026-05-08",
    formattedDate: "May 08, 2026",
    title: "XSS-SafeNet Paper Officially Published on IEEE Xplore",
    type: "Publication",
    badgeColor: "from-blue-600 to-indigo-700",
    description:
      'Our paper titled "XSS-SafeNet: A Bidirectional LSTM Architecture for High-Precision Cross-Site Scripting Detection" is now officially published and indexed on IEEE Xplore.',
    link: "https://ieeexplore.ieee.org/",
    linkText: "View Publication",
    tags: ["IEEE Xplore", "BiLSTM", "Web Security", "Indexed Paper"],
  },
  {
    id: "news-6",
    date: "2026-05-07",
    formattedDate: "May 07, 2026",
    title: "5G & Satellite Antenna Paper Accepted at IEEE PECCII 2026",
    type: "Paper Acceptance",
    badgeColor: "from-cyan-500 to-blue-600",
    description:
      'Research paper "High-Gain H-Slot Microstrip Patch Array Antenna for 24-GHz 5G and Satellite Communication" accepted for presentation at IEEE PECCII 2026.',
    tags: ["Antenna Design", "5G", "IEEE PECCII"],
  },
  {
    id: "news-5",
    date: "2026-03-24",
    formattedDate: "March 24, 2026",
    title: "DeepGuard-XSS Research Published in IEEE Xplore",
    type: "Publication",
    badgeColor: "from-blue-600 to-indigo-700",
    description:
      'Research paper "DeepGuard-XSS: Leveraging Large Language Models with CNN–BiLSTM for Robust Detection of Obfuscated XSS Attacks" officially published and accessible in IEEE Xplore.',
    link: "https://ieeexplore.ieee.org/",
    linkText: "Read Paper on IEEE",
    tags: ["LLM", "CNN-BiLSTM", "XSS Detection", "IEEE"],
  },
  {
    id: "news-4",
    date: "2026-01-31",
    formattedDate: "January 31, 2026",
    title: "Presented DeepGuard-XSS at IEEE ICECTE 2026",
    type: "Conference Presentation",
    badgeColor: "from-purple-500 to-indigo-600",
    description:
      'Delivered presentation for "DeepGuard-XSS: Leveraging Large Language Models with CNN–BiLSTM for Robust Detection of Obfuscated XSS Attacks" at ICECTE 2026.',
    tags: ["Conference Presentation", "ICECTE", "AI Security"],
  },
  {
    id: "news-3",
    date: "2025-12-19",
    formattedDate: "December 19, 2025",
    title: "Presented Research Work at IEEE ICCIT 2025",
    type: "Conference Presentation",
    badgeColor: "from-purple-500 to-indigo-600",
    description:
      'Presented "XSS-SafeNet: A Bidirectional LSTM Architecture for High-Precision Cross-Site Scripting Detection" at the 28th International Conference on Computer and Information Technology (ICCIT 2025).',
    tags: ["ICCIT 2025", "Conference Presentation", "BiLSTM"],
  },
  {
    id: "news-2",
    date: "2025-12-16",
    formattedDate: "December 16, 2025",
    title: "DeepGuard-XSS Paper Accepted at IEEE ICECTE 2026",
    type: "Paper Acceptance",
    badgeColor: "from-cyan-500 to-blue-600",
    description:
      'Our research paper "DeepGuard-XSS: Leveraging Large Language Models with CNN–BiLSTM for Robust Detection of Obfuscated XSS Attacks" accepted for presentation at ICECTE 2026.',
    tags: ["Paper Acceptance", "ICECTE", "LLM", "Deep Learning"],
  },
  {
    id: "news-1",
    date: "2025-12-01",
    formattedDate: "December 01, 2025",
    title: "XSS-SafeNet Paper Accepted at IEEE ICCIT 2025",
    type: "Paper Acceptance",
    badgeColor: "from-cyan-500 to-blue-600",
    description:
      'Paper "XSS-SafeNet: A Bidirectional LSTM Architecture for High-Precision Cross-Site Scripting Detection" officially accepted for presentation at ICCIT 2025.',
    tags: ["Paper Acceptance", "ICCIT 2025", "Web Security"],
  },
];

const News = () => {
  const { darkMode } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");

  // Sort chronologically (Newest first) and filter by search query
  const filteredNews = useMemo(() => {
    return initialNewsData
      .slice()
      .sort((a, b) => new Date(b.date) - new Date(a.date)) // Newest on top
      .filter((item) => {
        const query = searchQuery.toLowerCase();
        return (
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.type.toLowerCase().includes(query) ||
          item.tags.some((tag) => tag.toLowerCase().includes(query))
        );
      });
  }, [searchQuery]);

  return (
    <div
      className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        darkMode
          ? "bg-gray-900 text-gray-100"
          : "bg-gradient-to-b from-cyan-50/50 via-white to-cyan-50/30 text-gray-800"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-500 mb-4 border border-cyan-500/20">
            <Megaphone className="w-4 h-4" />
            <span>Academic & Research Updates</span>
          </div>
          <h1
            className={`text-4xl md:text-5xl font-extrabold tracking-tight ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            News &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Activities
            </span>
          </h1>
          <p
            className={`mt-3 text-base md:text-lg max-w-2xl mx-auto ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Chronological log of academic milestones, paper acceptances, conference presentations, and research publications.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 max-w-lg mx-auto"
        >
          <div className="relative">
            <Search className="w-4 h-4 absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-500" />
            <input
              type="text"
              placeholder="Search by topic, paper title, or conference..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-11 pr-4 py-3 rounded-2xl text-sm border shadow-sm outline-none transition-all ${
                darkMode
                  ? "bg-gray-800 border-gray-700 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  : "bg-white border-gray-200 text-gray-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              }`}
            />
          </div>
        </motion.div>

        {/* Timeline Feed */}
        <div className="relative">
          {/* Vertical Axis Line */}
          <div className="absolute left-4 sm:left-8 top-4 bottom-8 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-indigo-500 opacity-30"></div>

          <div className="space-y-6">
            <AnimatePresence>
              {filteredNews.length > 0 ? (
                filteredNews.map((news, index) => (
                  <motion.div
                    key={news.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="relative pl-10 sm:pl-16"
                  >
                    {/* Node Dot */}
                    <div className="absolute left-2.5 sm:left-6 top-6 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <div
                        className={`w-5 h-5 rounded-full bg-gradient-to-r ${news.badgeColor} p-1 ring-4 ring-white dark:ring-gray-900 shadow-md flex items-center justify-center`}
                      >
                        <div className="w-full h-full rounded-full bg-white dark:bg-gray-900"></div>
                      </div>
                    </div>

                    {/* Card Container */}
                    <div
                      className={`relative group rounded-2xl p-5 sm:p-6 border transition-all duration-300 ${
                        darkMode
                          ? "bg-gray-800/70 border-gray-700/60 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/5"
                          : "bg-white border-gray-100 hover:border-cyan-300 hover:shadow-md"
                      }`}
                    >
                      {/* Top Bar: Type & Date */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${news.badgeColor} shadow-sm`}
                        >
                          {news.type}
                        </span>

                        <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 font-medium">
                          <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                          <span>{news.formattedDate}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3
                        className={`text-lg sm:text-xl font-bold mb-2 tracking-tight group-hover:text-cyan-500 transition-colors ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {news.title}
                      </h3>

                      {/* Description */}
                      <p
                        className={`text-sm leading-relaxed mb-4 ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {news.description}
                      </p>

                      {/* Footer: Tags & Link */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-100 dark:border-gray-700/50">
                        <div className="flex flex-wrap gap-1.5">
                          {news.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className={`text-[11px] font-medium px-2.5 py-0.5 rounded-md ${
                                darkMode
                                  ? "bg-gray-700/50 text-gray-300"
                                  : "bg-gray-100 text-gray-600"
                              }`}
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                        {news.link && (
                          <a
                            href={news.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-500 hover:text-cyan-400 transition-colors"
                          >
                            <span>{news.linkText || "View Details"}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <Newspaper className="w-12 h-12 mx-auto text-gray-400 mb-3 opacity-50" />
                  <p className="text-base font-medium text-gray-500">
                    No news items matching "{searchQuery}".
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;