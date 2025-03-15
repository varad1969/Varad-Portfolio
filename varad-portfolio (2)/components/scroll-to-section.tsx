"use client"

import { useEffect } from "react"

export default function ScrollToSection() {
  useEffect(() => {
    // Function to handle smooth scrolling
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      // Check if the clicked element is a link with a hash
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()

        const targetId = target.getAttribute("href")
        const targetElement = document.querySelector(targetId as string)

        if (targetElement) {
          // Scroll to the target element with smooth behavior
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })

          // Update URL without causing a page reload
          window.history.pushState(null, "", targetId)
        }
      }
    }

    // Add event listener to handle all link clicks
    document.addEventListener("click", handleLinkClick)

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("click", handleLinkClick)
    }
  }, [])

  return null
}

