"use client";

import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase/firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import {
  Star,
  StarOff,
  User,
  MessageSquare,
  LogIn,
  LogOut,
  Send,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Reviews = () => {
  const { darkMode } = useTheme();
  const { currentUser, login, logout, loading: authLoading } = useAuth();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    setIsLoading(true);
    try {
      const q = query(collection(db, "reviews"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const reviewsData = [];
      querySnapshot.forEach((doc) =>
        reviewsData.push({ id: doc.id, ...doc.data() }),
      );
      setReviews(reviewsData);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setError("Failed to load reviews. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    if (!currentUser) {
      setError("Please login to submit a review");
      return;
    }
    if (rating === 0) {
      setError("Please select a rating");
      return;
    }
    if (reviewText.trim() === "") {
      setError("Please enter a review");
      return;
    }

    setIsSubmitting(true);
    setError("");
    try {
      await addDoc(collection(db, "reviews"), {
        userId: currentUser.uid,
        userName: currentUser.displayName,
        userEmail: currentUser.email,
        userPhoto: currentUser.photoURL,
        rating,
        reviewText,
        createdAt: serverTimestamp(),
      });
      setSuccess("Your review has been submitted successfully!");
      setRating(0);
      setReviewText("");
      fetchReviews();
      setTimeout(() => setSuccess(""), 3000);
    } catch (error) {
      console.error("Error adding review:", error);
      setError("Failed to submit review. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* ============ HEADER ============ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="section-label mb-3 inline-flex">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Feedback</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            Reviews & Ratings
          </h1>
          <div className="academic-divider"></div>
          <p className="text-base max-w-2xl mx-auto text-[var(--text-secondary)] mt-4">
            Your feedback helps me improve! Please share your thoughts about my
            portfolio.
          </p>
        </motion.div>

        {/* ============ LOGIN / FORM SECTION (ALWAYS PROMINENT) ============ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-14 academic-card p-6 md:p-8 border-2"
          style={{ borderColor: "var(--accent)" }}
        >
          {/* Section title */}
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 rounded-md bg-[var(--accent-light)] text-[var(--accent)]">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold text-[var(--text-primary)]">
                {currentUser ? "Write a Review" : "Login to Write a Review"}
              </h2>
              <p className="text-xs text-[var(--text-muted)]">
                {currentUser
                  ? "Share your thoughts below"
                  : "Sign in with your Google account to continue"}
              </p>
            </div>
          </div>

          {/* Auth loading state */}
          {authLoading ? (
            <div className="flex justify-center py-6">
              <div className="animate-spin rounded-full h-8 w-8 border-2 border-[var(--border-color)] border-t-[var(--accent)]"></div>
            </div>
          ) : !currentUser ? (
            /* -------- LOGIN BUTTON -------- */
            <div className="text-center py-6">
              <button
                onClick={login}
                className="btn-academic text-base px-6 py-3"
              >
                <LogIn className="w-5 h-5" />
                Login with Google
              </button>
              <p className="mt-4 text-xs text-[var(--text-muted)]">
                You must be logged in to post a review.
              </p>
            </div>
          ) : (
            /* -------- REVIEW FORM -------- */
            <form onSubmit={handleSubmitReview}>
              <div className="flex items-center mb-5">
                {currentUser.photoURL ? (
                  <img
                    src={currentUser.photoURL}
                    alt={currentUser.displayName}
                    className="w-11 h-11 rounded-full mr-3 border-2 border-[var(--accent)]"
                  />
                ) : (
                  <div className="w-11 h-11 rounded-full mr-3 flex items-center justify-center bg-[var(--bg-tertiary)] text-[var(--accent)]">
                    <User size={20} />
                  </div>
                )}
                <div>
                  <span className="font-medium block text-[var(--text-primary)] text-sm">
                    {currentUser.displayName}
                  </span>
                  <span className="text-xs text-[var(--text-muted)]">
                    {currentUser.email}
                  </span>
                </div>
              </div>

              <div className="mb-5">
                <p className="mb-2 font-medium text-sm text-[var(--text-primary)]">
                  Your Rating:
                </p>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="mr-1 focus:outline-none"
                      aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                    >
                      {(hoverRating || rating) >= star ? (
                        <Star
                          className="text-[var(--accent)] fill-[var(--accent)]"
                          size={28}
                        />
                      ) : (
                        <StarOff
                          className="text-[var(--text-muted)]"
                          size={28}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="reviewText"
                  className="block mb-2 font-medium text-sm text-[var(--text-primary)]"
                >
                  Your Review:
                </label>
                <textarea
                  id="reviewText"
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  rows="4"
                  className="academic-input"
                  placeholder="Share your thoughts about my portfolio..."
                ></textarea>
              </div>

              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-4 p-3 bg-red-50 text-red-700 border border-red-200 rounded-md flex items-center gap-2 text-sm"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {error}
                  </motion.div>
                )}
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-4 p-3 bg-[var(--accent-light)] text-[var(--accent)] border border-[var(--border-color)] rounded-md flex items-center gap-2 text-sm"
                  >
                    <CheckCircle className="w-4 h-4" />
                    {success}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex flex-col sm:flex-row justify-between gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-academic disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Review
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={logout}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-[var(--bg-tertiary)] text-[var(--text-secondary)] border border-[var(--border-color)] hover:border-[var(--accent)] text-sm font-medium transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            </form>
          )}
        </motion.div>

        {/* ============ REVIEWS LIST ============ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-lg font-semibold flex items-center gap-2 text-[var(--accent)]">
              <MessageSquare className="w-4 h-4" />
              All Reviews
            </h2>
            <div className="flex items-center gap-2 px-3 py-1 text-xs bg-[var(--bg-tertiary)] rounded-full text-[var(--text-secondary)] border border-[var(--border-color)]">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{reviews.length} Reviews</span>
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-10 w-10 border-2 border-[var(--border-color)] border-t-[var(--accent)]"></div>
            </div>
          ) : reviews.length === 0 ? (
            <div className="text-center py-16 academic-card">
              <MessageSquare className="w-10 h-10 mx-auto mb-4 text-[var(--text-muted)]" />
              <p className="text-base text-[var(--text-secondary)]">
                No reviews yet. Be the first to leave a review!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="academic-card p-5"
                >
                  <div className="flex items-start">
                    {review.userPhoto ? (
                      <img
                        src={review.userPhoto}
                        alt={review.userName}
                        className="w-11 h-11 rounded-full mr-4 border border-[var(--border-color)]"
                      />
                    ) : (
                      <div className="w-11 h-11 rounded-full mr-4 flex items-center justify-center bg-[var(--bg-tertiary)] text-[var(--accent)]">
                        <User size={20} />
                      </div>
                    )}

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                        <h3 className="font-serif font-semibold text-base text-[var(--text-primary)]">
                          {review.userName}
                        </h3>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={
                                i < review.rating
                                  ? "text-[var(--accent)] fill-[var(--accent)]"
                                  : "text-[var(--border-strong)]"
                              }
                            />
                          ))}
                          <span className="ml-2 text-xs text-[var(--text-muted)]">
                            {review.createdAt?.toDate().toLocaleDateString() ||
                              "Just now"}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                        {review.reviewText}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Reviews;
