"use client"

import { Routes, Route } from "react-router-dom"
import { useTheme } from "./context/ThemeContext"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Expertise from "./pages/Experties"
import Projects from "./pages/Projects"
import Hobby from "./pages/Hobby"
import AboutMe from "./pages/AboutMe"
import Reviews from "./pages/Reviews"
import NotFound from "./pages/NotFound"
import ScrollToSection from "./components/ScrollToSection"
import Certifications from "./pages/Certifications"
import ComingSoon from "./pages/ComingSoon"

function App() {
  const { darkMode } = useTheme()

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      {/* Add ScrollToSection component to handle hash navigation */}
      <ScrollToSection />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="expertise" element={<Expertise />} />
          <Route path="projects" element={<Projects />} />
          <Route path="hobby" element={<Hobby />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/coming" element={<ComingSoon />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
