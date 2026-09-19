"use client";

import { useTheme } from "../context/ThemeContext";
import {
  Camera,
  BookOpen,
  Globe,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hobby = () => {
  const { darkMode } = useTheme();
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

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
  ];

  const books = [
    { title: "প্যারাডক্সিক্যাল সাজিদ", author: "আরিফ আজাদ" },
    { title: "প্যারাডক্সিক্যাল সাজিদ ২", author: "আরিফ আজাদ" },
    { title: "মুক্ত বাতাসের খোঁজে", author: "লস্ট মডেস্টি" },
    { title: "প্রশান্তির খোঁজে", author: "উস্তাদ নোমান আলী খান" },
    { title: "গল্পগুলো অন্যরকম", author: "আরিফ আজাদ" },
    { title: "আরজ আলী সমীপে", author: "আরিফ আজাদ" },
    { title: "আমার বন্ধু রাশেদ", author: "মুহম্মদ জাফর ইকবাল" },
    { title: "নবি জীবনের গল্প", author: "আরিফ আজাদ" },
    { title: "বেলা ফুরাবার আগে", author: "আরিফ আজাদ" },
    { title: "কেপলার টুটুবি", author: "মুহম্মদ জাফর ইকবাল" },
  ];

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(
        () => setActiveSlide((activeSlide + 1) % photos.length),
        5000,
      );
    }
    return () => clearInterval(interval);
  }, [activeSlide, autoplay, photos.length]);

  const nextSlide = () => {
    setAutoplay(false);
    setActiveSlide((activeSlide + 1) % photos.length);
  };
  const prevSlide = () => {
    setAutoplay(false);
    setActiveSlide((activeSlide - 1 + photos.length) % photos.length);
  };
  const goToSlide = (index) => {
    setAutoplay(false);
    setActiveSlide(index);
  };

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

  return (
    <div className="bg-[var(--bg-primary)]">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Photography */}
        <motion.section
          initial="hidden"
          animate="show"
          variants={container}
          className="mb-20"
        >
          <motion.div variants={item} className="text-center mb-8">
            <div className="section-label mb-3 mx-auto inline-flex">
              <Camera className="w-3.5 h-3.5" />
              <span>Hobby</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-2">
              Photography
            </h2>
            <div className="academic-divider"></div>
            <motion.p
              variants={item}
              className="text-base italic leading-relaxed max-w-3xl mx-auto mt-4 text-[var(--text-secondary)]"
            >
              "Photography isn't just a hobby for me, it's a passion that
              ignites my soul. Every click of the shutter captures not just an
              image, but a moment frozen in time. Traveling amplifies this joy,
              as I explore new places, seeking the perfect shot to frame the
              memories of my journey. It's not just about preserving moments;
              it's about encapsulating emotions, stories, and experiences
              through the lens of my camera. I love to stock stories into
              frame."
            </motion.p>
          </motion.div>

          <motion.div
            variants={item}
            className="relative mb-8 rounded-lg overflow-hidden shadow-lg border border-[var(--border-color)]"
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
                    <p className="text-center text-lg font-medium text-white">
                      {photo.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2.5 rounded-full z-20 transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2.5 rounded-full z-20 transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2 z-20">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === activeSlide ? "bg-white w-6" : "bg-white/50 hover:bg-white/80 w-2"}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

          <motion.div variants={item} className="text-center">
            <p className="italic font-semibold mb-3 text-[var(--text-secondary)]">
              For explore more pictures of my photography:
            </p>
            <a
              href="https://shoisob2004037.github.io/photo-slider-portfolio-/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-academic"
            >
              Explore More
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.section>

        {/* Books */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
          className="mb-20"
        >
          <motion.div variants={item} className="text-center mb-8">
            <div className="section-label mb-3 mx-auto inline-flex">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Reading</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-2">
              Reading Books
            </h2>
            <div className="academic-divider"></div>
            <motion.p
              variants={item}
              className="text-base max-w-3xl mx-auto mt-4 text-[var(--text-secondary)]"
            >
              Books fuel my thoughts and broaden my horizons. I am quite
              interested about Islamic Books like Paradox type. Here are some of
              my favorite reads:
            </motion.p>
          </motion.div>

          <motion.div
            variants={container}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-items-center"
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
                className="academic-card p-4 flex flex-col items-center text-center w-full h-full"
              >
                <BookOpen className="text-[var(--accent)] w-8 h-8 mb-3" />
                <h5 className="font-serif text-sm font-semibold mb-2 text-[var(--text-primary)] leading-snug">
                  {book.title}
                </h5>
                <hr className="my-2 w-12 border-t border-[var(--border-color)]" />
                <p className="text-xs text-[var(--text-muted)]">
                  -{book.author}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Travel */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
        >
          <motion.div variants={item} className="text-center mb-8">
            <div className="section-label mb-3 mx-auto inline-flex">
              <Globe className="w-3.5 h-3.5" />
              <span>Travel</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-2">
              Traveling
            </h2>
            <div className="academic-divider"></div>
            <motion.p
              variants={item}
              className="text-base max-w-3xl mx-auto mt-4 text-[var(--text-secondary)]"
            >
              Exploring new places fills me with joy and curiosity. Each journey
              adds a new chapter to my life, whether it's the busy streets of a
              city or the peaceful solitude of nature.
            </motion.p>
          </motion.div>

          <motion.div variants={item} className="academic-card p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  alt: "Travel destination",
                  caption: "Exploring new cultures",
                },
                { alt: "Travel destination", caption: "Natural landscapes" },
                { alt: "Travel destination", caption: "Urban adventures" },
              ].map((t, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-lg aspect-[4/3] bg-[var(--bg-secondary)]"
                >
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt={t.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <p className="p-4 text-white font-medium text-sm">
                      {t.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default Hobby;
