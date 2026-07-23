import React from 'react'
import { motion } from 'framer-motion'
import '../styles/Card.css'

/**
 * Reusable Card Component
 * Used for products, services, testimonials, etc.
 */

const Card = ({
  image,
  title,
  description,
  icon,
  badge,
  onClick,
  children,
  variant = 'default',
}) => {
  return (
    <motion.div
      className={`card card-${variant}`}
      whileHover={{ y: -10 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {image && (
        <div className="card-image">
          <img src={image} alt={title} loading="lazy" />
          {badge && <span className="card-badge">{badge}</span>}
        </div>
      )}

      {icon && <div className="card-icon">{icon}</div>}

      <div className="card-content">
        {title && <h3 className="card-title">{title}</h3>}
        {description && <p className="card-description">{description}</p>}
        {children}
      </div>
    </motion.div>
  )
}

export default Card
