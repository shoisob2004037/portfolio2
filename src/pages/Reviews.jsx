"use client"

import { useState, useEffect } from "react"
import { useTheme } from "../context/ThemeContext"
import { useAuth } from "../context/AuthContext"
import { db } from "../firebase/firebase"
import { collection, addDoc, getDocs, query, orderBy, serverTimestamp } from "firebase/firestore"
import { Star, StarOff, User, MessageSquare } from "lucide-react"

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

  // Fetch reviews on component mount
  useEffect(() => {
    fetchReviews()
  }, [])

  const fetchReviews = async () => {
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
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className={`text-3xl font-bold ${darkMode ? "text-white" : "text-gray-900"} mb-4`}>Reviews & Ratings</h1>
          <p className="text-lg">Your feedback helps me improve! Please share your thoughts about my portfolio.</p>
        </div>

        {/* Review Form */}
        <div className={`mb-16 p-6 rounded-xl ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg`}>
          <h2 className={`text-xl font-semibold mb-6 ${darkMode ? "text-cyan-400" : "text-cyan-600"}`}>
            Leave a Review
          </h2>

          {!currentUser ? (
            <div className="text-center py-8">
              <p className="mb-6">Please login to leave a review</p>
              <button
                onClick={login}
                className={`px-6 py-2 rounded-lg ${
                  darkMode ? "bg-cyan-600 hover:bg-cyan-700" : "bg-cyan-500 hover:bg-cyan-600"
                } text-white transition-colors duration-300`}
              >
                Login with Google
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmitReview}>
              <div className="flex items-center mb-2">
                {currentUser.photoURL ? (
                  <img
                    src={currentUser.photoURL || "/placeholder.svg"}
                    alt={currentUser.displayName}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                ) : (
                  <div
                    className={`w-10 h-10 rounded-full mr-3 flex items-center justify-center ${
                      darkMode ? "bg-gray-700" : "bg-gray-200"
                    }`}
                  >
                    <User size={20} />
                  </div>
                )}
                <span>{currentUser.displayName}</span>
              </div>

              {/* Star Rating */}
              <div className="mb-6">
                <p className="mb-2">Your Rating:</p>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleStarClick(star)}
                      onMouseEnter={() => handleStarHover(star)}
                      onMouseLeave={handleStarLeave}
                      className="text-2xl mr-1 focus:outline-none"
                    >
                      {(hoverRating || rating) >= star ? (
                        <Star className="text-yellow-400 fill-yellow-400" size={28} />
                      ) : (
                        <StarOff className="text-gray-400" size={28} />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <div className="mb-6">
                <label htmlFor="reviewText" className="block mb-2">
                  Your Review:
                </label>
                <textarea
                  id="reviewText"
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  rows="4"
                  className={`w-full p-3 rounded-lg ${
                    darkMode
                      ? "bg-gray-700 border border-gray-600 text-white"
                      : "bg-white border border-gray-300 text-gray-900"
                  }`}
                  placeholder="Share your thoughts about my portfolio..."
                ></textarea>
              </div>

              {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">{error}</div>}

              {success && <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">{success}</div>}

              <div className="flex justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-2 rounded-lg ${
                    darkMode ? "bg-cyan-600 hover:bg-cyan-700" : "bg-cyan-500 hover:bg-cyan-600"
                  } text-white transition-colors duration-300 disabled:opacity-50`}
                >
                  {isSubmitting ? "Submitting..." : "Submit Review"}
                </button>

                <button
                  type="button"
                  onClick={logout}
                  className="px-6 py-2 rounded-lg bg-gray-500 hover:bg-gray-600 text-white transition-colors duration-300"
                >
                  Logout
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Reviews List */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className={`text-xl font-semibold ${darkMode ? "text-cyan-400" : "text-cyan-600"}`}>All Reviews</h2>
            <div className="flex items-center">
              <MessageSquare className="mr-2" size={18} />
              <span>{reviews.length} Reviews</span>
            </div>
          </div>

          {reviews.length === 0 ? (
            <div className={`text-center py-12 rounded-lg ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
              <p>No reviews yet. Be the first to leave a review!</p>
            </div>
          ) : (
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className={`p-6 rounded-xl ${darkMode ? "bg-gray-800" : "bg-white"} shadow-md`}>
                  <div className="flex items-start">
                    {review.userPhoto ? (
                      <img
                        src={review.userPhoto || "/placeholder.svg"}
                        alt={review.userName}
                        className="w-12 h-12 rounded-full mr-4"
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
                        <h3 className="font-semibold">{review.userName}</h3>
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
                      <p className="mt-2">{review.reviewText}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Reviews
