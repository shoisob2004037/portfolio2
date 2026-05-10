"use client";

import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { FileText, ExternalLink, Calendar, Award, BookOpen, Users, CheckCircle } from "lucide-react";

const Publications = () => {
  const { darkMode } = useTheme();
  const [expandedAbstract, setExpandedAbstract] = useState(false);

  const publications = [
    {
      id: 1,
      title: "DeepGuard-XSS: Leveraging Large Language Models with CNN–BiLSTM for Robust Detection of Obfuscated XSS Attacks",
      authors: "Mahadi Hasan Shaisob, Md. Nafish Ahamed Apu",
      conference: "2026 5th International Conference on Electrical, Computer & Telecommunication Engineering (ICECTE)",
      location: "Rajshahi, Bangladesh",
      date: "January 29-31, 2026",
      publishedOn: "IEEE Xplore: March 16, 2026",
      link: "https://ieeexplore.ieee.org/document/11429351",
      doi: "10.1109/ICECTE69292.2026.11429351", 
      abstract: `Cross-site scripting remains a major security threat for web platforms, with obfuscated attack payloads continuing to bypass traditional detection. In this study, an extensive labeled XSS dataset was constructed by aggregating samples from several public sources and further enriched using LLM-driven (CodeT5) obfuscation to simulate real-world evasive techniques. The proposed DeepGuard-XSS framework explores two deep architectures: a character-level Convolutional Neural Network (CNN) and a BiLSTM model optimized for handling complex, variable-length script patterns. The BiLSTM configuration leverages an expanded embedding space and dual bidirectional LSTM layers, achieving a test accuracy of 98.1%, with high precision, recall, and F1 metrics. Similarly, the updated CNN variant attains 97.22% accuracy, demonstrating strong performance even as obfuscated and adversarial payload diversity increases. In addition, both deep models outperform several classical baseline machine learning classifiers (Logistic Regression, Multinomial NB, Decision Tree, XGBoost) evaluated on the same dataset, confirming the benefit of the proposed deep architectures for robust XSS detection.`,
      technologies: ["Large Language Models", "CNN", "BiLSTM", "CodeT5", "XSS Detection", "Cybersecurity"],
    },
    {
  "id": 2,
  "title": "XSS-SafeNet: A Bidirectional LSTM Architecture for High-Precision Cross-Site Scripting Detection",
  "authors": "Mahadi Hasan Shaisob, Md. Mehedi Hassan, Rubaeat Ahammed, Md Arif Hossen",
  "conference": " 2025 28th International Conference on Computer and Information Technology (ICCIT)",
  "location": "Cox's Bazar, Bangladesh",
  "date": "December 19-21, 2025",
  "publishedOn": "IEEE Xplore: May 6, 2026",
  "link": "https://ieeexplore.ieee.org/document/11491109",
  "doi": "10.1109/ICCIT68739.2025.11491109",
  "abstract": "Cross-Site Scripting (XSS) persists as a severe and costly web threat, enabling arbitrary script execution, session hijacking, and data theft. This paper proposes a tailored bidirectional long short-term memory (BiLSTM) model that focuses on the sequential structure of XSS payloads. Trained on 1,831,254 samples with a 60% for train and 40% for test and an internal 40% validation split on the training portion, the detector achieves 99.59% accuracy, 100% precision, 99.36% recall, and a 99.68%F1-score. We benchmark against strong classical base-lines-Logistic Regression, Random Forest, Multinomial Naive Bayes, Decision Tree, and XGBoost-and discuss where sequence modeling offers clear advantages. The findings indicate that sequence-aware deep architectures can deliver robust, scalable XSS detection suitable for modern deployment settings.",
  "technologies": ["BiLSTM", "Deep Learning", "XSS Detection", "Cybersecurity", "LLM"]
}
  ];

  return (
    <section
      className={`min-h-screen py-16 sm:py-20 ${
        darkMode ? "bg-gradient-to-b from-gray-900 to-gray-800" : "bg-gradient-to-b from-cyan-50 to-white"
      }`}
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block">
            <h1
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Publications
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto"></div>
          </div>
          <p
            className={`mt-4 text-base sm:text-lg max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Research contributions in cybersecurity, machine learning, and web technologies
          </p>
        </motion.div>

        {/* Publications List */}
        <div className="space-y-8">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                darkMode ? "bg-gray-800/90 border border-gray-700" : "bg-white"
              }`}
            >
              {/* Paper Type Badge */}
              <div className="relative">
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md">
                    <Award className="w-3 h-3" />
                    Conference Paper
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                {/* Title */}
                <h2
                  className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-4 pr-24 ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {pub.title}
                </h2>

                {/* Authors */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Users className="w-4 h-4 text-cyan-500" />
                  <span className={`text-sm sm:text-base ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    {pub.authors}
                  </span>
                </div>

                {/* Conference & Date */}
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-cyan-500" />
                    <span className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                      {pub.conference}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-cyan-500" />
                    <span className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                      {pub.date}
                    </span>
                  </div>
                </div>

                {/* Published on */}
                <div className="mb-4 p-3 rounded-lg bg-cyan-50 dark:bg-cyan-900/20">
                  <p className={`text-sm ${darkMode ? "text-gray-800" : "text-gray-600"}`}>
                    <span className="font-semibold">Published on IEEE Xplore:</span> {pub.publishedOn}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {pub.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-2 py-1 rounded-md text-xs font-medium ${
                        darkMode
                          ? "bg-gray-700 text-cyan-400"
                          : "bg-cyan-100 text-cyan-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Abstract */}
                <div className="mb-6">
                  <button
                    onClick={() => setExpandedAbstract(!expandedAbstract)}
                    className={`flex items-center gap-2 text-sm font-semibold mb-2 ${
                      darkMode ? "text-cyan-400 hover:text-cyan-300" : "text-cyan-600 hover:text-cyan-700"
                    } transition-colors duration-300`}
                  >
                    <FileText className="w-4 h-4" />
                    {expandedAbstract ? "Hide Abstract" : "View Abstract"}
                  </button>
                  {expandedAbstract && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`p-4 rounded-lg ${
                        darkMode ? "bg-gray-700/50" : "bg-gray-50"
                      }`}
                    >
                      <p className={`text-sm leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                        {pub.abstract}
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium text-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View on IEEE Xplore
                  </a>
                  {pub.doi && (
                    <span className={`inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm ${
                      darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600"
                    }`}>
                      DOI: {pub.doi}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State - If no publications */}
        {publications.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`text-center py-16 rounded-2xl ${
              darkMode ? "bg-gray-800" : "bg-white"
            } shadow-lg`}
          >
            <FileText className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <h3 className={`text-xl font-semibold mb-2 ${darkMode ? "text-white" : "text-gray-800"}`}>
              No Publications Yet
            </h3>
            <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              Research publications will be added soon. Stay tuned!
            </p>
          </motion.div>
        )}

        {/* Research Interest Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className={`mt-12 p-6 rounded-xl text-center ${
            darkMode ? "bg-gray-800/50" : "bg-cyan-50"
          }`}
        >
          <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            📚 My research focuses on <span className="font-semibold text-cyan-600 dark:text-cyan-400">Machine Learning, AI, Cybersecurity, Autonomous Vehicles, Image Processing, and Cyber-Physical Systems</span>. 
            I am passionate about creating intelligent web platforms that seamlessly integrate AI features.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;