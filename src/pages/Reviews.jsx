"use client"

import { useState, useEffect } from "react"
import { useTheme } from "../context/ThemeContext"
import { useAuth } from "../context/AuthContext"
import { db } from "../firebase/firebase"
import { collection, addDoc, getDocs, query, orderBy, serverTimestamp } from "firebase/firestore"
import { Star, StarOff, User, MessageSquare, LogIn, LogOut, Send, AlertCircle, CheckCircle } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"

const Reviews = () => {
  const { darkMode } = useTheme()
  const { currentUser, login, logout } = useAuth()
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [reviewText, setReviewText] = useState("")
  const [reviews, setReviews] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  // Fetch reviews on component mount
  useEffect(() => {
    fetchReviews()
  }, [])

  const fetchReviews = async () => {
    setIsLoading(true)
    try {
      const q = query(collection(db, "reviews"), orderBy("createdAt", "desc"))
      const querySnapshot = await getDocs(q)

      const reviewsData = []
      querySnapshot.forEach((doc) => {
        reviewsData.push({ id: doc.id, ...doc.data() })
      })

      setReviews(reviewsData)
    } catch (error) {
      console.error("Error fetching reviews:", error)
      setError("Failed to load reviews. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmitReview = async (e) => {
    e.preventDefault()

    if (!currentUser) {
      setError("Please login to submit a review")
      return
    }

    if (rating === 0) {
      setError("Please select a rating")
      return
    }

    if (reviewText.trim() === "") {
      setError("Please enter a review")
      return
    }

    setIsSubmitting(true)
    setError("")

    try {
      await addDoc(collection(db, "reviews"), {
        userId: currentUser.uid,
        userName: currentUser.displayName,
        userEmail: currentUser.email,
        userPhoto: currentUser.photoURL,
        rating,
        reviewText,
        createdAt: serverTimestamp(),
      })

      setSuccess("Your review has been submitted successfully!")
      setRating(0)
      setReviewText("")
      fetchReviews() // Refresh reviews
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccess("")
      }, 3000)
    } catch (error) {
      console.error("Error adding review:", error)
      setError("Failed to submit review. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating)
  }

  const handleStarHover = (hoveredRating) => {
    setHoverRating(hoveredRating)
  }

  const handleStarLeave = () => {
    setHoverRating(0)
  }

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900" : "bg-gradient-to-b from-cyan-50 to-white"}`}>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className={`text-4xl font-bold ${darkMode ? "text-white" : "text-gray-900"} mb-4`}>
              <span className="relative inline-block">
                Reviews & Ratings
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></span>
              </span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto">
              Your feedback helps me improve! Please share your thoughts about my portfolio.
            </p>
          </motion.div>

          {/* Review Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`mb-16 p-8 rounded-xl shadow-xl ${
              darkMode ? "bg-gray-800 shadow-cyan-900/20" : "bg-white shadow-cyan-200/50"
            }`}
          >
            <h2 className={`text-xl font-semibold mb-6 flex items-center gap-2 ${darkMode ? "text-cyan-400" : "text-cyan-600"}`}>
              <MessageSquare className="w-5 h-5" />
              Leave a Review
            </h2>

            {!currentUser ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <p className="mb-6">Please login to leave a review</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={login}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg ${
                    darkMode
                      ? "bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800"
                      : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                  } text-white transition-all duration-300 shadow-lg hover:shadow-xl`}
                >
                  <LogIn className="w-4 h-4" />
                  Login with Google
                </motion.button>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                onSubmit={handleSubmitReview}
              >
                <div className="flex items-center mb-4">
                  {currentUser.photoURL ? (
                    <img
                      src={currentUser.photoURL || "/placeholder.svg"}
                      alt={currentUser.displayName}
                      className="w-12 h-12 rounded-full mr-3 border-2 border-cyan-500"
                    />
                  ) : (
                    <div
                      className={`w-12 h-12 rounded-full mr-3 flex items-center justify-center ${
                        darkMode ? "bg-gray-700" : "bg-gray-200"
                      }`}
                    >
                      <User size={24} />
                    </div>
                  )}
                  <div>
                    <span className="font-medium block">{currentUser.displayName}</span>
                    <span className="text-sm text-gray-500">{currentUser.email}</span>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="mb-6">
                  <p className="mb-2 font-medium">Your Rating:</p>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.button
                        key={star}
                        type="button"
                        onClick={() => handleStarClick(star)}
                        onMouseEnter={() => handleStarHover(star)}
                        onMouseLeave={handleStarLeave}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-2xl mr-1 focus:outline-none"
                      >
                        {(hoverRating || rating) >= star ? (
                          <Star className="text-yellow-400 fill-yellow-400" size={32} />
                        ) : (
                          <StarOff className="text-gray-400" size={32} />
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <div className="mb-6">
                  <label htmlFor="reviewText" className="block mb-2 font-medium">
                    Your Review:
                  </label>
                  <textarea
                    id="reviewText"
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    rows="4"
                    className={`w-full p-4 rounded-lg ${
                      darkMode
                        ? "bg-gray-700 border border-gray-600 text-white focus:border-cyan-500"
                        : "bg-white border border-gray-300 text-gray-900 focus:border-cyan-500"
                    } focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300`}
                    placeholder="Share your thoughts about my portfolio..."
                  ></textarea>
                </div>

                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg flex items-center gap-2"
                    >
                      <AlertCircle className="w-5 h-5" />
                      {error}
                    </motion.div>
                  )}

                  {success && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg flex items-center gap-2"
                    >
                      <CheckCircle className="w-5 h-5" />
                      {success}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg ${
                      darkMode
                        ? "bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800"
                        : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                    } text-white transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Review
                      </>
                    )}
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="button"
                    onClick={logout}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gray-500 hover:bg-gray-600 text-white transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </motion.button>
                </div>
              </motion.form>
            )}
          </motion.div>

          {/* Reviews List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className={`text-xl  font-semibold flex items-center gap-2 ${darkMode ? "text-cyan-400" : "text-cyan-600"}`}>
                <MessageSquare className="w-5 h-5" />
                All Reviews
              </h2>
              <div className="flex items-center gap-2 px-4 py-1 text-red-800 bg-blue-200 rounded-full bg-gray-100 dark:bg-gray-800">
                <MessageSquare className="w-4 h-4" />
                <span className="">{reviews.length} Reviews</span>
              </div>
            </div>

            {isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
              </div>
            ) : reviews.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-center py-16 rounded-xl ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}
              >
                <MessageSquare className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p className="text-lg">No reviews yet. Be the first to leave a review!</p>
              </motion.div>
            ) : (
              <div className="space-y-6">
                {reviews.map((review, index) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`p-6 rounded-xl ${
                      darkMode ? "bg-gray-800 shadow-lg" : "bg-white shadow-md"
                    } transition-all duration-300 hover:shadow-xl`}
                  >
                    <div className="flex items-start">
                      {review.userPhoto ? (
                        <img
                          src={review.userPhoto || "/placeholder.svg"}
                          alt={review.userName}
                          className="w-12 h-12 rounded-full mr-4 border-2 border-cyan-500"
                        />
                      ) : (
                        <div
                          className={`w-12 h-12 rounded-full mr-4 flex items-center justify-center ${
                            darkMode ? "bg-gray-700" : "bg-gray-200"
                          }`}
                        >
                          <User size={24} />
                        </div>
                      )}

                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="font-semibold text-lg">{review.userName}</h3>
                          <div className="flex items-center mt-1 sm:mt-0">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}
                              />
                            ))}
                            <span className="ml-2 text-sm text-gray-500">
                              {review.createdAt?.toDate().toLocaleDateString() || "Just now"}
                            </span>
                          </div>
                        </div>
                        <p className="mt-2 leading-relaxed">{review.reviewText}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Reviews

