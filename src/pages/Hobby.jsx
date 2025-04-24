"use client"

import { useTheme } from "../context/ThemeContext"
import { Camera, BookOpen, Globe, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const Hobby = () => {
  const { darkMode } = useTheme()
  const [activeSlide, setActiveSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const photos = [
    { src: "/1.jpg", caption: "গ্রামের শীতের সকাল | 2023" },
    { src: "/3.jpg", caption: "জীবিকা | 2023" },
    { src: "/13.jpg", caption: "বিকেলের আড্ডা | 2023", dark: true },
    { src: "/19.jpg", caption: "গন্তব্য | 2023" },
    { src: "/16.jpg", caption: "বিচ্ছেদ । 2023" },
    { src: "/14.jpg", caption: "সিলেট ভ্রমন | 2023" },
    { src: "/23.jpg", caption: "শান্তি এখানে | 2022" },
    { src: "/20.jpg", caption: "কুয়াশার রাজ্যে | 2023" },
    { src: "/6.jpg", caption: "রিজিক | 2022" },
    { src: "/1627027050058-01.jpeg", caption: "তারারা | 2021" },
  ]

  const books = [
    { title: "প্যারাডক্সিক্যাল সাজিদ", author: "আরিফ আজাদ" },
    { title: "প্যারাডক্সিক্যাল সাজিদ", author: "আরিফ আজাদ" },
    { title: "মুক্ত বাতাসের খোঁজে", author: "লস্ট মডেস্টি" },
    { title: "প্রশান্তির খোঁজে", author: "উস্তাদ নোমান আলী খান" },
    { title: "গল্পগুলো অন্যরকম", author: "আরিফ আজাদ" },
    { title: "আরজ আলী সমীপে", author: "আরিফ আজাদ" },
    { title: "আমার বন্ধু রাশেদ", author: "মুহম্মদ জাফর ইকবাল" },
    { title: "নবি জীবনের গল্প", author: "আরিফ আজাদ" },
    { title: "বেলা ফুরাবার আগে", author: "আরিফ আজাদ" },
    { title: "আমার বন্ধু রাশেদ", author: "মুহম্মদ জাফর ইকবাল" },
  ]

  // Autoplay functionality
  useEffect(() => {
    let interval
    if (autoplay) {
      interval = setInterval(() => {
        setActiveSlide((activeSlide + 1) % photos.length)
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [activeSlide, autoplay, photos.length])

  const nextSlide = () => {
    setAutoplay(false) // Disable autoplay when manually navigating
    setActiveSlide((activeSlide + 1) % photos.length)
  }

  const prevSlide = () => {
    setAutoplay(false) // Disable autoplay when manually navigating
    setActiveSlide((activeSlide - 1 + photos.length) % photos.length)
  }

  const goToSlide = (index) => {
    setAutoplay(false) // Disable autoplay when manually navigating
    setActiveSlide(index)
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className={`${darkMode ? "bg-gray-900" : "bg-gradient-to-b from-cyan-50 to-white"}`}>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Photography Section */}
          <motion.section initial="hidden" animate="show" variants={container} className="mb-20">
            <motion.div variants={item} className="text-center mb-8">
              <p className="text-xl font-semibold mb-2">Hobby</p>
              <h2 className="text-3xl font-bold flex items-center justify-center gap-2 mb-4">
                <Camera className={`${darkMode ? "text-cyan-400" : "text-cyan-600"}`} />
                <span className={`${darkMode ? "text-cyan-400" : "text-cyan-600"} relative`}>
                  Photography
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></span>
                </span>
              </h2>
              <motion.p variants={item} className="text-lg italic leading-relaxed max-w-3xl mx-auto">
                "Photography isn't just a hobby for me, it's a passion that ignites my soul. Every click of the shutter
                captures not just an image, but a moment frozen in time. Traveling amplifies this joy, as I explore new
                places, seeking the perfect shot to frame the memories of my journey. It's not just about preserving
                moments; it's about encapsulating emotions, stories, and experiences through the lens of my camera. I
                love to stock stories into frame."
              </motion.p>
            </motion.div>

            {/* Photo Carousel */}
            <motion.div
              variants={item}
              className="relative mb-8 rounded-xl overflow-hidden shadow-2xl"
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
            >
              <div className="aspect-[16/9] relative">
                {photos.map((photo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: index === activeSlide ? 1 : 0,
                      scale: index === activeSlide ? 1 : 1.1,
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className={`absolute inset-0 ${index === activeSlide ? "z-10" : "z-0"}`}
                  >
                    <img
                      src={photo.src || "/placeholder.svg"}
                      alt={`Photography ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                      <p className={`text-center text-xl font-medium text-white`}>{photo.caption}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-20 transition-all duration-300 hover:scale-110"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-20 transition-all duration-300 hover:scale-110"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Indicators */}
              <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2 z-20">
                {photos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeSlide ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div variants={item} className="text-center">
              <p className="italic font-semibold mb-3">For Explore more Picture of my Photography:</p>
              <a
                href="https://shoisob2004037.github.io/photo-slider-portfolio-/"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg ${
                  darkMode
                    ? "bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800"
                    : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                } text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
              >
                Explore More
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.section>

          {/* Reading Books Section */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={container}
            className="mb-20"
          >
            <motion.div variants={item} className="text-center mb-8">
              <h2 className="text-3xl font-bold flex items-center justify-center gap-2 mb-4">
                <BookOpen className={`${darkMode ? "text-cyan-400" : "text-cyan-600"}`} />
                <span className={`${darkMode ? "text-cyan-400" : "text-cyan-600"} relative`}>
                  Reading Books
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></span>
                </span>
              </h2>
              <motion.p variants={item} className="text-lg max-w-3xl mx-auto">
                Books fuel my thoughts and broaden my horizons. I am quite interested about Islamic Books like Paradox
                type. Here are some of my favorite reads:
              </motion.p>
            </motion.div>

            <motion.div
              variants={container}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center"
            >
              {books.map((book, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: index * 0.05 },
                    },
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  className={`book-card p-4 rounded-lg ${
                    darkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"
                  } transition-all duration-300 flex flex-col items-center text-center h-full`}
                >
                  <BookOpen className={`text-cyan-500 w-10 h-10 mb-3`} />
                  <h5 className="text-lg font-semibold mb-1">{book.title}</h5>
                  <hr className={`my-2 w-16 border-t-2 ${darkMode ? "border-gray-700" : "border-gray-200"}`} />
                  <p className="text-sm text-gray-400">-{book.author}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Traveling Section */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={container}
          >
            <motion.div variants={item} className="text-center mb-8">
              <h2 className="text-3xl font-bold flex items-center justify-center gap-2 mb-4">
                <Globe className={`${darkMode ? "text-cyan-400" : "text-cyan-600"}`} />
                <span className={`${darkMode ? "text-cyan-400" : "text-cyan-600"} relative`}>
                  Traveling
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></span>
                </span>
              </h2>
              <motion.p variants={item} className="text-lg max-w-3xl mx-auto">
                Exploring new places fills me with joy and curiosity. Each journey adds a new chapter to my life,
                whether it's the busy streets of a city or the peaceful solitude of nature.
              </motion.p>
            </motion.div>

            <motion.div
              variants={item}
              className={`p-6 rounded-xl ${darkMode ? "bg-gray-800" : "bg-white"} shadow-xl border ${
                darkMode ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Travel destination"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <p className="p-4 text-white font-medium">Exploring new cultures</p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Travel destination"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <p className="p-4 text-white font-medium">Natural landscapes</p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Travel destination"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <p className="p-4 text-white font-medium">Urban adventures</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}

export default Hobby
