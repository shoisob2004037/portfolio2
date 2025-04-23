"use client"

import { useTheme } from "../context/ThemeContext"
import { Camera, BookOpen, Globe } from "lucide-react"
import { useState } from "react"

const Hobby = () => {
  const { darkMode } = useTheme()
  const [activeSlide, setActiveSlide] = useState(0)

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

  const nextSlide = () => {
    setActiveSlide((activeSlide + 1) % photos.length)
  }

  const prevSlide = () => {
    setActiveSlide((activeSlide - 1 + photos.length) % photos.length)
  }

  const goToSlide = (index) => {
    setActiveSlide(index)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Photography Section */}
        <section className="mb-20">
          <div className="text-center mb-8">
            <p className="text-xl font-semibold mb-2">Hobby</p>
            <h2 className="text-2xl font-bold flex items-center justify-center gap-2 mb-4">
              <Camera className={darkMode ? "text-cyan-400" : "text-cyan-600"} />
              <span className={darkMode ? "text-cyan-400" : "text-cyan-600"}>Photography</span>
            </h2>
            <p className="text-lg italic">
              "Photography isn't just a hobby for me, it's a passion that ignites my soul. Every click of the shutter
              captures not just an image, but a moment frozen in time. Traveling amplifies this joy, as I explore new
              places, seeking the perfect shot to frame the memories of my journey. It's not just about preserving
              moments; it's about encapsulating emotions, stories, and experiences through the lens of my camera. I love
              to stock stories into frame."
            </p>
          </div>

          {/* Photo Carousel */}
          <div className="relative mb-8 rounded-xl overflow-hidden">
            {photos.map((photo, index) => (
              <div
                key={index}
                className={`transition-opacity duration-500 ${
                  index === activeSlide ? "opacity-100" : "opacity-0 absolute inset-0"
                }`}
              >
                <img
                  src={photo.src || "/placeholder.svg"}
                  alt={`Photography ${index + 1}`}
                  className="w-full h-auto max-h-[450px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                  <p className={`text-center ${photo.dark ? "text-black" : "text-white"}`}>{photo.caption}</p>
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicators */}
            <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-2">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full ${index === activeSlide ? "bg-white" : "bg-gray-400"}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="italic font-semibold mb-3">For Explore more Picture of my Photography:</p>
            <a
              href="https://shoisob2004037.github.io/photo-slider-portfolio-/"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block px-6 py-2 rounded-lg ${
                darkMode ? "bg-cyan-600 hover:bg-cyan-700" : "bg-cyan-500 hover:bg-cyan-600"
              } text-white transition-colors duration-300`}
            >
              Explore More
            </a>
          </div>
        </section>

        {/* Reading Books Section */}
        <section className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold flex items-center justify-center gap-2 mb-4">
              <BookOpen className={darkMode ? "text-cyan-400" : "text-cyan-600"} />
              <span className={darkMode ? "text-cyan-400" : "text-cyan-600"}>Reading Books</span>
            </h2>
            <p className="text-lg">
              Books fuel my thoughts and broaden my horizons. I am quite interested about Islamic Books like Paradox
              type. Here are some of my favorite reads:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-items-center">
            {books.map((book, index) => (
              <div key={index} className="book-card">
                <i className="fas fa-book text-green-600 text-3xl mb-2"></i>
                <h5 className="text-lg font-semibold mb-1">{book.title}</h5>
                <hr className="my-2" />
                <p className="text-sm text-gray-400">-{book.author}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Traveling Section */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold flex items-center justify-center gap-2 mb-4">
              <Globe className={darkMode ? "text-cyan-400" : "text-cyan-600"} />
              <span className={darkMode ? "text-cyan-400" : "text-cyan-600"}>Traveling</span>
            </h2>
            <p className="text-lg">
              Exploring new places fills me with joy and curiosity. Each journey adds a new chapter to my life, whether
              it's the busy streets of a city or the peaceful solitude of nature.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Hobby
