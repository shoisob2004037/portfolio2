"use client"

import { useEffect } from "react"
import { useLocation } from "react-router-dom"

// This component handles scrolling to sections based on URL hash
const ScrollToSection = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // If there's a hash in the URL
    if (hash) {
      // Remove the # symbol
      const id = hash.replace("#", "")

      // Find the element with that id
      const element = document.getElementById(id)

      if (element) {
        // Wait a bit for the DOM to fully render
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
        }, 100)
      }
    } else {
      // If no hash, scroll to top of the page
      window.scrollTo(0, 0)
    }
  }, [pathname, hash]) // Re-run when location changes

  return null // This component doesn't render anything
}

export default ScrollToSection
