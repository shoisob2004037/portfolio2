// pages/Blogs.jsx
"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag, ChevronRight, Search } from "lucide-react";

const Blogs = () => {
  const { darkMode } = useTheme();
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Web Development", "Computer Vision", "Research", "AI/ML"];

  // Fetch blog posts from JSON file
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        // Use absolute path from public folder
        const response = await fetch('/data/blogPosts.json');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setBlogPosts(data.posts || []);
      } catch (error) {
        console.error('Error loading blog posts:', error);
        // Fallback to empty array
        setBlogPosts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogPosts();
  }, []);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? "bg-gray-900" : "bg-gradient-to-b from-cyan-50 to-white"}`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-500 mx-auto mb-4"></div>
          <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>Loading blog posts...</p>
        </div>
      </div>
    );
  }

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
          <div className="relative">
            <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${darkMode ? "text-gray-400" : "text-gray-500"}`} />
            <input
              type="text"
              placeholder="Search blogs by title, content, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-12 pr-4 py-4 rounded-xl ${
                darkMode
                  ? "bg-gray-800 border border-gray-700 text-white focus:border-cyan-500"
                  : "bg-white border border-gray-200 text-gray-900 focus:border-cyan-500"
              } focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300`}
            />
          </div>
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
        {filteredPosts.length > 0 ? (
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
                      <p className={`mb-4 leading-relaxed line-clamp-3 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
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
                        {post.tags.length > 3 && (
                          <span className={`text-xs px-2 py-1 rounded-full ${darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-600"}`}>
                            +{post.tags.length - 3} more
                          </span>
                        )}
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
        ) : (
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