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

  const categories = [
    "All",
    "Web Development",
    "Computer Vision",
    "Research",
    "AI/ML",
  ];

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch("/data/blogPosts.json");
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setBlogPosts(data.posts || []);
      } catch (error) {
        console.error("Error loading blog posts:", error);
        setBlogPosts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogPosts();
  }, []);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-2 border-[var(--border-color)] border-t-[var(--accent)] mx-auto mb-4"></div>
          <p className="text-[var(--text-secondary)]">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="section-label mb-3 inline-flex">
            <Tag className="w-3.5 h-3.5" />
            <span>Blog</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            My Blog
          </h1>
          <div className="academic-divider"></div>
          <p className="text-base max-w-2xl mx-auto text-[var(--text-secondary)] mt-4">
            Sharing my learning journey, project deep-dives, and technical
            insights
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
            <input
              type="text"
              placeholder="Search blogs by title, content, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="academic-input pl-11"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 border ${
                selectedCategory === category
                  ? "bg-[var(--accent)] text-white border-[var(--accent)]"
                  : "bg-[var(--bg-elevated)] text-[var(--text-secondary)] border-[var(--border-color)] hover:border-[var(--accent)]"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {filteredPosts.length > 0 ? (
          <div className="space-y-6">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="academic-card overflow-hidden p-0"
              >
                <Link to={`/blogs/${post.id}`} className="block">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/5 h-56 md:h-auto overflow-hidden bg-[var(--bg-secondary)]">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 p-6">
                      <div className="mb-3">
                        <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-[var(--accent-light)] text-[var(--accent)] border border-[var(--border-color)]">
                          {post.category}
                        </span>
                      </div>

                      <h2 className="font-serif text-xl md:text-2xl font-bold mb-3 text-[var(--text-primary)]">
                        {post.title}
                      </h2>

                      <div className="flex flex-wrap items-center gap-4 text-xs mb-4 text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>

                      <p className="mb-4 text-sm leading-relaxed line-clamp-3 text-[var(--text-secondary)]">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--text-muted)]"
                          >
                            <Tag className="w-2.5 h-2.5" />#{tag}
                          </span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="text-[10px] px-2 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--text-muted)]">
                            +{post.tags.length - 3} more
                          </span>
                        )}
                      </div>

                      <div className="flex justify-end">
                        <span className="inline-flex items-center gap-1 text-[var(--accent)] text-sm font-semibold">
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
            <p className="text-lg text-[var(--text-muted)]">
              No blog posts found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
