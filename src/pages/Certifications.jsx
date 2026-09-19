"use client";

import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X, ChevronLeft, ChevronRight } from "lucide-react";

const Certifications = () => {
  const { darkMode } = useTheme();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const certifications = [
    {
      id: "c17",
      title: "Paper Presentation in ICCIT-2025",
      issuer: "ICCIT 2025",
      image: "/iccit.png",
      highlight:
        "DeepGuard-XSS: Leveraging Large Language Models with CNN-BiLSTM",
    },
    {
      id: "c18",
      title: "Paper Presentation in ICECTE-2026",
      issuer: "ICECTE 2026",
      image: "/xss.png",
      highlight:
        "XSS-SafeNet: A Bidirectional LSTM Architecture for High-Precision XSS Detection",
    },
    {
      id: "c30",
      title: "Paper Presentation in PECCII-2026",
      issuer: "PECCII 2026",
      image: "/517-01.jpg",
      highlight:
        "High-Gain H-Slot Microstrip Patch Array Antenna for 24-GHz 5G and Satellite Communication",
    },
    {
      id: "c16",
      title: "3rd Place - Project Showcasing",
      issuer: "RUET INNOVISTA 2025",
      image: "/project.jpg",
      highlight: "Faculty of Electrical & Computer Engineering",
    },
    {
      id: "c1",
      title: "Full Stack Development with MERN",
      issuer: "Grameenphone Academy",
      image: "/mern.PNG",
    },
    {
      id: "gp-ai",
      title: "Artificial Intelliigence & Machine Leaning Fundamentals",
      issuer: "Grameenphone Academy",
      image: "/ai.jpg",
    },
    {
      id: "c2",
      title: "Introduction to Web Development with HTML, CSS, JavaScript",
      issuer: "IBM (Coursera)",
      image: "/htmlcssjs.PNG",
    },
    {
      id: "c3",
      title: "Getting Started with Git and GitHub",
      issuer: "IBM (Coursera)",
      image: "/gitibm.PNG",
    },
    {
      id: "c4",
      title: "Master HTML and CSS by Building Real-World Projects",
      issuer: "Udemy",
      image: "/htmlcss.PNG",
    },
    {
      id: "c5",
      title: "Master Git and GitHub – Beginner to Expert",
      issuer: "Udemy",
      image: "/gitudemy.PNG",
    },
    {
      id: "c6",
      title: "React Basics",
      issuer: "Meta (Coursera)",
      image: "/react.PNG",
    },
    {
      id: "c7",
      title: "JavaScript Certification Test",
      issuer: "Complete Coding by Prashant Sir",
      image: "/js.PNG",
    },
    {
      id: "c8",
      title: "HTML Certification Test",
      issuer: "Complete Coding by Prashant Sir",
      image: "/html.PNG",
    },
    {
      id: "c9",
      title: "CSS Certification Test",
      issuer: "Complete Coding by Prashant Sir",
      image: "/cssc.PNG",
    },
    {
      id: "c10",
      title: "VSCode Shortcuts and Extensions for Web Developer",
      issuer: "Udemy",
      image: "/vsc.PNG",
    },
    {
      id: "c11",
      title: "Microsoft Excel: Beginner to Advanced",
      issuer: "Grameenphone Academy",
      image: "/excelc.PNG",
    },
    {
      id: "c12",
      title: "Microsoft PowerPoint: Advanced Course",
      issuer: "Grameenphone Academy",
      image: "/ppc.PNG",
    },
    {
      id: "c13",
      title: "CV Writing for Professionals",
      issuer: "Grameenphone Academy",
      image: "/cv.PNG",
    },
    {
      id: "c14",
      title: "Create and Design Digital Products using Canva",
      issuer: "Coursera",
      image: "/canvac.PNG",
    },
  ];

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };
  const handleCloseModal = () => setSelectedImage(null);

  const handlePrevImage = (e) => {
    e.stopPropagation();
    const newIndex =
      (selectedIndex - 1 + certifications.length) % certifications.length;
    setSelectedImage(certifications[newIndex].image);
    setSelectedIndex(newIndex);
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    const newIndex = (selectedIndex + 1) % certifications.length;
    setSelectedImage(certifications[newIndex].image);
    setSelectedIndex(newIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === "Escape") handleCloseModal();
      else if (e.key === "ArrowLeft") handlePrevImage(e);
      else if (e.key === "ArrowRight") handleNextImage(e);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, selectedIndex]);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="section-label mb-3 inline-flex">
            <Award className="w-3.5 h-3.5" />
            <span>Achievements</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            My Certifications & Achievements
          </h1>
          <div className="academic-divider"></div>
          <p className="text-base max-w-2xl mx-auto text-[var(--text-secondary)] mt-4">
            Academic contributions, research presentations, project awards, and
            professional certifications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="academic-card cursor-pointer overflow-hidden p-0 group"
              onClick={() => handleImageClick(cert.image, index)}
            >
              <div className="relative h-48 overflow-hidden bg-[var(--bg-secondary)]">
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3">
                  <Award className="w-6 h-6 text-[var(--accent)] drop-shadow" />
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-serif font-bold text-base leading-tight mb-2 line-clamp-2 text-[var(--text-primary)]">
                  {cert.title}
                </h3>

                {cert.highlight && (
                  <p className="text-xs text-[var(--accent)] font-medium mb-2">
                    {cert.highlight}
                  </p>
                )}

                <p className="text-xs font-medium text-[var(--text-muted)]">
                  {cert.issuer}
                </p>

                <div className="mt-3 text-xs text-[var(--text-muted)]">
                  Click to enlarge →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Certificate"
                className="max-h-[90vh] w-auto mx-auto rounded-lg shadow-2xl object-contain"
              />

              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/70 text-white px-6 py-2 rounded-full text-xs font-medium shadow-lg max-w-[90%] text-center">
                {certifications[selectedIndex].title} —{" "}
                {certifications[selectedIndex].issuer}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certifications;
