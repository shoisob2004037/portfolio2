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

  // --- FULL PROJECT DATA (unchanged) ---
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
      description: `A deep learning application that detects gender (Male/Female) from facial images using MobileNetV2, with real-time webcam support and voice announcements for visually impaired users.\n\nKEY FEATURES:\n• Real-time gender classification with confidence scores\n• Voice announcements: "Male with XX% confidence" or "Female with XX% confidence"\n• Multiple face detection - announces each person individually\n• Smart queuing system - never interrupts current speech\n• Cooldown system prevents repeated announcements\n\nCONTROLS:\n• SPACE - Capture current frame and announce gender\n• 'a' - Auto mode (continuous announcements every 3 seconds)\n• 's' - Repeat last announcement\n• 'c' - Clear speech queue\n• 'v' - Toggle voice ON/OFF\n• ESC - Exit\n\nThe model uses transfer learning with MobileNetV2 pre-trained on ImageNet, achieving high accuracy with relatively low computational requirements. Perfect for visually impaired users who need audio feedback for gender identification in social situations.`,
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
      description: `A real-time sign language detection system built with YOLOv5, trained on custom-annotated images for recognizing essential sign language gestures.\n\nTRAINED GESTURES:\n• Yes - Affirmative response gesture\n• No - Negative response gesture  \n• Hello - Greeting gesture\n• I Love You - Expressing love gesture\n• Thank You - Gratitude gesture\n\nPROJECT WORKFLOW:\n1. Collected real images for each gesture category\n2. Annotated images using LabelImg tool for YOLO format\n3. Trained custom YOLOv5 model on annotated dataset\n4. Deployed real-time detection via webcam\n5. Bounding boxes with confidence scores for each detected gesture\n\nThis system helps bridge communication gaps for hearing-impaired individuals by automatically recognizing and interpreting sign language gestures in real-time.`,
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
      description: `A comprehensive real-time vehicle detection and counting system built using YOLO11 and BotSORT tracking. Detects vehicles from video footage and counts how many cross a defined line — by vehicle type and direction of travel.\n\nDETECTION CLASSES:\n• Car (Class 2)\n• Motorcycle (Class 3)\n• Bus (Class 5)\n• Truck (Class 7)\n\nCOUNTING LOGIC:\n1. YOLO11 detects vehicles in each frame with bounding boxes\n2. BotSORT assigns persistent track ID to each vehicle across frames\n3. Centroid tracking calculates vehicle center point\n4. 3-frame crossing buffer eliminates ghost/false counts\n5. Direction determined: Above→Below = Down ↓, Below→Above = Up ↑\n6. Each vehicle counted ONCE with permanent marking\n\nFILES INCLUDED:\n• car-counting.py - Simple single-direction car counter\n• car-and-other-vehicle.py - Full multi-class, bi-directional counting with dashboard\n• vehicle_counter_app.py - Streamlit web app with upload & settings\n\nSTREAMLIT APP FEATURES:\n• Upload any traffic video (MP4, AVI, MOV, MKV)\n• Adjust detection confidence threshold (0.10 – 0.90)\n• Customize counting line position (10% – 90%)\n• Live video streaming with real-time stats\n• Per-class cards with directional breakdown\n• Progress bar and final results table\n\nThis system is ideal for traffic monitoring, urban planning, and smart city applications.`,
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
      github:
        "https://github.com/shoisob2004037/online-bus-ticket-booking-AI-chatbot",
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
        if (element)
          element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

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
            <Tag className="w-3.5 h-3.5" />
            <span>Portfolio</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            My Projects
          </h1>
          <div className="academic-divider"></div>
          <p className="text-base max-w-2xl mx-auto text-[var(--text-secondary)] mt-4">
            Explore my portfolio of web development, mobile apps, AI/ML, and
            engineering projects. Each project showcases different skills and
            technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              id={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`academic-card overflow-hidden p-0 ${activeProject === project.id ? "border-[var(--accent)]" : ""}`}
            >
              <div className="h-44 relative overflow-hidden bg-[var(--bg-secondary)]">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-3 right-3 bg-[var(--accent)] text-white text-xs px-2.5 py-1 rounded-full font-medium">
                  {project.keywords[0]}
                </div>
              </div>

              <div className="p-5">
                <h2 className="font-serif text-base font-bold mb-3 text-[var(--text-primary)] line-clamp-2">
                  {project.title}
                </h2>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.keywords.slice(0, 3).map((keyword, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1 bg-[var(--bg-tertiary)] text-[var(--text-muted)]"
                    >
                      <Tag className="w-2.5 h-2.5" />
                      {keyword}
                    </span>
                  ))}
                  {project.keywords.length > 3 && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--bg-tertiary)] text-[var(--text-muted)]">
                      +{project.keywords.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center gap-2">
                  <button
                    onClick={() => handleProjectClick(project.id)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors"
                  >
                    {activeProject === project.id ? (
                      <>
                        <ChevronUp className="w-3.5 h-3.5" />
                        Hide
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-3.5 h-3.5" />
                        Details
                      </>
                    )}
                  </button>

                  <div className="flex gap-1.5">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-md bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                      aria-label="Visit"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-md bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {activeProject && (
            <motion.div
              id={`details-${activeProject}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-5xl mx-auto mb-16 academic-card p-0 overflow-hidden"
            >
              {projects
                .filter((p) => p.id === activeProject)
                .map((project) => (
                  <div key={`details-${project.id}`} className="animate-fadeIn">
                    <div className="h-56 relative bg-[var(--bg-secondary)]">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover object-center opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                        <div className="p-6">
                          <h2 className="font-serif text-2xl font-bold text-white mb-2">
                            {project.title}
                          </h2>
                          <div className="flex flex-wrap gap-1.5">
                            {project.keywords.map((keyword, idx) => (
                              <span
                                key={idx}
                                className="text-[10px] px-2 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-sm"
                              >
                                {keyword}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 md:p-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="font-serif text-base font-semibold mb-4 flex items-center gap-2 text-[var(--accent)]">
                            <CheckCircle className="w-4 h-4" />
                            Project Features
                          </h3>
                          <ul className="space-y-2.5">
                            {project.features.map((feature, index) => (
                              <li
                                key={index}
                                className="flex items-start text-sm"
                              >
                                <CheckCircle className="text-[var(--accent)] mt-0.5 mr-2 w-3.5 h-3.5 flex-shrink-0" />
                                <span className="text-[var(--text-secondary)]">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>

                          <h3 className="font-serif text-base font-semibold mt-6 mb-3 flex items-center gap-2 text-[var(--accent)]">
                            <Tag className="w-4 h-4" />
                            Technologies Used
                          </h3>
                          <div className="flex flex-wrap gap-1.5">
                            {project.keywords.map((keyword, index) => (
                              <span
                                key={index}
                                className="px-2.5 py-0.5 rounded-md text-xs bg-[var(--bg-tertiary)] text-[var(--text-secondary)]"
                              >
                                {keyword}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="font-serif text-base font-semibold mb-4 flex items-center gap-2 text-[var(--accent)]">
                            <Info className="w-4 h-4" />
                            Project Description
                          </h3>
                          <div className="text-sm leading-relaxed whitespace-pre-line text-[var(--text-secondary)]">
                            {project.description}
                          </div>

                          <div className="flex flex-wrap gap-3 mt-6">
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-academic"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Visit Project
                            </a>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-academic-outline"
                            >
                              <Github className="w-4 h-4" />
                              View GitHub
                            </a>
                          </div>
                        </div>
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
