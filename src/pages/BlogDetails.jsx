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
  ChevronRight,
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
        const response = await fetch("/data/blogPosts.json");
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setAllPosts(data.posts || []);
        const foundPost = data.posts.find((p) => p.id === parseInt(id));
        setPost(foundPost || null);
      } catch (error) {
        console.error("Error loading blog post:", error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogPosts();
  }, [id]);

  const currentIndex = allPosts.findIndex((p) => p.id === parseInt(id));
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-2 border-[var(--border-color)] border-t-[var(--accent)] mx-auto mb-4"></div>
          <p className="text-[var(--text-secondary)]">Loading post...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)]">
        <div className="text-center">
          <h2 className="font-serif text-2xl font-bold mb-4 text-[var(--text-primary)]">
            Post Not Found
          </h2>
          <p className="mb-6 text-[var(--text-secondary)]">
            The blog post you're looking for doesn't exist.
          </p>
          <Link to="/blogs" className="btn-academic">
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm border border-[var(--border-color)] bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:border-[var(--accent)] transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--accent)] text-white">
              {post.category}
            </span>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm mb-6 text-[var(--text-muted)]">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-[var(--bg-tertiary)] text-[var(--accent)]"
              >
                <Tag className="w-3 h-3" />#{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 p-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] mb-6">
            <img
              src={post.authorImage}
              alt={post.author}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-serif font-semibold text-[var(--text-primary)]">
                {post.author}
              </p>
              <p className="text-sm text-[var(--text-muted)]">
                MERN Stack Developer & AI Researcher
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8 rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-[var(--border-color)]"
        >
          {post.github && (
            <a
              href={post.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-academic-outline"
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
              className="btn-academic"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-between items-center mt-12 pt-8 border-t border-[var(--border-color)]"
        >
          {prevPost ? (
            <Link
              to={`/blogs/${prevPost.id}`}
              className="flex items-center gap-2 px-4 py-2 rounded-md text-sm border border-[var(--border-color)] bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:border-[var(--accent)]"
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
              className="flex items-center gap-2 px-4 py-2 rounded-md text-sm border border-[var(--border-color)] bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:border-[var(--accent)]"
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
        .blog-post-content { font-size: 1.0625rem; line-height: 1.8; color: var(--text-secondary); }
        .blog-post-content h2 { font-family: var(--font-serif); font-size: 1.6rem; font-weight: 700; margin: 2rem 0 1rem; color: var(--text-primary); }
        .blog-post-content h3 { font-family: var(--font-serif); font-size: 1.3rem; font-weight: 600; margin: 1.5rem 0 0.75rem; color: var(--text-primary); }
        .blog-post-content p { margin-bottom: 1.25rem; color: var(--text-secondary); }
        .blog-post-content ul, .blog-post-content ol { margin-bottom: 1.25rem; padding-left: 2rem; }
        .blog-post-content li { margin-bottom: 0.5rem; color: var(--text-secondary); }
        .blog-post-content pre { background: var(--bg-secondary); padding: 1rem; border-radius: 6px; overflow-x: auto; margin-bottom: 1.25rem; border: 1px solid var(--border-color); }
        .blog-post-content code { font-family: monospace; font-size: 0.875rem; color: var(--accent); }
        .blog-post-content a { color: var(--accent); text-decoration: underline; }
        .blog-post-content img { border-radius: 6px; margin: 1.5rem 0; }
        .blog-post-content blockquote { border-left: 4px solid var(--accent); padding: 0.75rem 1rem; background: var(--bg-secondary); border-radius: 4px; margin: 1.5rem 0; }
        .blog-post-content table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; }
        .blog-post-content th, .blog-post-content td { border: 1px solid var(--border-color); padding: 0.75rem; text-align: center; }
        .blog-post-content th { background: var(--bg-secondary); font-weight: bold; }
        .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>
    </div>
  );
};

export default BlogDetails;
