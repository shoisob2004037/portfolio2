// pages/BlogDetails.jsx
"use client";

import { useParams, Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  Tag, 
  ArrowLeft, 
  Github, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight
} from "lucide-react";
import { useState, useEffect } from "react";

const BlogDetails = () => {
  const { id } = useParams();
  const { darkMode } = useTheme();
  const [post, setPost] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('/data/blogPosts.json');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setAllPosts(data.posts || []);
        const foundPost = data.posts.find(p => p.id === parseInt(id));
        setPost(foundPost || null);
      } catch (error) {
        console.error('Error loading blog post:', error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogPosts();
  }, [id]);

  // Find next and previous posts
  const currentIndex = allPosts.findIndex(p => p.id === parseInt(id));
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? "bg-gray-900" : "bg-gradient-to-b from-cyan-50 to-white"}`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-500 mx-auto mb-4"></div>
          <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>Loading post...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? "bg-gray-900" : "bg-gradient-to-b from-cyan-50 to-white"}`}>
        <div className="text-center">
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>Post Not Found</h2>
          <p className={`mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>The blog post you're looking for doesn't exist.</p>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900" : "bg-gradient-to-b from-cyan-50 to-white"}`}>
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/blogs"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              darkMode
                ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
              {post.category}
            </span>
          </div>
          
          <h1 className={`text-3xl md:text-5xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
            <span className="flex items-center gap-1 text-cyan-500">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1 text-cyan-500">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full ${
                  darkMode
                    ? "bg-gray-800 text-cyan-400"
                    : "bg-cyan-100 text-cyan-700"
                }`}
              >
                <Tag className="w-3 h-3" />
                #{tag}
              </span>
            ))}
          </div>

          {/* Author Info */}
          <div className={`flex items-center gap-4 p-4 rounded-xl mb-6 ${
            darkMode ? "bg-gray-800" : "bg-gray-50"
          }`}>
            <img
              src={post.authorImage}
              alt={post.author}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
                {post.author}
              </p>
              <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                MERN Stack Developer & AI Researcher
              </p>
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8 rounded-xl overflow-hidden shadow-xl"
        >
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          {post.github && (
            <a
              href={post.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
          )}
          {post.liveDemo && (
            <a
              href={post.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </motion.div>

        {/* Navigation between posts */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          {prevPost ? (
            <Link
              to={`/blogs/${prevPost.id}`}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Link>
          ) : (
            <div></div>
          )}
          
          {nextPost ? (
            <Link
              to={`/blogs/${nextPost.id}`}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Link>
          ) : (
            <div></div>
          )}
        </motion.div>
      </article>

      <style>{`
        .blog-content {
          font-size: 1.125rem;
          line-height: 1.75;
        }
        
        .blog-content h2 {
          font-size: 1.875rem;
          font-weight: bold;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: ${darkMode ? '#fff' : '#111827'};
        }
        
        .blog-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: ${darkMode ? '#e5e7eb' : '#374151'};
        }
        
        .blog-content p {
          margin-bottom: 1.25rem;
          color: ${darkMode ? '#d1d5db' : '#4b5563'};
        }
        
        .blog-content ul, .blog-content ol {
          margin-bottom: 1.25rem;
          padding-left: 2rem;
        }
        
        .blog-content li {
          margin-bottom: 0.5rem;
          color: ${darkMode ? '#d1d5db' : '#4b5563'};
        }
        
        .blog-content pre {
          background: ${darkMode ? '#1f2937' : '#f3f4f6'};
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin-bottom: 1.25rem;
        }
        
        .blog-content code {
          font-family: monospace;
          font-size: 0.875rem;
          color: ${darkMode ? '#fbbf24' : '#dc2626'};
        }
        
        .blog-image {
          width: 100%;
          border-radius: 0.5rem;
          margin: 1.5rem 0;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        .highlight-box {
          background: ${darkMode ? '#1e293b' : '#e0f2fe'};
          border-left: 4px solid #06b6d4;
          padding: 1rem;
          border-radius: 0.5rem;
          margin: 1.5rem 0;
        }
        
        .results-table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
        }
        
        .results-table th,
        .results-table td {
          border: 1px solid ${darkMode ? '#374151' : '#e5e7eb'};
          padding: 0.75rem;
          text-align: center;
        }
        
        .results-table th {
          background: ${darkMode ? '#1f2937' : '#f3f4f6'};
          font-weight: bold;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default BlogDetails;