"use client";

import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Expertise from "./pages/Experties";
import Projects from "./pages/Projects";
import Hobby from "./pages/Hobby";
import AboutMe from "./pages/AboutMe";
import Reviews from "./pages/Reviews";
import NotFound from "./pages/NotFound";
import ScrollToSection from "./components/ScrollToSection";
import Certifications from "./pages/Certifications";
import ComingSoon from "./pages/ComingSoon";
import Publications from "./pages/Publications";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import News from "./pages/News";

function App() {
  return (
    <div className="min-h-screen bg-primary text-primary transition-colors duration-300">
      <ScrollToSection />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="skills" element={<Expertise />} />
          <Route path="projects" element={<Projects />} />
          <Route path="hobby" element={<Hobby />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="publications" element={<Publications />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:id" element={<BlogDetails />} />
          <Route path="news" element={<News />} />
          <Route path="coming" element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;