// pages/BlogDetails.jsx
"use client";

import { useParams, useNavigate, Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  Tag, 
  ArrowLeft, 
  Github, 
  ExternalLink, 
  Heart, 
  MessageCircle, 
  Share2, 
  Bookmark, 
  ChevronLeft, 
  ChevronRight,
  User
} from "lucide-react";
import { useState, useEffect } from "react";

// Full blog posts data with detailed content
const blogPostsData = {
  1: {
    id: 1,
    title: "Building a Real-time Vehicle Counting System with YOLO11",
    date: "April 15, 2026",
    readTime: "10 min read",
    category: "Computer Vision",
    tags: ["YOLO", "Python", "Streamlit", "AI", "Computer Vision"],
    image: "/car-detection.png",
    author: "Mahadi Hasan Shaisob",
    authorImage: "/dp.jpg",
    content: `
      <div class="blog-content">
        <h2>Introduction</h2>
        <p>Vehicle detection and counting is a crucial task in traffic monitoring, urban planning, and smart city applications. Traditional methods using inductive loops or infrared sensors are expensive to install and maintain. Computer vision offers a cost-effective alternative that can be deployed using existing CCTV infrastructure.</p>
        
        <p>In this comprehensive guide, I'll walk you through how I built a real-time vehicle counting system using YOLO11 and Streamlit. This system can detect multiple vehicle types, count them in both directions, and provide real-time analytics through a beautiful web interface.</p>

        <img src="/car-detection-banner.png" alt="Vehicle Detection System Overview" class="blog-image" />

        <h2>The Problem Statement</h2>
        <p>Traditional vehicle counting methods face several challenges:</p>
        <ul>
          <li><strong>High installation costs</strong> - Physical sensors require road disruption</li>
          <li><strong>Limited vehicle types</strong> - Can't distinguish between cars, buses, motorcycles</li>
          <li><strong>Single direction only</strong> - Most systems only count one direction</li>
          <li><strong>Maintenance issues</strong> - Physical sensors degrade over time</li>
        </ul>

        <p>My goal was to create a software-only solution that could:</p>
        <ul>
          <li>Detect 4 vehicle types: Cars, Motorcycles, Buses, and Trucks</li>
          <li>Count vehicles moving in both directions (Up and Down)</li>
          <li>Work with standard CCTV footage or uploaded videos</li>
          <li>Provide real-time statistics and visualizations</li>
        </ul>

        <h2>Choosing the Right Technology Stack</h2>
        
        <h3>Why YOLO11?</h3>
        <p>YOLO (You Only Look Once) is a state-of-the-art, real-time object detection system. I chose YOLO11 for several reasons:</p>
        <ul>
          <li><strong>Speed</strong> - Processes at 30+ FPS on standard GPU</li>
          <li><strong>Accuracy</strong> - Excellent mAP scores on COCO dataset</li>
          <li><strong>Pre-trained models</strong> - Already trained on vehicle classes</li>
          <li><strong>Easy integration</strong> - Simple Python API</li>
        </ul>

        <h3>Why BotSORT for Tracking?</h3>
        <p>BotSORT is a robust multi-object tracking algorithm that:</p>
        <ul>
          <li>Maintains consistent IDs across frames</li>
          <li>Handles occlusions gracefully</li>
          <li>Low computational overhead</li>
          <li>Excellent for traffic scenarios</li>
        </ul>

        <h3>Why Streamlit for the Interface?</h3>
        <p>Streamlit allowed me to quickly build an interactive web interface with:</p>
        <ul>
          <li>Video upload functionality</li>
          <li>Real-time parameter adjustment</li>
          <li>Live statistics dashboard</li>
          <li>Progress tracking</li>
        </ul>

        <h2>Implementation Details</h2>
        
        <h3>Step 1: Setting Up YOLO11 for Vehicle Detection</h3>
        <pre><code>from ultralytics import YOLO
import cv2

# Load pre-trained YOLO11 model
model = YOLO('yolo11s.pt')

# Vehicle classes from COCO dataset
VEHICLE_CLASSES = {
    2: 'Car',
    3: 'Motorcycle', 
    5: 'Bus',
    7: 'Truck'
}

def detect_vehicles(frame):
    results = model(frame, conf=0.5)
    detections = []
    for r in results:
        boxes = r.boxes
        for box in boxes:
            cls = int(box.cls[0])
            if cls in VEHICLE_CLASSES:
                x1, y1, x2, y2 = box.xyxy[0].tolist()
                conf = float(box.conf[0])
                detections.append({
                    'bbox': [x1, y1, x2, y2],
                    'class': VEHICLE_CLASSES[cls],
                    'class_id': cls,
                    'confidence': conf
                })
    return detections</code></pre>

        <h3>Step 2: Implementing BotSORT Tracking</h3>
        <pre><code>from ultralytics import YOLO
from ultralytics.utils.ops import non_max_suppression

# Initialize BotSORT tracker
tracker = BotSORT(
    track_high_thresh=0.5,
    track_low_thresh=0.4,
    new_track_thresh=0.6,
    match_thresh=0.8
)

def update_tracks(detections, frame):
    # Format detections for tracker
    dets = []
    for det in detections:
        x1, y1, x2, y2 = det['bbox']
        w = x2 - x1
        h = y2 - y1
        dets.append([x1, y1, w, h, det['confidence'], det['class_id']])
    
    # Update tracks
    tracks = tracker.update(np.array(dets), frame)
    return tracks</code></pre>

        <h3>Step 3: The Counting Logic</h3>
        <p>The core counting logic tracks each vehicle's centroid position relative to a counting line.</p>

        <pre><code>class VehicleCounter:
    def __init__(self, line_position=0.66):
        self.line_y = line_position
        self.down_count = {2: 0, 3: 0, 5: 0, 7: 0}
        self.up_count = {2: 0, 3: 0, 5: 0, 7: 0}
        self.track_buffer = {}
    
    def count_vehicle(self, track_id, class_id, centroid_y):
        current_side = -1 if centroid_y < self.line_y else 1
        
        if track_id not in self.track_buffer:
            self.track_buffer[track_id] = {'sides': [], 'counted': False, 'last_side': None}
        
        buffer = self.track_buffer[track_id]
        buffer['sides'].append(current_side)
        if len(buffer['sides']) > 3:
            buffer['sides'].pop(0)
        
        if len(buffer['sides']) == 3 and not buffer['counted']:
            if all(s == buffer['sides'][0] for s in buffer['sides']):
                if buffer['last_side'] is not None and buffer['last_side'] != buffer['sides'][0]:
                    if buffer['sides'][0] == 1:
                        self.down_count[class_id] += 1
                    else:
                        self.up_count[class_id] += 1
                    buffer['counted'] = True
                buffer['last_side'] = buffer['sides'][0]
        
        return self.down_count, self.up_count</code></pre>

        <h2>Results and Performance</h2>
        
        <h3>Accuracy Metrics</h3>
        <p>After extensive testing on diverse traffic videos, the system achieved:</p>
        <ul>
          <li><strong>Overall accuracy:</strong> 95.8%</li>
          <li><strong>Car detection:</strong> 97.2%</li>
          <li><strong>Motorcycle detection:</strong> 91.5%</li>
          <li><strong>Bus detection:</strong> 94.3%</li>
          <li><strong>Truck detection:</strong> 93.8%</li>
        </ul>

        <h2>Conclusion</h2>
        <p>This project demonstrates the power of modern computer vision for solving real-world traffic monitoring challenges. The complete source code is available on GitHub.</p>
      </div>
    `,
    github: "https://github.com/shoisob2004037/streamlit_car_detection_and_counting_app",
    liveDemo: "https://github.com/shoisob2004037/streamlit_car_detection_and_counting_app"
  },
  2: {
    id: 2,
    title: "My IEEE Paper Journey: DeepGuard-XSS Detection System",
    date: "March 20, 2026",
    readTime: "8 min read",
    category: "Research",
    tags: ["XSS", "Deep Learning", "Cybersecurity", "IEEE", "Research"],
    image: "/xssp.png",
    author: "Mahadi Hasan Shaisob",
    authorImage: "/dp.jpg",
    content: `
      <div class="blog-content">
        <h2>The Motivation Behind DeepGuard-XSS</h2>
        <p>Cross-site scripting (XSS) remains one of the most prevalent web security vulnerabilities, affecting nearly 80% of websites according to OWASP. Traditional detection methods struggle to identify obfuscated attack payloads.</p>
        
        <p>This motivated me to develop a more robust solution that could identify both traditional and obfuscated XSS attacks with high accuracy, using the power of deep learning and large language models.</p>

        <h2>Dataset Construction</h2>
        <p>A critical challenge in XSS research is the lack of comprehensive, labeled datasets containing obfuscated payloads.</p>
        
        <h3>Data Collection</h3>
        <p>I aggregated XSS payloads from multiple public sources including XSS Payload Lists, academic research datasets, and real-world XSS attacks.</p>

        <h3>LLM-driven Obfuscation with CodeT5</h3>
        <p>To simulate real-world evasive techniques, I used CodeT5 to generate obfuscated variants.</p>

        <h2>Proposed Architectures</h2>
        
        <h3>1. Character-level CNN Model</h3>
        <p>The CNN model processes characters at the byte level, capturing local patterns in XSS payloads.</p>
        
        <h3>2. BiLSTM Model</h3>
        <p>The BiLSTM architecture captures long-range dependencies and context from both directions.</p>

        <h2>Results</h2>
        
        <h3>Performance Metrics</h3>
        <table class="results-table">
          <tr>
            <th>Model</th>
            <th>Accuracy</th>
            <th>Precision</th>
            <th>Recall</th>
            <th>F1-Score</th>
          </tr>
          <tr>
            <td>BiLSTM</td>
            <td>98.1%</td>
            <td>97.8%</td>
            <td>98.3%</td>
            <td>98.0%</td>
          </tr>
          <tr>
            <td>CNN</td>
            <td>97.22%</td>
            <td>96.9%</td>
            <td>97.5%</td>
            <td>97.2%</td>
          </tr>
        </table>

        <h2>Publication Journey</h2>
        <p>The paper was presented at ICRIMST 2026 in Rajshahi, Bangladesh and published on IEEE Xplore on March 16, 2026.</p>

        <div class="highlight-box">
          <h4>📄 Paper Information</h4>
          <p><strong>Title:</strong> DeepGuard-XSS: Leveraging Large Language Models with CNN–BiLSTM for Robust Detection of Obfuscated XSS Attacks</p>
          <p><strong>IEEE Xplore:</strong> <a href="https://ieeexplore.ieee.org/document/11429351">View on IEEE Xplore</a></p>
        </div>
      </div>
    `,
    github: "https://github.com/shoisob2004037/streamlit_xss_detection_with_obfuscated",
    liveDemo: "https://xssdetectionwithobfuscated.streamlit.app"
  }
};

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { darkMode } = useTheme();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const postData = blogPostsData[id];
      if (postData) {
        setPost(postData);
      }
      setLoading(false);
    }, 100);
  }, [id]);

  // Find next and previous posts
  const postIds = Object.keys(blogPostsData).map(Number);
  const currentIndex = postIds.indexOf(Number(id));
  const prevPostId = currentIndex > 0 ? postIds[currentIndex - 1] : null;
  const nextPostId = currentIndex < postIds.length - 1 ? postIds[currentIndex + 1] : null;

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
          className={`blog-post-content ${darkMode ? "dark-mode" : ""}`}
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
          {prevPostId ? (
            <Link
              to={`/blogs/${prevPostId}`}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              Previous Post
            </Link>
          ) : (
            <div></div>
          )}
          
          {nextPostId ? (
            <Link
              to={`/blogs/${nextPostId}`}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              Next Post
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
      `}</style>
    </div>
  );
};

export default BlogDetails;