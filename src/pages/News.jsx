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
  Megaphone,
} from "lucide-react";

const initialNewsData = [
  {
    id: "news-16",
    date: "2026-09-05",
    formattedDate: "September 05, 2026",
    title: "Joined as Research Supervisor & Mentor at ResearchBuddy AI",
    type: "Academic Appointment",
    description:
      'Joined ResearchBuddy AI platform as a Research Supervisor and Mentor, leading the "Cybersecurity and Cyber-Physical Systems Security Lab". Currently supervising 15 students, mentoring them on the fundamentals of research methodology, scholarly writing, and the publication process in the domains of cybersecurity and cyber-physical systems security.',
    tags: [
      "Research Supervision",
      "Mentorship",
      "Cybersecurity",
      "Cyber-Physical Systems",
      "ResearchBuddy AI",
    ],
  },
    {
    id: "news-15",
    date: "2026-08-27",
    formattedDate: "August 27, 2026",
    title: "Paper Officially Published on IEEE Xplore",
    type: "Publication",
    description:
      'Our paper titled "High-Gain H-Slot Microstrip Patch Array Antenna for 24-GHz 5G and Satellite Communication" is now officially published and indexed on IEEE Xplore.',
    link: "https://ieeexplore.ieee.org/document/11661841",
    linkText: "Read Paper on IEEE Xplore",
    tags: ["IEEE Xplore", "Antenna Design", "5G", "Satellite Communication", "Indexed Paper"],
  },
  {
    id: "news-14",
    date: "2026-08-14",
    formattedDate: "August 14, 2026",
    title: "Presented Paper at IEEE SPICSCON 2026",
    type: "Conference Presentation",
    description:
      "Delivered presentation for 'RFAT: Deep Learning-Based Detection of Sensor Manipulation Attacks in Autonomous Vehicles' officially accepted for presentation at IEEE SPICSCON 2026.' at IEEE SPICSCON 2026.",
    tags: [
      "Conference Presentation",
      "IEEE SPICSCON",
      "Sensor Security",
      "Autonomous Vehicles",
    ],
  },
  {
    id: "news-13",
    date: "2026-08-14",
    formattedDate: "August 14, 2026",
    title: "Presented Paper at IEEE SPICSCON 2026",
    type: "Conference Presentation",
    description:
      "Delivered presentation for 'Defense Against Adversarial Attacks on YOLO-based Object Detection for Autonomous Vehicles Using Bangladeshi Occluded Road Dataset' at IEEE SPICSCON 2026.",
    tags: [
      "Conference Presentation",
      "IEEE SPICSCON",
      "Adversarial ML",
      "Autonomous Vehicles",
    ],
  },
  {
    id: "news-12",
    date: "2026-08-04",
    formattedDate: "August 04, 2026",
    title: "B.Sc. Degree Results Published with Top Honors",
    type: "Academic Achievement",
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
    description:
      'Research paper titled "Defense Against Adversarial Attacks on YOLO-based Object Detection for Autonomous Vehicles Using Bangladeshi Occluded Road Dataset" has been officially accepted for presentation at IEEE SPICSCON 2026.',
    tags: [
      "Adversarial Machine Learning",
      "Autonomous Vehicles",
      "YOLO",
      "IEEE",
    ],
  },
  {
    id: "news-9",
    date: "2026-07-21",
    formattedDate: "July 21, 2026",
    title: "Paper Accepted at IEEE SPICSCON 2026",
    type: "Paper Acceptance",
    description:
      'Co-authored paper "RFAT: Deep Learning-Based Detection of Sensor Manipulation Attacks in Autonomous Vehicles" officially accepted for presentation at IEEE SPICSCON 2026.',
    tags: ["Autonomous Vehicles", "Sensor Security", "Deep Learning", "IEEE"],
  },
  {
    id: "news-8",
    date: "2026-06-18",
    formattedDate: "June 18, 2026",
    title: "Presented Paper at IEEE PECCII 2026",
    type: "Conference Presentation",
    description:
      'Successfully presented our research paper "High-Gain H-Slot Microstrip Patch Array Antenna for 24-GHz 5G and Satellite Communication" at IEEE PECCII 2026.',
    tags: ["Microstrip Antenna", "5G", "Satellite Communication", "IEEE"],
  },
  {
    id: "news-7",
    date: "2026-05-08",
    formattedDate: "May 08, 2026",
    title: "Paper Officially Published on IEEE Xplore",
    type: "Publication",
    description:
      'Our paper titled "XSS-SafeNet: A Bidirectional LSTM Architecture for High-Precision Cross-Site Scripting Detection" is now officially published and indexed on IEEE Xplore.',
    link: "https://ieeexplore.ieee.org/document/11491109",
    linkText: "Read Paper on IEEE Xplore",
    tags: ["IEEE Xplore", "BiLSTM", "Web Security", "Indexed Paper"],
  },
  {
    id: "news-6",
    date: "2026-05-07",
    formattedDate: "May 07, 2026",
    title: "Paper Accepted at IEEE PECCII 2026",
    type: "Paper Acceptance",
    description:
      'Research paper "High-Gain H-Slot Microstrip Patch Array Antenna for 24-GHz 5G and Satellite Communication" accepted for presentation at IEEE PECCII 2026.',
    tags: ["Antenna Design", "5G", "IEEE PECCII"],
  },
  {
    id: "news-5",
    date: "2026-03-24",
    formattedDate: "March 24, 2026",
    title: "Paper Published in IEEE Xplore",
    type: "Publication",
    description:
      'Research paper "DeepGuard-XSS: Leveraging Large Language Models with CNN–BiLSTM for Robust Detection of Obfuscated XSS Attacks" officially published and accessible in IEEE Xplore.',
    link: "https://ieeexplore.ieee.org/document/11429351",
    linkText: "Read Paper on IEEE Xplore",
    tags: ["LLM", "CNN-BiLSTM", "XSS Detection", "IEEE"],
  },
  {
    id: "news-4",
    date: "2026-01-31",
    formattedDate: "January 31, 2026",
    title: "Presented Paper at IEEE ICECTE 2026",
    type: "Conference Presentation",
    description:
      'Delivered presentation for "DeepGuard-XSS: Leveraging Large Language Models with CNN–BiLSTM for Robust Detection of Obfuscated XSS Attacks" at ICECTE 2026.',
    tags: ["Conference Presentation", "ICECTE", "AI Security"],
  },
  {
    id: "news-3",
    date: "2025-12-19",
    formattedDate: "December 19, 2025",
    title: "Presented paper at IEEE ICCIT 2025",
    type: "Conference Presentation",
    description:
      'Presented "XSS-SafeNet: A Bidirectional LSTM Architecture for High-Precision Cross-Site Scripting Detection" at the 28th International Conference on Computer and Information Technology (ICCIT 2025).',
    tags: ["ICCIT 2025", "Conference Presentation", "BiLSTM"],
  },
  {
    id: "news-2",
    date: "2025-12-16",
    formattedDate: "December 16, 2025",
    title: "Paper Accepted at IEEE ICECTE 2026",
    type: "Paper Acceptance",
    description:
      'Our research paper "DeepGuard-XSS: Leveraging Large Language Models with CNN–BiLSTM for Robust Detection of Obfuscated XSS Attacks" accepted for presentation at ICECTE 2026.',
    tags: ["Paper Acceptance", "ICECTE", "LLM", "Deep Learning"],
  },
  {
    id: "news-1",
    date: "2025-12-01",
    formattedDate: "December 01, 2025",
    title: "Paper Accepted at IEEE ICCIT 2025",
    type: "Paper Acceptance",
    description:
      'Paper "XSS-SafeNet: A Bidirectional LSTM Architecture for High-Precision Cross-Site Scripting Detection" officially accepted for presentation at ICCIT 2025.',
    tags: ["Paper Acceptance", "ICCIT 2025", "Web Security"],
  },
];

const News = () => {
  const { darkMode } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNews = useMemo(() => {
    return initialNewsData
      .slice()
      .sort((a, b) => new Date(b.date) - new Date(a.date))
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
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="section-label mb-4">
            <Megaphone className="w-3.5 h-3.5" />
            <span>Academic & Research Updates</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
            News & <span className="text-[var(--accent)]">Activities</span>
          </h1>
          <div className="academic-divider"></div>
          <p className="mt-4 text-sm md:text-base max-w-2xl mx-auto text-[var(--text-secondary)]">
            Chronological log of academic milestones, paper acceptances,
            conference presentations, and research publications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 max-w-lg mx-auto"
        >
          <div className="relative">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              type="text"
              placeholder="Search by topic, paper title, or conference..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="academic-input pl-11"
            />
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 sm:left-8 top-4 bottom-8 w-0.5 bg-[var(--border-color)]"></div>

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
                    <div className="absolute left-2.5 sm:left-6 top-6 -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="w-3.5 h-3.5 rounded-full border-2 border-[var(--accent)] bg-[var(--bg-primary)]"></div>
                    </div>

                    <div className="academic-card">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--accent-light)] text-[var(--accent)] border border-[var(--border-color)]">
                          {news.type}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{news.formattedDate}</span>
                        </div>
                      </div>

                      <h3 className="font-serif text-base sm:text-lg font-bold mb-2 text-[var(--text-primary)]">
                        {news.title}
                      </h3>

                      <p className="text-sm leading-relaxed mb-4 text-[var(--text-secondary)]">
                        {news.description}
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[var(--border-color)]">
                        <div className="flex flex-wrap gap-1.5">
                          {news.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] font-medium px-2 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--text-muted)]"
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
                            className="inline-flex items-center gap-1 text-xs font-medium text-[var(--accent)] hover:text-[var(--accent-hover)]"
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
                  <Newspaper className="w-10 h-10 mx-auto mb-3 text-[var(--text-muted)]" />
                  <p className="text-base font-medium text-[var(--text-muted)]">
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
export { initialNewsData };
