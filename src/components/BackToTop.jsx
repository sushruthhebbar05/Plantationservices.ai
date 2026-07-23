import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'
import '../styles/BackToTop.css'

/**
 * Back to Top Button Component
 * Smoothly scrolls page to top on click
 */

const BackToTop = () => {
  const [isVisible, setIsVisible] = React.useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  React.useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <motion.button
      className={`back-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      aria-label="Back to top"
    >
      <FiArrowUp size={20} />
    </motion.button>
  )
}

export default BackToTop
