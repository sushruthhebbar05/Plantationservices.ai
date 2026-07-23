import React from 'react'
import { motion } from 'framer-motion'
import '../styles/Hero.css'

/**
 * Hero Section Component
 * Large background image with headline and CTA buttons
 */

const Hero = ({
  title,
  subtitle,
  image,
  buttons = [],
  backgroundPosition = 'center',
}) => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition,
      }}
    >
      <div className="hero-overlay" />
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {buttons.map((button, idx) => (
              <motion.a
                key={idx}
                href={button.href}
                className={`btn ${button.variant || 'btn-primary'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {button.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
