import React, { useEffect, useState } from 'react'
import '../styles/ScrollProgress.css'

/**
 * Scroll Progress Bar Component
 * Shows scroll progress at the top of the page
 */

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="scroll-progress"
      style={{
        width: `${progress}%`,
        transition: 'width 0.1s ease-out',
      }}
    />
  )
}

export default ScrollProgress
