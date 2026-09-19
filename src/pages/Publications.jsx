"use client";

import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  ExternalLink,
  Calendar,
  Award,
  BookOpen,
  Users,
  Database,
} from "lucide-react";

const Publications = () => {
  const { darkMode } = useTheme();
  const [expandedAbstract, setExpandedAbstract] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Conference", "Book", "Journal", "Data Article"];

  const publications = [
    {
      id: 3,
      type: "Conference",
      title:
        "High-Gain H-Slot Microstrip Patch Array Antenna for 24-GHz 5G and Satellite Communication",
      authors:
        "S.M.Shihab Sharar, Md. Rakib Hossain, Mahadi Hasan Shaisob, Farzana Akter",
      conference:
        "2026 International Conference on Power, Electronics, Communications, Computing, and Intelligent Infrastructure (PECCII)",
      location: "Pabna, Bangladesh",
      date: "17-18 June 2026",
      publishedOn: "IEEE Xplore: 27 August 2026",
      link: "https://ieeexplore.ieee.org/document/11661841",
      abstract:
        "A high-gain H-slot microstrip patch array antenna developed for satellite and millimeter-wave (mmWave) communication at 24 GHz is presented in this work. CST Microwave Studio is used for the antenna's design and analysis. In comparison to traditional rectangular patch arrays, each radiating patch element has an H-shaped slot that improves antenna gain, surface current distribution, resulting to improved radiation performance and impedance matching. A Rogers RO3006 substrate with a thickness of 0.254 mm and a relative permittivity of εr ≈6.15 is used to implement the suggested antenna. To ensure appropriate impedance matching and consistent power distribution among the array members, a corporate feed network is employed. With about 75% radiation efficiency, the antenna reaches a peak gain of 15.8 dBi.",
      technologies: [
        "H-Slot Antenna",
        "Microstrip Patch Array",
        "24 GHz",
        "5G",
        "Satellite Communication",
        "mmWave",
        "CST Microwave Studio",
      ],
    },
    {
      id: 1,
      type: "Conference",
      title:
        "DeepGuard-XSS: Leveraging Large Language Models with CNN–BiLSTM for Robust Detection of Obfuscated XSS Attacks",
      authors: "Mahadi Hasan Shaisob, Md. Nafish Ahamed Apu",
      conference:
        "2026 5th International Conference on Electrical, Computer & Telecommunication Engineering (ICECTE)",
      location: "Rajshahi, Bangladesh",
      date: "January 29-31, 2026",
      publishedOn: "IEEE Xplore: March 16, 2026",
      link: "https://ieeexplore.ieee.org/document/11429351",
      doi: "10.1109/ICECTE69292.2026.11429351",
      abstract: `Cross-site scripting remains a major security threat for web platforms, with obfuscated attack payloads continuing to bypass traditional detection. In this study, an extensive labeled XSS dataset was constructed by aggregating samples from several public sources and further enriched using LLM-driven (CodeT5) obfuscation to simulate real-world evasive techniques. The proposed DeepGuard-XSS framework explores two deep architectures: a character-level Convolutional Neural Network (CNN) and a BiLSTM model optimized for handling complex, variable-length script patterns. The BiLSTM configuration leverages an expanded embedding space and dual bidirectional LSTM layers, achieving a test accuracy of 98.1%, with high precision, recall, and F1 metrics. Similarly, the updated CNN variant attains 97.22% accuracy, demonstrating strong performance even as obfuscated and adversarial payload diversity increases. In addition, both deep models outperform several classical baseline machine learning classifiers (Logistic Regression, Multinomial NB, Decision Tree, XGBoost) evaluated on the same dataset, confirming the benefit of the proposed deep architectures for robust XSS detection.`,
      technologies: [
        "Large Language Models",
        "CNN",
        "BiLSTM",
        "CodeT5",
        "XSS Detection",
        "Cybersecurity",
      ],
    },
    {
      id: 2,
      type: "Conference",
      title:
        "XSS-SafeNet: A Bidirectional LSTM Architecture for High-Precision Cross-Site Scripting Detection",
      authors:
        "Mahadi Hasan Shaisob, Md. Mehedi Hassan, Rubaeat Ahammed, Md Arif Hossen",
      conference:
        "2025 28th International Conference on Computer and Information Technology (ICCIT)",
      location: "Cox's Bazar, Bangladesh",
      date: "December 19-21, 2025",
      publishedOn: "IEEE Xplore: May 6, 2026",
      link: "https://ieeexplore.ieee.org/document/11491109",
      doi: "10.1109/ICCIT68739.2025.11491109",
      abstract:
        "Cross-Site Scripting (XSS) persists as a severe and costly web threat, enabling arbitrary script execution, session hijacking, and data theft. This paper proposes a tailored bidirectional long short-term memory (BiLSTM) model that focuses on the sequential structure of XSS payloads. Trained on 1,831,254 samples with a 60% for train and 40% for test and an internal 40% validation split on the training portion, the detector achieves 99.59% accuracy, 100% precision, 99.36% recall, and a 99.68%F1-score. We benchmark against strong classical base-lines-Logistic Regression, Random Forest, Multinomial Naive Bayes, Decision Tree, and XGBoost-and discuss where sequence modeling offers clear advantages. The findings indicate that sequence-aware deep architectures can deliver robust, scalable XSS detection suitable for modern deployment settings.",
      technologies: [
        "BiLSTM",
        "Deep Learning",
        "XSS Detection",
        "Cybersecurity",
        "LLM",
      ],
    },
    {
      id: 4,
      type: "Data Article",
      title:
        "Large-Scale Annotated Dataset for Cross-Site Scripting (XSS) Attack Detection",
      authors: "Mahadi Hasan Shaisob, Md. Mehedi Hassan, Rubaeat Ahammed",
      conference: "Mendeley Data, V2",
      location: "",
      date: "7 September 2026",
      publishedOn: "Mendeley Data: 7 September 2026",
      link: "https://data.mendeley.com/datasets/py6cnbgdh2/2",
      doi: "10.17632/py6cnbgdh2.2",
      abstract:
        "This dataset contains 1,831,254 records specifically curated to support research on detecting Cross-Site Scripting (XSS) attacks using machine learning techniques. Each record consists of two fields: Query: A text input representing potential web payloads, user inputs, or script content extracted from diverse sources of benign and malicious web traffic. Label: A binary classification label indicating whether the entry is malicious (1) or benign (0). The dataset is heavily diversified and deduplicated to ensure minimal bias and high generalization capacity for model training. It features a malicious-to-benign ratio of approximately 60:40, making it particularly suitable for evaluating both detection and false positive rates of machine learning and deep learning models. Key Features: Total Records: 1,831,254; Benign Records (Label = 0): 666,484; Malicious Records (Label = 1): 1,164,770; Structure: Two columns – Query (textual payload) and Label (binary indicator: 1 = malicious, 0 = benign). This dataset underpins the research paper 'Bi-LSTM Approach for Cross-Site Scripting (XSS) Attack Detection' submitted to the International Conference on Computer and Information Technology (ICCIT), Cox's Bazar.",
      technologies: [
        "XSS Dataset",
        "Machine Learning",
        "BiLSTM",
        "Cybersecurity",
        "Annotated Data",
        "Mendeley Data",
      ],
    },
    {
      id: 5,
      type: "Data Article",
      title:
        "Large-Scale Annotated Dataset for Cross-Site Scripting (XSS) Attack Detection",
      authors: "Md Mehedi Hassan, Mahadi Hasan Shaisob, Rubaeat Ahammed",
      conference: "IEEE DataPort",
      location: "",
      date: "2026",
      publishedOn: "IEEE DataPort: 2026",
      link: "https://ieee-dataport.org/documents/large-scale-annotated-dataset-cross-site-scripting-xss-attack-detection",
      doi: "10.21227/5w2z-3v64",
      abstract:
        "This dataset contains 1,831,254 records specifically curated to support research on detecting Cross-Site Scripting (XSS) attacks using machine learning techniques. Each record consists of two fields: Query: A text input representing potential web payloads, user inputs, or script content extracted from diverse sources of benign and malicious web traffic. Label: A binary classification label indicating whether the entry is malicious (1) or benign (0). The dataset is heavily diversified and deduplicated to ensure minimal bias and high generalization capacity for model training. It features a malicious-to-benign ratio of approximately 60:40, making it particularly suitable for evaluating both detection and false positive rates of machine learning and deep learning models. Key Features: Size: 1,831,254 records; Structure: Two columns – Query (textual payload) and Label (binary indicator: 1 = malicious, 0 = benign). This dataset underpins the research paper 'Bi-LSTM Approach for Cross-Site Scripting (XSS) Attack Detection' submitted to the International Conference on Computer and Information Technology (ICCIT), Cox's Bazar.",
      technologies: [
        "XSS Dataset",
        "Machine Learning",
        "BiLSTM",
        "Cybersecurity",
        "Annotated Data",
        "IEEE DataPort",
      ],
    },
  ];

  const filteredPublications =
    activeFilter === "All"
      ? publications
      : publications.filter((pub) => pub.type === activeFilter);

  const getTypeIcon = (type) => {
    switch (type) {
      case "Conference":
        return <Award className="w-3 h-3" />;
      case "Data Article":
        return <Database className="w-3 h-3" />;
      case "Book":
        return <BookOpen className="w-3 h-3" />;
      case "Journal":
        return <FileText className="w-3 h-3" />;
      default:
        return <Award className="w-3 h-3" />;
    }
  };

  return (
    <section className="min-h-screen py-16 bg-[var(--bg-primary)]">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="section-label mb-3 mx-auto inline-flex">
            <FileText className="w-3.5 h-3.5" />
            <span>Research Output</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
            Publications
          </h1>
          <div className="academic-divider"></div>
          <p className="mt-4 text-sm sm:text-base max-w-2xl mx-auto text-[var(--text-secondary)]">
            Research contributions in cybersecurity, machine learning, and web
            technologies
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 border ${
                activeFilter === filter
                  ? "bg-[var(--accent)] text-white border-[var(--accent)]"
                  : "bg-[var(--bg-elevated)] text-[var(--text-secondary)] border-[var(--border-color)] hover:border-[var(--accent)]"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <div className="space-y-8">
          <AnimatePresence>
            {filteredPublications.map((pub, index) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="academic-card relative"
              >
                <div className="absolute top-5 right-5">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-[var(--accent)] text-white">
                    {getTypeIcon(pub.type)}
                    {pub.type}
                  </span>
                </div>

                <h2 className="font-serif text-lg sm:text-xl lg:text-2xl font-bold mb-4 pr-24 text-[var(--text-primary)]">
                  {pub.title}
                </h2>

                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Users className="w-4 h-4 text-[var(--accent)]" />
                  <span className="text-sm text-[var(--text-secondary)]">
                    {pub.authors}
                  </span>
                </div>

                <div className="flex flex-wrap gap-4 mb-4">
                  {pub.conference && (
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-[var(--accent)]" />
                      <span className="text-sm text-[var(--text-secondary)]">
                        {pub.conference}
                      </span>
                    </div>
                  )}
                  {pub.date && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[var(--accent)]" />
                      <span className="text-sm text-[var(--text-secondary)]">
                        {pub.date}
                      </span>
                    </div>
                  )}
                </div>

                {pub.publishedOn && (
                  <div className="mb-4 p-3 rounded-md bg-[var(--accent-light)] border border-[var(--border-color)]">
                    <p className="text-sm text-[var(--text-secondary)]">
                      <span className="font-semibold">Published on:</span>{" "}
                      {pub.publishedOn}
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {pub.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded-md text-xs font-medium bg-[var(--bg-tertiary)] text-[var(--accent)] border border-[var(--border-color)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mb-6">
                  <button
                    onClick={() =>
                      setExpandedAbstract(
                        expandedAbstract === pub.id ? null : pub.id,
                      )
                    }
                    className="flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)]"
                  >
                    <FileText className="w-4 h-4" />
                    {expandedAbstract === pub.id
                      ? "Hide Abstract"
                      : "View Abstract"}
                  </button>
                  {expandedAbstract === pub.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 p-4 rounded-md bg-[var(--bg-secondary)] border border-[var(--border-color)]"
                    >
                      <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                        {pub.abstract}
                      </p>
                    </motion.div>
                  )}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-academic"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {pub.type === "Data Article" ? "View Dataset" : "View on IEEE Xplore"}
                  </a>
                  {pub.doi && (
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs bg-[var(--bg-tertiary)] text-[var(--text-muted)] border border-[var(--border-color)]">
                      DOI: {pub.doi}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredPublications.length === 0 && (
          <div className="text-center py-16 academic-card">
            <FileText className="w-12 h-12 mx-auto mb-4 text-[var(--text-muted)]" />
            <h3 className="font-serif text-lg font-semibold mb-2 text-[var(--text-primary)]">
              No publications found
            </h3>
            <p className="text-[var(--text-secondary)]">
              No {activeFilter.toLowerCase()} publications available yet.
            </p>
          </div>
        )}

        <div className="mt-12 p-6 rounded-lg text-center bg-[var(--bg-secondary)] border border-[var(--border-color)]">
          <p className="text-sm text-[var(--text-secondary)]">
            📚 My research focuses on{" "}
            <span className="font-semibold text-[var(--accent)]">
              Machine Learning, AI, Cybersecurity, Autonomous Vehicles, Image
              Processing, and Cyber-Physical Systems
            </span>
            . I am passionate about creating intelligent web platforms that
            seamlessly integrate AI features.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Publications;