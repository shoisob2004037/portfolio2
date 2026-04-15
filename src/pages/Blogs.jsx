// pages/Blogs.jsx - Updated without views, likes, comments
"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag, ChevronRight } from "lucide-react";

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Building a Real-time Vehicle Counting System with YOLO11",
    excerpt: "A comprehensive guide to creating a production-ready vehicle detection and counting system using YOLO11, BotSORT tracking, and Streamlit. Learn how to detect multiple vehicle types, count them in both directions, and deploy as a web app...",
    date: "April 15, 2026",
    readTime: "10 min read",
    category: "Computer Vision",
    tags: ["YOLO", "Python", "Streamlit", "AI"],
    image: "/car-detection.png"
  },
  {
    id: 2,
    title: "My IEEE Paper Journey: DeepGuard-XSS Detection System",
    excerpt: "How I developed a robust XSS detection system using CNN-BiLSTM and Large Language Models, achieving 98.1% accuracy. From data collection to publication, here's everything I learned...",
    date: "March 20, 2026",
    readTime: "8 min read",
    category: "Research",
    tags: ["XSS", "Deep Learning", "Cybersecurity", "IEEE"],
    image: "/xssp.png"
  }
];

const Blogs = () => {
  const { darkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Web Development", "Computer Vision", "Research", "AI/ML"];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900" : "bg-gradient-to-b from-cyan-50 to-white"}`}>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className={`text-4xl font-bold ${darkMode ? "text-white" : "text-gray-900"} mb-4`}>
            <span className="relative inline-block">
              My Blog
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></span>
            </span>
          </h1>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Sharing my learning journey, project deep-dives, and technical insights
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <input
            type="text"
            placeholder="Search blogs by title, content, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full p-4 rounded-xl ${
              darkMode
                ? "bg-gray-800 border border-gray-700 text-white focus:border-cyan-500"
                : "bg-white border border-gray-200 text-gray-900 focus:border-cyan-500"
            } focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300`}
          />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                  : darkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Posts - One Column Layout */}
        <div className="space-y-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <Link to={`/blogs/${post.id}`} className="block">
                <div className="flex flex-col md:flex-row">
                  {/* Image Section */}
                  <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-6 md:p-8">
                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}>
                      {post.title}
                    </h2>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
                      <span className="flex items-center gap-1 text-cyan-500">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1 text-cyan-500">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Excerpt */}
                    <p className={`mb-4 leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full ${
                            darkMode
                              ? "bg-gray-700 text-cyan-400"
                              : "bg-cyan-100 text-cyan-700"
                          }`}
                        >
                          <Tag className="w-3 h-3" />
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More */}
                    <div className="flex justify-end">
                      <span className="inline-flex items-center gap-1 text-cyan-500 font-semibold hover:gap-2 transition-all duration-300">
                        Read More <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className={`text-xl ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              No blog posts found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;