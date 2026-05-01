"use client";

import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  ChevronDown,
  ChevronUp,
  Tag,
  CheckCircle,
  Info,
} from "lucide-react";

const Projects = () => {
  const { darkMode } = useTheme();
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: "p1",
      title: "Multi Purpose Robot",
      image: "/100.jpg",
      features: [
        "Object Following Robot",
        "Obstacle Avoiding Robot",
        "Bluetooth Control Robot",
        "Voice Command Robot",
      ],
      keywords: [
        "Arduino Uno",
        "Motor Driver Shield",
        "Bluetooth Module",
        "Ultrasonic and IR Sensors",
        "Servo and TT Gear Motors",
      ],
      description:
        "A multifunctional robot built with Arduino and a motor driver shield (L293D) for object following, obstacle avoidance, and Bluetooth control. The Arduino processes sensor data to control DC motors, while infrared/ultrasonic sensors enable object tracking and navigation. Bluetooth integration allows remote control via a mobile app, with voice command functionality through Arduino-developed apps and Google Assistant.",
      link: "",
      github: "",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "p10",
      title: "RUET Social",
      image: "/ruetsocial.png",
      features: [
        "Alumni Networking",
        "Real-Time Chat",
        "Post Interaction",
        "Email Verification",
      ],
      keywords: [
        "MERN Stack",
        "Tailwind CSS",
        "Socket.io",
        "JWT",
        "Nodemailer",
      ],
      description:
        "RUET Social is a MERN stack platform connecting RUET alumni and students. Users can join via verified RUET edumail (using Nodemailer), interact through posts (like, comment, save), and chat in real-time with Socket.io. The platform supports profile searches by ID or department, with JWT authentication for security and Tailwind CSS for styling.",
      link: "https://ruet-social.vercel.app/",
      github: "https://github.com/shoisob2004037/RUETSocial",
      color: "from-purple-600 to-blue-600",
    },
    {
      id: "p19",
      title: "CLASSFACE - Real-time Gender Detection with Voice",
      image: "/gender-detection.png",
      features: [
        "Real-time Gender Detection from Face Images",
        "MobileNetV2 Deep Learning Model",
        "Real-time Webcam Support",
        "Voice Announcements for Visually Impaired",
        "Multiple Face Detection & Announcement",
        "Auto Mode with Continuous Detection",
      ],
      keywords: [
        "Deep Learning",
        "MobileNetV2",
        "TensorFlow",
        "OpenCV",
        "Computer Vision",
        "Python",
        "Voice Assistant",
      ],
      description: `A deep learning application that detects gender (Male/Female) from facial images using MobileNetV2, with real-time webcam support and voice announcements for visually impaired users.

KEY FEATURES:
• Real-time gender classification with confidence scores
• Voice announcements: "Male with XX% confidence" or "Female with XX% confidence"
• Multiple face detection - announces each person individually
• Smart queuing system - never interrupts current speech
• Cooldown system prevents repeated announcements

CONTROLS:
• SPACE - Capture current frame and announce gender
• 'a' - Auto mode (continuous announcements every 3 seconds)
• 's' - Repeat last announcement
• 'c' - Clear speech queue
• 'v' - Toggle voice ON/OFF
• ESC - Exit

The model uses transfer learning with MobileNetV2 pre-trained on ImageNet, achieving high accuracy with relatively low computational requirements. Perfect for visually impaired users who need audio feedback for gender identification in social situations.`,
      link: "https://github.com/shoisob2004037/realtime-male-female-detection-and-speak",
      github:
        "https://github.com/shoisob2004037/realtime-male-female-detection-and-speak",
      color: "from-pink-500 to-rose-600",
    },
    {
      id: "p20",
      title: "Real-time Sign Language Detection (YOLOv5)",
      image: "/sign-language.png",
      features: [
        "Real-time Sign Language Recognition",
        "YOLOv5 Deep Learning Model",
        "Custom Trained on Real Images",
        "Detects: Yes, No, Hello, I Love You, Thank You",
        "Real-time Webcam Detection",
        "LabelImg Annotated Dataset",
      ],
      keywords: [
        "YOLOv5",
        "Deep Learning",
        "Computer Vision",
        "Sign Language",
        "Python",
        "OpenCV",
        "Object Detection",
      ],
      description: `A real-time sign language detection system built with YOLOv5, trained on custom-annotated images for recognizing essential sign language gestures.

TRAINED GESTURES:
• Yes - Affirmative response gesture
• No - Negative response gesture  
• Hello - Greeting gesture
• I Love You - Expressing love gesture
• Thank You - Gratitude gesture

PROJECT WORKFLOW:
1. Collected real images for each gesture category
2. Annotated images using LabelImg tool for YOLO format
3. Trained custom YOLOv5 model on annotated dataset
4. Deployed real-time detection via webcam
5. Bounding boxes with confidence scores for each detected gesture

This system helps bridge communication gaps for hearing-impaired individuals by automatically recognizing and interpreting sign language gestures in real-time.`,
      link: "https://github.com/shoisob2004037/realtime-sign-language-detection-yolo",
      github:
        "https://github.com/shoisob2004037/realtime-sign-language-detection-yolo",
      color: "from-blue-600 to-cyan-600",
    },
    {
      id: "p21",
      title: "Car Detection & Counting System (YOLO11 + Streamlit)",
      image: "/vh.png",
      features: [
        "Real-time Vehicle Detection & Counting",
        "YOLO11 Object Detection Model",
        "BotSORT Multi-Object Tracking",
        "Multi-Class Detection (Car, Motorcycle, Bus, Truck)",
        "Bi-directional Counting (Up/Down)",
        "Streamlit Web Interface",
        "Live Dashboard & Statistics",
        "Customizable Counting Line",
      ],
      keywords: [
        "YOLO11",
        "Streamlit",
        "Computer Vision",
        "BotSORT",
        "Vehicle Tracking",
        "Python",
        "OpenCV",
      ],
      description: `A comprehensive real-time vehicle detection and counting system built using YOLO11 and BotSORT tracking. Detects vehicles from video footage and counts how many cross a defined line — by vehicle type and direction of travel.

DETECTION CLASSES:
• Car (Class 2)
• Motorcycle (Class 3)
• Bus (Class 5)
• Truck (Class 7)

COUNTING LOGIC:
1. YOLO11 detects vehicles in each frame with bounding boxes
2. BotSORT assigns persistent track ID to each vehicle across frames
3. Centroid tracking calculates vehicle center point
4. 3-frame crossing buffer eliminates ghost/false counts
5. Direction determined: Above→Below = Down ↓, Below→Above = Up ↑
6. Each vehicle counted ONCE with permanent marking

FILES INCLUDED:
• car-counting.py - Simple single-direction car counter
• car-and-other-vehicle.py - Full multi-class, bi-directional counting with dashboard
• vehicle_counter_app.py - Streamlit web app with upload & settings

STREAMLIT APP FEATURES:
• Upload any traffic video (MP4, AVI, MOV, MKV)
• Adjust detection confidence threshold (0.10 – 0.90)
• Customize counting line position (10% – 90%)
• Live video streaming with real-time stats
• Per-class cards with directional breakdown
• Progress bar and final results table

This system is ideal for traffic monitoring, urban planning, and smart city applications.`,
      link: "https://github.com/shoisob2004037/streamlit_car_detection_and_counting_app",
      github:
        "https://github.com/shoisob2004037/streamlit_car_detection_and_counting_app",
      color: "from-yellow-600 to-orange-600",
    },
    {
      id: "p23",
      title: "Online Bus Ticket Booking with AI Chatbot",
      image: "/bus.png",
      features: [
        "Real-time bus ticket booking system",
        "AI-powered chatbot for ticket inquiries and assistance",
        "SSLCommerz payment gateway integration",
        "Live bus route information and schedule",
        "Real-time seat availability tracking",
        "User credit wallet system with admin approval",
        "Credit request and balance management",
        "Booking history and ticket download",
        "Admin dashboard for managing buses, routes, and bookings",
        "Email confirmation for bookings",
        "PDF ticket generation",
      ],
      keywords: [
        "MERN Stack",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "SSLCommerz",
        "AI Chatbot",
        "Tailwind CSS",
        "JWT",
      ],
      description:
        "A complete online bus ticket booking solution for Bangladesh with AI-powered chatbot assistance. The chatbot helps users find available buses, check seat availability, get fare information, and understand bus routes. Integrated SSLCommerz payment gateway ensures secure transactions. The credit wallet system allows users to request credit from admin, which is approved and added to their wallet for seamless bookings. Features include real-time seat selection, route management, schedule management, booking history, automated email confirmations, and PDF ticket generation. The admin dashboard provides full control over bus operators, routes, schedules, pricing, and user management. Built with MERN stack and designed for scalability.",
      link: "https://online-bus-ticket-booking-ai-chatbo-wheat.vercel.app",
      github: "https://github.com/shoisob2004037/online-bus-ticket-booking-AI-chatbot",
      color: "from-blue-600 to-cyan-600",
    },
    {
      id: "p22",
      title: "Pharmacy Management System (MERN Stack)",
      image: "/phar.png",
      features: [
        "Medicine inventory management (CRUD operations)",
        "Point of Sale with search and cart",
        "PDF invoice generation",
        "Sales history tracking",
        "Low stock alerts",
        "JWT authentication",
        "Sales analytics dashboard",
      ],
      keywords: [
        "MERN Stack",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "JWT",
        "PDF",
      ],
      description:
        "Full-stack MERN application for pharmacy management. Owners can manage medicine inventory, process sales with searchable POS, generate PDF invoices, track sales history, receive low stock alerts, and view sales analytics. Features secure JWT authentication and a responsive dashboard for complete pharmacy operations.",
      link: "https://pharmacy-management-system-78if.vercel.app",
      github: "https://github.com/shoisob2004037/Pharmacy-Management-System",
      color: "from-green-500 to-emerald-600",
    },
    {
      id: "p13",
      title: "Secure Notes - MERN Stack",
      image: "/notes.png",
      features: [
        "Create, Read, Update, Delete Notes",
        "Upload Images with Each Note",
        "Cloudinary Image Storage",
        "MongoDB Database Integration",
        "User Authentication System",
      ],
      keywords: [
        "MERN Stack",
        "Cloudinary",
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Tailwind CSS",
      ],
      description:
        "A full-stack note-taking application where users can securely create, edit, and delete notes with image attachments. Images are uploaded to Cloudinary, and URLs are stored in MongoDB. The app features user authentication, responsive design, and seamless CRUD operations. Perfect for personal note management with visual enhancements. User can import their notes as a JSON, PDF, Text file.",
      link: "https://notes-apps-eight.vercel.app",
      github: "https://github.com/shoisob2004037/Notes-Apps",
      color: "from-emerald-500 to-teal-600",
    },
    {
      id: "p14",
      title: "XSS Detection System Website",
      image: "/xssp.png",
      features: [
        "Real-time XSS Payload Detection",
        "Machine Learning & Deep Learning Models",
        "TF-IDF Vectorization",
        "Trained on Research Dataset",
        "Malicious/Benign Classification",
      ],
      keywords: [
        "Streamlit",
        "Machine Learning",
        "Deep Learning",
        "XSS Detection",
        "Cybersecurity",
        "Python",
        "TF-IDF",
      ],
      description:
        "A web-based XSS detection system built with Streamlit, trained on extensive research datasets. Users can input any XSS payload, which is converted using TF-IDF vectorization, then analyzed by ML/DL models to determine if it's malicious or benign. This efficient cybersecurity tool leverages research-grade data for accurate detection of obfuscated XSS attacks.",
      link: "https://xssdetectionwithobfuscated.streamlit.app",
      github:
        "https://github.com/shoisob2004037/streamlit_xss_detection_with_obfuscated",
      color: "from-red-600 to-orange-600",
    },
    {
      id: "p15",
      title: "Weather App (React Native)",
      image: "/weather-app.png",
      features: [
        "Real-time Weather Data",
        "OpenWeatherMap API Integration",
        "Current Weather Conditions",
        "5-Day Forecast",
        "Location-based Weather",
      ],
      keywords: [
        "React Native",
        "API Integration",
        "OpenWeatherMap",
        "Mobile App",
        "JavaScript",
        "Expo",
      ],
      description:
        "A React Native mobile application that provides real-time weather information using the OpenWeatherMap API. Users can check current weather conditions, temperature, humidity, wind speed, and 5-day forecasts for any location. The app features a clean, intuitive interface and responsive design for both iOS and Android devices.",
      link: "https://github.com/shoisob2004037/weather-apps-react-native",
      github: "https://github.com/shoisob2004037/weather-apps-react-native",
      color: "from-sky-500 to-blue-600",
    },
    {
      id: "p16",
      title: "Food Recipes App (React Native)",
      image: "/food-recipes.png",
      features: [
        "Browse Recipes by Category",
        "Recipe Details & Instructions",
        "API-based Data Fetching",
        "Search Functionality",
        "Save Favorite Recipes",
      ],
      keywords: [
        "React Native",
        "REST API",
        "Food Recipes",
        "Mobile Development",
        "JavaScript",
        "Expo",
      ],
      description:
        "A React Native mobile application for discovering and exploring food recipes. Users can browse recipes by category, view detailed instructions, ingredients, and cooking tips. The app fetches data from a recipe API, providing a rich collection of dishes from various cuisines. Perfect for cooking enthusiasts looking for inspiration.",
      link: "https://github.com/shoisob2004037/React-Native-Food-Recipes-App",
      github: "https://github.com/shoisob2004037/React-Native-Food-Recipes-App",
      color: "from-amber-500 to-orange-600",
    },
    {
      id: "p17",
      title: "Book Recommendation App (React Native)",
      image: "/books.png",
      features: [
        "User Authentication System",
        "Create & Share Book Recommendations",
        "Rate Books with Stars",
        "Upload Book Images",
        "Browse Community Recommendations",
      ],
      keywords: [
        "React Native",
        "MERN Stack",
        "MongoDB",
        "Authentication",
        "Book Reviews",
        "Mobile App",
      ],
      description:
        "A React Native mobile application where users can create accounts and share book recommendations with the community. Features include rating books with stars, uploading book images, writing reviews, and browsing recommendations from other readers. Built with MERN stack backend for secure data management and real-time updates.",
      link: "https://github.com/shoisob2004037",
      github: "https://github.com/shoisob2004037",
      color: "from-indigo-500 to-purple-600",
    },
    {
      id: "p18",
      title: "Medicine Corner - Pharmacy Website",
      image: "/medicine-corner.png",
      features: [
        "Medicine Information Database",
        "Price & Details Display",
        "Precautions & Side Effects",
        "Dosage Information",
        "Order Management System",
        "Firebase Authentication",
      ],
      keywords: [
        "React.js",
        "Firebase",
        "Authentication",
        "Medicine Database",
        "E-commerce",
        "Responsive Design",
      ],
      description:
        "A full-stack pharmacy information website built with React.js and Firebase. Users can browse medicines, view detailed information including price, precautions, side effects, and dosages. The platform features a secure login system, order placement functionality, and comprehensive medicine database. Perfect for accessing reliable medicine information online.",
      link: "https://github.com/shoisob2004037/fullstack-pharmacy-firebase",
      github: "https://github.com/shoisob2004037/fullstack-pharmacy-firebase",
      color: "from-green-600 to-emerald-600",
    },
    {
      id: "p9",
      title: "Hospital Management System",
      image: "/hos.png",
      features: [
        "Role-Based Dashboards",
        "Doctor Appointment System",
        "Admin Management",
        "JWT Authentication",
      ],
      keywords: ["MERN Stack", "Tailwind CSS", "JWT", "Cloudinary"],
      description:
        "A hospital management system built with the MERN stack, featuring role-based dashboards for admins, doctors, and patients. Admins can approve doctor registrations, manage users, and track hospital activities. Doctors can handle appointment requests, while patients can book appointments. JWT authentication ensures security, and Tailwind CSS provides a modern UI, with Cloudinary for image storage.",
      link: "https://hospital-management-ncs9.vercel.app",
      github: "https://github.com/shoisob2004037/Hospital-Management",
      color: "from-blue-600 to-indigo-600",
    },
    {
      id: "p7",
      title: "QuizMaster",
      image: "/quiz.png",
      features: [
        "Custom Quiz Creation",
        "AI-Generated Quiz Topics",
        "Pre-Made Quizzes",
        "Performance Tracking Dashboard",
      ],
      keywords: ["React.js", "MERN Stack", "Firebase", "Gemini API"],
      description:
        "QuizMaster is a dynamic platform built with the MERN stack and Firebase authentication. Users can sign up, log in, and create custom quizzes or generate unique quiz topics using an AI-powered feature. Pre-made quizzes are available for instant use, and all quizzes are saved to user profiles for later access. The interactive dashboard tracks performance with engaging score graphs.",
      link: "https://quiz-app-braf.vercel.app",
      github: "https://github.com/shoisob2004037/Quiz-App",
      color: "from-teal-500 to-green-500",
    },
    {
      id: "p11",
      title: "Hall Token System",
      image: "/hall.png",
      features: [
        "Token Booking System",
        "Admin Dashboard",
        "Token Management",
        "JWT Authentication",
      ],
      keywords: ["MERN Stack", "Tailwind CSS", "JWT"],
      description:
        "A MERN stack hall token system for university halls, allowing students to book daily tokens using a Tk-based system. Admins can manage tokens, refill user balances, and track all activities via a comprehensive dashboard. JWT authentication ensures secure access, and Tailwind CSS provides a sleek, responsive interface.",
      link: "https://hall-food-token-booking.vercel.app/home",
      github: "https://github.com/shoisob2004037/Hall-Food-Token-Booking",
      color: "from-green-600 to-teal-600",
    },
    {
      id: "p8",
      title: "Gadgets Shop",
      image: "/gad.png",
      features: [
        "Secure Authentication",
        "Admin Dashboard",
        "User Profile & Order History",
        "Responsive Design",
      ],
      keywords: ["HTML", "CSS", "Bootstrap", "Firebase", "React.js"],
      description:
        "A React.js-based e-commerce prototype for gadgets, utilizing Firebase for authentication, real-time data storage, and order management. It includes secure user login, an admin dashboard for managing orders and users, and a user profile page for tracking order history. The responsive design, built with Bootstrap, ensures compatibility across devices.",
      link: "https://gadgets-shop-zeta.vercel.app",
      github:
        "https://github.com/shoisob2004037/gadgets-shop-react-firebase-sample",
      color: "from-orange-500 to-yellow-500",
    },
    {
      id: "p12",
      title: "Memory Card Game",
      image: "/memory.png",
      features: [
        "Card Matching Gameplay",
        "Firebase Authentication",
        "Real-Time Score Tracking",
        "High Score Leaderboard",
      ],
      keywords: ["HTML", "CSS", "Javascript", "Firebase"],
      description:
        "A memory card matching game with Firebase authentication and real-time database integration. Players can log in to track their scores and compete on a high-score leaderboard. The game syncs scores across devices, offering a fun and engaging experience with secure user management.",
      link: "https://memory-game-seven-kohl.vercel.app",
      github: "https://github.com/shoisob2004037/memory-game",
      color: "from-pink-500 to-red-500",
    },
    {
      id: "p5",
      title: "Food Ordering App",
      image: "/p5.png",
      features: [
        "A lot of Home Made Food Items and Categories",
        "Add Cart System of Food",
        "Details of All Food and Categories",
        "Food Order Send",
      ],
      keywords: ["HTML", "CSS", "Javascript DOM"],
      description:
        "A food ordering platform for browsing homemade food items by category. It features a cart system for adding items, adjusting quantities, and viewing totals. Detailed food information includes ingredients, preparation time, and nutritional facts, with a streamlined order process for delivery and payment.",
      link: "https://shoisob2004037.github.io/food/",
      github: "#",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "p6",
      title: "Rock Paper Scissors Game",
      image: "/p6.png",
      features: [
        "Simple Rock Paper Scissors Game",
        "Account Login & Creating System by Firebase",
        "Save Game Scores to Account",
      ],
      keywords: ["HTML", "CSS", "Javascript DOM", "Firebase"],
      description:
        "A web-based Rock, Paper, Scissors game with Firebase authentication and real-time score tracking. Players can log in with Google to save scores to a Firebase database, enabling cross-device synchronization. Secure sign-in/out features and persistent game history enhance the user experience.",
      link: "https://shoisob2004037.github.io/rock-paper-scissors/",
      github: "#",
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: "p4",
      title: "Cooking Recipe App",
      image: "/p4.png",
      features: ["Unlimited Food Recipes", "Youtube Link of all Recipes"],
      keywords: ["HTML", "CSS", "Javascript DOM", "API Fetch"],
      description:
        "A dynamic web app for searching recipes by keywords like 'Egg' or 'Chicken.' Using a recipe API, it provides dish names, categories, ingredients, instructions, and YouTube video links. Users can browse example recipes or search for specific dishes, with detailed views for each recipe.",
      link: "https://shoisob2004037.github.io/cooking-recipe-app/",
      github: "#",
      color: "from-amber-500 to-red-500",
    },
    {
      id: "p3",
      title: "Weather Scout",
      image: "/w.png",
      features: ["Get Current Weather Info", "Get Weather Forecast"],
      keywords: ["HTML", "CSS", "Javascript DOM", "API Fetch"],
      description:
        "WeatherScout is a web app that fetches real-time weather data for any city using the OpenWeatherMap API. It displays temperature, humidity, wind speed, pressure, and weather descriptions. The user-friendly interface includes error handling for invalid city names and a weather-themed background.",
      link: "https://shoisob2004037.github.io/weather-scout/",
      github: "#",
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: "p2",
      title: "Photo Gallery Slider Web & App",
      image: "/Screenshot 2024-07-28 204650.png",
      features: [
        "Home Page and Nav Menu",
        "Natural Photo Gallery",
        "Macro Photo Gallery",
        "Night & Astro Photo Gallery",
        "Web to Android Apps Converter",
      ],
      keywords: ["HTML", "CSS with Bootstrap", "Javascript"],
      description:
        "An interactive website featuring a photo slider gallery divided into Nature, Macro, and Astro/Night photography sections. It showcases personally captured and edited photographs with scrollable galleries, navigation buttons, and enhanced viewing options. The website is also converted into a mobile app for broader accessibility.",
      link: "https://shoisob2004037.github.io/photo-slider-portfolio-/",
      github: "#",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const handleProjectClick = (id) => {
    setActiveProject(id === activeProject ? null : id);
    if (id !== activeProject) {
      setTimeout(() => {
        const element = document.getElementById(`details-${id}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  return (
    <div
      className={`min-h-screen ${darkMode ? "bg-gray-900" : "bg-gradient-to-b from-cyan-50 to-white"}`}
    >
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1
            className={`text-4xl font-bold ${darkMode ? "text-white" : "text-gray-900"} mb-4`}
          >
            <span className="relative inline-block">
              My Projects
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></span>
            </span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Explore my portfolio of web development, mobile apps, AI/ML, and
            engineering projects. Each project showcases different skills and
            technologies.
          </p>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              id={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                boxShadow: darkMode
                  ? "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4)"
                  : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className={`
                rounded-xl overflow-hidden shadow-lg transform transition-all duration-300
                ${activeProject === project.id ? `ring-4 ring-cyan-500` : ""}
                ${darkMode ? "bg-gray-800" : "bg-white"}
              `}
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div
                  className={`absolute top-3 right-3 bg-gradient-to-r ${project.color} text-white text-xs px-3 py-1 rounded-full`}
                >
                  {project.keywords[0]}
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold mb-3">{project.title}</h2>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.keywords.slice(0, 3).map((keyword, idx) => (
                    <span
                      key={idx}
                      className={`text-xs px-2 py-1 rounded-full flex items-center gap-1 ${
                        darkMode
                          ? "bg-gray-700 text-gray-300"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      <Tag className="w-3 h-3" />
                      {keyword}
                    </span>
                  ))}
                  {project.keywords.length > 3 && (
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        darkMode
                          ? "bg-gray-700 text-gray-300"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      +{project.keywords.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleProjectClick(project.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
                      darkMode
                        ? "bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800"
                        : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                    } text-white transition-all duration-300 shadow-md hover:shadow-lg`}
                  >
                    {activeProject === project.id ? (
                      <>
                        <ChevronUp className="w-4 h-4" />
                        Hide
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4" />
                        Details
                      </>
                    )}
                  </motion.button>

                  <div className="flex gap-2">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-3 py-2 rounded-lg ${
                        darkMode
                          ? "bg-gray-700 hover:bg-gray-600"
                          : "bg-gray-200 hover:bg-gray-300"
                      } transition-all duration-300 flex items-center gap-1 shadow-sm hover:shadow`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="hidden sm:inline">Visit</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-3 py-2 rounded-lg ${
                        darkMode
                          ? "bg-gray-700 hover:bg-gray-600"
                          : "bg-gray-200 hover:bg-gray-300"
                      } transition-all duration-300 flex items-center gap-1 shadow-sm hover:shadow`}
                    >
                      <Github className="w-4 h-4" />
                      <span className="hidden sm:inline">GitHub</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Details Section */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              id={`details-${activeProject}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={`max-w-5xl mx-auto mb-16 rounded-xl overflow-hidden shadow-xl ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              {projects
                .filter((p) => p.id === activeProject)
                .map((project) => (
                  <div key={`details-${project.id}`} className="animate-fadeIn">
                    <div
                      className={`h-64 bg-gradient-to-r ${project.color} relative`}
                    >
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover object-center opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                        <div className="p-8">
                          <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-3xl font-bold text-white mb-2"
                          >
                            {project.title}
                          </motion.h2>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-wrap gap-2"
                          >
                            {project.keywords.map((keyword, idx) => (
                              <span
                                key={idx}
                                className="text-xs px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm"
                              >
                                {keyword}
                              </span>
                            ))}
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-cyan-500">
                            <CheckCircle className="w-5 h-5" />
                            Project Features
                          </h3>
                          <ul className="space-y-3">
                            {project.features.map((feature, index) => (
                              <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.3,
                                  delay: 0.5 + index * 0.1,
                                }}
                                className="flex items-start"
                              >
                                <CheckCircle className="text-green-500 mt-1 mr-2 w-4 h-4 flex-shrink-0" />
                                <span>{feature}</span>
                              </motion.li>
                            ))}
                          </ul>

                          <h3 className="text-xl font-semibold mt-8 mb-4 flex items-center gap-2 text-cyan-500">
                            <Tag className="w-5 h-5" />
                            Technologies Used
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {project.keywords.map((keyword, index) => (
                              <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                  duration: 0.3,
                                  delay: 0.7 + index * 0.05,
                                }}
                                className={`px-3 py-1 rounded-full ${
                                  darkMode
                                    ? "bg-gray-700 text-gray-300"
                                    : "bg-gray-200 text-gray-700"
                                }`}
                              >
                                {keyword}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-cyan-500">
                            <Info className="w-5 h-5" />
                            Project Description
                          </h3>
                          <div className="text-justify leading-relaxed whitespace-pre-line">
                            {project.description}
                          </div>

                          <div className="flex flex-wrap gap-4 mt-8">
                            <motion.a
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg ${
                                darkMode
                                  ? "bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800"
                                  : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                              } text-white transition-all duration-300 shadow-lg hover:shadow-xl`}
                            >
                              <ExternalLink className="w-4 h-4" />
                              Visit Project
                            </motion.a>
                            <motion.a
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg ${
                                darkMode
                                  ? "bg-gray-700 hover:bg-gray-600"
                                  : "bg-gray-200 hover:bg-gray-300"
                              } transition-all duration-300 shadow-md hover:shadow-lg`}
                            >
                              <Github className="w-4 h-4" />
                              View GitHub
                            </motion.a>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
